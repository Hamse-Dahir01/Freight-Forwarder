import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';

export default function QuotePage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <SiteHeader />
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Request a quote</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">Tell us about your shipment.</h1>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20 lg:px-8">
        <form className="rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-slate-200">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
              <input className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" placeholder="Your full name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Company</label>
              <input className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" placeholder="Company name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <input className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" placeholder="name@email.com" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Service</label>
              <select className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100">
                <option>Air Freight</option>
                <option>Sea Freight</option>
                <option>Customs Clearance</option>
                <option>Warehousing</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Origin</label>
              <input className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" placeholder="Mogadishu" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Destination</label>
              <input className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" placeholder="Dubai" />
            </div>
          </div>
          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-slate-700">Shipment details</label>
            <textarea className="min-h-[140px] w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" placeholder="Provide shipment type, volume, urgency, and any special handling needs." />
          </div>
          <button className="mt-6 rounded-full bg-brand-500 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-brand-700">
            Submit Request
          </button>
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}
