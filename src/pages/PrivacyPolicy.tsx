export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen text-stone-800">
      <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
        
        {/* Document Header */}
        <div className="border-b border-stone-200 pb-6">
          <h1 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight uppercase mb-3">
            Privacy Policy
          </h1>
          <div className="text-xs text-stone-500 font-mono space-y-1 leading-relaxed">
            <p><strong>Trade Name:</strong> garenaofficialshop</p>
            <p><strong>Proprietary Owner:</strong> PRANKRISHNA DAS</p>
            <p><strong>Business Type:</strong> E-commerce Retail & Custom Apparel Store</p>
            <p><strong>Registered Address:</strong> 02 NO TAKIMARI, Mantadari, PO: Milanpally, DIST: Jalpaiguri, West Bengal - 735133, India</p>
            <p><strong>Data Privacy Email:</strong> connectwithvexora@gmail.com | <strong>Contact:</strong> +91 9918396803</p>
            <p><strong>Effective Date:</strong> Last updated on {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>
        </div>

        {/* Policy Body */}
        <div className="space-y-6 text-xs sm:text-sm leading-relaxed text-stone-600">
          
          <p>
            <strong>garenaofficialshop</strong> (PRANKRISHNA DAS) is committed to respecting your privacy and safeguarding your personal information. This Privacy Policy details how we collect, utilize, store, share, and protect customer information when you visit or make a purchase on our platform in compliance with the Information Technology Act, 2000 and applicable data protection regulations.
          </p>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-stone-900 tracking-tight">1. Information We Collect</h2>
            <p>
              When you browse our store, create an account, or initiate a transaction, we collect the following categories of information:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Personal Identifiers:</strong> Full name, shipping and billing address, email address, mobile phone number, and account login details.</li>
              <li><strong>Transaction & Payment Data:</strong> Payment transaction reference numbers, order history, and payment method used. <em>Note: We do not store raw credit card numbers, CVVs, or Net Banking credentials on our servers; all payment transactions are tokenized and processed securely via RBI-compliant PCI-DSS payment gateways.</em></li>
              <li><strong>Customization Media & Specifications:</strong> Custom text, player UIDs, logos, graphics, and artwork files uploaded by you for product customization or personalized printing.</li>
              <li><strong>Technical Device Information:</strong> IP address, browser type, operating system, time zone, and cookie identifiers collected automatically during platform navigation.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-stone-900 tracking-tight">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Order Fulfillment & Custom Production:</strong> Processing transactions, manufacturing customized items (e.g., printing customized apparel), arranging shipping, and sending automated tracking updates via SMS or email.</li>
              <li><strong>Customer Support & Verification:</strong> Responding to inquiries, resolving delivery issues, verifying unboxing videos for defective claims, and processing cancellation or refund requests.</li>
              <li><strong>Security & Fraud Prevention:</strong> Screening incoming orders for risk, unauthorized transactions, or fraudulent chargeback attempts.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-stone-900 tracking-tight">3. Custom Asset Privacy & Protection</h2>
            <p>
              Any custom images, artwork files, or personalized text provided by customers are used strictly for the sole purpose of manufacturing and quality-checking your ordered products. We do not sell, license, or publish customer-submitted artwork or player identification numbers to any third party.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-stone-900 tracking-tight">4. Third-Party Data Sharing & Disclosure</h2>
            <p>
              We strictly do not sell, rent, or trade your personal data to third-party advertisers. Information is disclosed only to essential service partners required to complete your order:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Logistics & Courier Partners:</strong> Sharing recipient name, delivery address, and phone number with courier companies (e.g., DTDC, Delhivery, Speed Post) for doorstep delivery.</li>
              <li><strong>Authorized Payment Gateways:</strong> Transmitting necessary billing data to licensed payment gateway partners for encrypted payment authorization.</li>
              <li><strong>Legal Compliance:</strong> Disclosing information if required by court order, law enforcement request, or statutory obligation under Indian jurisdiction.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-stone-900 tracking-tight">5. Data Security & Storage Standards</h2>
            <p>
              We implement industry-standard 256-bit SSL encryption across our entire website. Access to personal and order records is restricted to authorized administrative personnel on a strict need-to-know basis.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-stone-900 tracking-tight">6. Data Retention & User Rights</h2>
            <p>
              We retain transaction records and order data for as long as required to fulfill warranty obligations, maintain tax compliance, and resolve financial disputes. Customers may request updates, corrections, or deletion of their account profile by contacting our Data Protection Officer.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-stone-900 tracking-tight">7. Contact & Privacy Grievance Officer</h2>
            <p>
              For privacy concerns, data deletion requests, or questions regarding our information handling practices, please contact:
            </p>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs text-stone-700 space-y-1">
              <p className="font-bold text-stone-900">Data Privacy Officer - garenaofficialshop</p>
              <p>Attention: PRANKRISHNA DAS</p>
              <p>Registered Address: 02 NO TAKIMARI, Mantadari, PO: Milanpally, DIST: Jalpaiguri, West Bengal - 735133, India</p>
              <p>Email: connectwithvexora@gmail.com</p>
              <p>Phone: +91 9918396803 (Monday to Saturday, 10:00 AM - 6:00 PM IST)</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

