/**
 * Easebuzz Checkout Integration Script (Vanilla JS)
 *
 * Usage example:
 * <script src="/easebuzz-checkout.js"></script>
 * <script>
 * document.getElementById('pay-btn').onclick = function() {
 *   startEasebuzzPayment({
 *     txnid: "ORDER_" + Date.now(),
 *     amount: "499.00",
 *     productinfo: "Product Name",
 *     firstname: "Customer Name",
 *     email: "customer@email.com",
 *     phone: "9999999999",
 *     surl: window.location.origin + "/payment-success.html",
 *     furl: window.location.origin + "/payment-failure.html",
 *     onSuccess: function(res) {
 *       window.location.href = "/payment-success.html";
 *     },
 *     onFailure: function(res) {
 *       window.location.href = "/payment-failure.html";
 *     }
 *   });
 * }
 * </script>
 */

(function () {
  /**
   * Helper function to dynamically load the external Easebuzz SDK script once
   * @param {string} src - Script URL
   * @returns {Promise<void>}
   */
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      if (document.querySelector('script[src="' + src + '"]')) {
        resolve();
        return;
      }
      var script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = function () { resolve(); };
      script.onerror = function () { reject(new Error('Failed to load Easebuzz Checkout SDK script.')); };
      document.head.appendChild(script);
    });
  }

  /**
   * Global window function to start Easebuzz payment flow
   *
   * @param {Object} options - Payment options
   * @param {string} options.txnid - Transaction ID
   * @param {string|number} options.amount - Amount
   * @param {string} options.productinfo - Product Info
   * @param {string} options.firstname - Customer First Name
   * @param {string} options.email - Customer Email
   * @param {string} options.phone - Customer Phone
   * @param {string} [options.surl] - Success URL
   * @param {string} [options.furl] - Failure URL
   * @param {Function} [options.onSuccess] - Callback on success
   * @param {Function} [options.onFailure] - Callback on failure
   */
  window.startEasebuzzPayment = async function startEasebuzzPayment(options) {
    if (!options) {
      console.error('Easebuzz Checkout Error: Options object is required.');
      return;
    }

    var txnid = options.txnid;
    var amount = options.amount;
    var productinfo = options.productinfo;
    var firstname = options.firstname;
    var email = options.email;
    var phone = options.phone;
    var surl = options.surl || (window.location.origin + '/payment-success.html');
    var furl = options.furl || (window.location.origin + '/payment-failure.html');
    var onSuccess = options.onSuccess;
    var onFailure = options.onFailure;

    try {
      // 1. Call POST /api/initiate-payment to obtain access_key and merchant_key
      var res = await fetch('/api/initiate-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          txnid: txnid,
          amount: amount,
          productinfo: productinfo,
          firstname: firstname,
          email: email,
          phone: phone,
          surl: surl,
          furl: furl
        })
      });

      var data = await res.json();

      if (!res.ok || !data.access_key) {
        var errDesc = data.error || data.message || 'Failed to initiate payment on server.';
        console.error('Easebuzz Initiation Error:', errDesc, data);
        if (typeof onFailure === 'function') {
          onFailure({ status: 'failure', error: errDesc, details: data });
        }
        return;
      }

      var access_key = data.access_key;
      var merchant_key = data.merchant_key || '';

      // 2. Dynamically load Easebuzz Checkout SDK (only once)
      var sdkUrl = 'https://ebz-static.s3.ap-south-1.amazonaws.com/easecheckout/v2.0.0/easebuzz-checkout-v2.min.js';
      await loadScript(sdkUrl);

      // 3. Verify constructor is available
      if (typeof window.EasebuzzCheckout !== 'function') {
        throw new Error('EasebuzzCheckout SDK constructor is not loaded.');
      }

      // 4. Initialize EasebuzzCheckout modal in production ("prod") mode
      var eb = new window.EasebuzzCheckout(merchant_key, 'prod');
      eb.initiatePayment({
        access_key: access_key,
        onResponse: function (response) {
          console.log('Easebuzz Response:', response);
          if (
            response &&
            (response.status === 'success' ||
             response.result === 'payment_successfull' ||
             response.status === true)
          ) {
            if (typeof onSuccess === 'function') {
              onSuccess(response);
            }
          } else {
            if (typeof onFailure === 'function') {
              onFailure(response);
            }
          }
        }
      });

    } catch (err) {
      console.error('Easebuzz Payment Error:', err);
      if (typeof onFailure === 'function') {
        onFailure({ status: 'failure', error: err.message || 'Unexpected payment error.' });
      }
    }
  };
})();
