export default function ShippingPolicy() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen text-stone-800">
      <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
        
        {/* Document Header */}
        <div className="border-b border-stone-200 pb-6">
          <h1 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight uppercase mb-3">
            Shipping & Delivery Policy
          </h1>
          <div className="text-xs text-stone-500 font-mono space-y-1 leading-relaxed">
            <p><strong>Trade Name:</strong> garenaofficialshop</p>
            <p><strong>Proprietary Owner:</strong> PRANKRISHNA DAS</p>
            <p><strong>Business Type:</strong> E-commerce Retail & Custom Apparel Store</p>
            <p><strong>Registered Address:</strong> 02 NO TAKIMARI, Mantadari, PO: Milanpally, DIST: Jalpaiguri, West Bengal - 735133, India</p>
            <p><strong>Support Email:</strong> connectwithvexora@gmail.com | <strong>Contact:</strong> +91 9918396803</p>
            <p><strong>Effective Date:</strong> Last updated on {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>
        </div>

        {/* Policy Body */}
        <div className="space-y-6 text-xs sm:text-sm leading-relaxed text-stone-600">
          
          <p>
            At <strong>garenaofficialshop</strong> (PRANKRISHNA DAS), we partner with leading nationwide express courier networks to ensure your standard orders and custom-crafted items reach your doorstep safely, securely, and within established timeframes across India.
          </p>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-stone-900 tracking-tight">1. Order Processing & Production Lead Times</h2>
            <p>
              Order fulfillment timelines depend on whether your item is standard ready-to-ship inventory or custom made-to-order merchandise:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Custom Made-to-Order Merchandise:</strong> Customized apparel, personalized gaming jerseys, custom embroidery, and engraved gear require a mandatory manufacturing, printing, and handcrafting window of <strong>7 to 8 business days</strong> prior to dispatch.</li>
              <li><strong>Standard Retail Catalog Goods:</strong> Non-customized apparel, fashion accessories, and general merchandise are processed and prepared for dispatch within <strong>1 to 2 business days</strong>.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-stone-900 tracking-tight">2. Courier Transit & Logistics Timelines</h2>
            <p>
              Once your package is handed over to our logistics partners (e.g., DTDC, Delhivery, Speed Post, Blue Dart, or Ekart):
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Domestic Transit Window:</strong> Standard courier transit takes <strong>3 to 8 business days</strong> depending on your destination city, state, and pincode accessibility across India.</li>
              <li><strong>Tier-1 Metro Cities:</strong> Estimated 3 to 5 business days transit.</li>
              <li><strong>Tier-2 & Tier-3 Regional Areas / North East / J&K:</strong> Estimated 5 to 8 business days transit.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-stone-900 tracking-tight">3. Total Estimated Doorstep Delivery Timelines</h2>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs text-stone-700 space-y-2">
              <p><strong>• Custom Products Total Delivery Window:</strong> <strong>10 to 16 business days</strong> (7-8 days production + 3-8 days courier transit).</p>
              <p><strong>• Standard Catalog Products Total Delivery Window:</strong> <strong>4 to 10 business days</strong> (1-2 days processing + 3-8 days courier transit).</p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-stone-900 tracking-tight">4. Order Tracking & Notifications</h2>
            <p>
              As soon as your shipment is dispatched from our facility, you will receive an automated dispatch confirmation email and SMS containing your Airway Bill (AWB) number and live courier tracking link. You can track your parcel's real-time status directly on our <strong>Track Order</strong> page or through the courier portal.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-stone-900 tracking-tight">5. Incorrect Address & Undeliverable Shipments</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Customers are required to double-check their full shipping address, landmark, and 6-digit postal pincode during checkout.</li>
              <li>If a parcel is returned to our origin warehouse due to an incomplete/wrong address provided by the customer or repeated non-availability during delivery attempts, re-shipping charges will apply for re-dispatch.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-stone-900 tracking-tight">6. Transit Damage & Missing Items Protocol</h2>
            <p>
              All shipments are insured during transit. If your package arrives visibly tampered, damaged, or unsealed, please refuse delivery or report the issue to customer care <strong>within 24 hours of delivery</strong> with unboxing video proof so we can initiate an immediate claim with the courier and dispatch a replacement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-stone-900 tracking-tight">7. Shipping Desk Contact Information</h2>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs text-stone-700 space-y-1">
              <p className="font-bold text-stone-900">Logistics & Shipping Desk</p>
              <p>Proprietor: PRANKRISHNA DAS (garenaofficialshop)</p>
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

