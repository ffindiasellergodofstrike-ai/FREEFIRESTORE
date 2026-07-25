import React from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    
    toast.success('Message sent successfully!', {
      description: `Thank you ${name}, we will get back to you within 24 hours.`,
      duration: 5000,
    });
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Contact Customer Care</h1>
        <p className="text-neutral-500 text-lg">We're here to help. Reach out to us for any queries regarding your orders or products.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
          <h2 className="text-xl font-bold mb-8">Get In Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-black mt-1" />
              <div>
                <h3 className="font-bold text-sm">Email Us</h3>
                <p className="text-slate-500 text-sm mb-1">Our team typically responds within 24 hours.</p>
                <div className="flex flex-col gap-1">
                  <a href="mailto:connectwithvexora@gmail.com" className="text-black font-semibold text-sm hover:underline">
                    connectwithvexora@gmail.com
                  </a>
                  <p className="text-black font-semibold text-sm">
                    Phone: +919918396803
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-black mt-1" />
              <div>
                <h3 className="font-bold text-sm">Registered Office</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  <strong>PRANKRISHNA DAS</strong><br/>
                  02 NO TAKIMARI, Mantadari, PO: Milanpally<br/>
                  DIST: Jalpaiguri, West Bengal - 735133
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-black mt-1" />
              <div>
                <h3 className="font-bold text-sm">Support Hours</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Monday - Saturday<br/>10:00 AM to 6:00 PM IST</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
          <h2 className="text-xl font-bold mb-6">Send a Message</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Name</label>
              <input required name="name" type="text" className="w-full text-xs p-3 rounded-lg border border-slate-200 outline-none focus:border-black" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Email</label>
              <input required name="email" type="email" className="w-full text-xs p-3 rounded-lg border border-slate-200 outline-none focus:border-black" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Order ID (Optional)</label>
              <input name="orderId" type="text" className="w-full text-xs p-3 rounded-lg border border-slate-200 outline-none focus:border-black" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Message</label>
              <textarea required name="message" rows={4} className="w-full text-xs p-3 rounded-lg border border-slate-200 outline-none focus:border-black"></textarea>
            </div>
            <button type="submit" className="w-full bg-black text-white px-8 py-4 rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors uppercase tracking-widest mt-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
