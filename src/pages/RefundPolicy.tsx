export default function RefundPolicy() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen text-stone-800">
      <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
        
        {/* Document Header */}
        <div className="border-b border-stone-200 pb-6">
          <h1 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight uppercase mb-3">
            Refund & Cancellation Policy
          </h1>
          <div className="text-xs text-stone-500 font-mono space-y-1 leading-relaxed">
            <p><strong>Trade Name:</strong> Free Fire Shop</p>
            <p><strong>Proprietary Owner:</strong> PRANKRISHNA DAS</p>
            <p><strong>Business Type:</strong> E-commerce Retail Store</p>
            <p><strong>Registered Address:</strong> 02 NO TAKIMARI, Mantadari, PO: Milanpally, DIST: Jalpaiguri, West Bengal - 735133, India</p>
            <p><strong>Support Email:</strong> connectwithvexora@gmail.com | <strong>Contact:</strong> +91 9918396803</p>
            <p><strong>Effective Date:</strong> Last updated on {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>
        </div>

        {/* Policy Body */}
        <div className="space-y-6 text-xs sm:text-sm leading-relaxed text-stone-600">
          
          <p>
            At <strong>Free Fire Shop</strong> (PRANKRISHNA DAS), customer satisfaction is paramount. We strive to provide transparent, equitable, and efficient procedures for order cancellations, returns, and refund requests. Please review our comprehensive refund framework below.
          </p>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-stone-900 tracking-tight">1. Order Cancellation & 24-Hour Free Cancellation Policy</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Free Order Cancellation (100% Refund):</strong> You may request a full, unpenalized order cancellation and 100% refund if your request is formally submitted strictly <strong>within 24 hours</strong> of placing your order on our platform.</li>
              <li>To initiate a cancellation within the 24-hour grace window, please contact customer support immediately via email at <code>connectwithvexora@gmail.com</code> or via phone at <code>+91 9918396803</code> with your Order ID and contact details.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-stone-900 tracking-tight">2. Late Cancellation & Order Processing Terms</h2>
            <p>
              Once orders have been processed for dispatch following the initial 24-hour window, standard cancellations may be subject to processing or restock deductions if the package has already been handed over to courier partners.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-stone-900 tracking-tight">3. Damaged, Defective, or Incorrect Items Protocol</h2>
            <p>
              In the unlikely event that you receive a damaged product, defective item, or incorrect merchandise:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>24-Hour Reporting Window:</strong> You must report the issue to our customer care team <strong>within 24 hours</strong> of parcel delivery as recorded by the courier tracking log.</li>
              <li><strong>Mandatory Verification Proof:</strong> To ensure swift resolution and prevent fraudulent claims, customers are requested to provide clear photos and an unedited unboxing video showing the shipping label, original sealed box, and the physical defect.</li>
              <li><strong>Resolution:</strong> Once validated by our quality assurance team, we will immediately arrange a free replacement dispatch or issue a 100% full refund at no additional cost to you.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-stone-900 tracking-tight">4. Non-Refundable & Ineligible Items</h2>
            <p>
              Refunds, returns, or replacements will not be entertained under the following circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Products returned without original packaging, tags, or in a used/washed condition.</li>
              <li>Items damaged due to customer misuse, improper handling, or failure to follow care instructions.</li>
              <li>Inaccuracies resulting from customer selection errors (e.g., incorrect sizes or colors selected during order placement).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-stone-900 tracking-tight">5. Refund Settlement & Credit Timelines</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Approved Refund Processing:</strong> Once a refund request is evaluated and approved by PRANKRISHNA DAS, the transaction will be processed through our payment gateway provider immediately.</li>
              <li><strong>Payout Timeframe:</strong> The refunded amount will be credited back to your original payment method (Credit Card, Debit Card, Net Banking, UPI, or Wallet) within <strong>5 to 7 working days</strong>, depending on your bank or card issuer's clearing cycle.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-stone-900 tracking-tight">6. Contact Information for Refund Requests</h2>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs text-stone-700 space-y-1">
              <p className="font-bold text-stone-900">Customer Support - Refund Desk</p>
              <p>Proprietor: PRANKRISHNA DAS (Free Fire Shop)</p>
              <p>Address: 02 NO TAKIMARI, Mantadari, PO: Milanpally, DIST: Jalpaiguri, West Bengal - 735133, India</p>
              <p>Email: connectwithvexora@gmail.com</p>
              <p>Phone: +91 9918396803 (10:00 AM - 6:00 PM IST, Monday to Saturday)</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

