function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-lg font-bold text-white shadow-soft">
            A
          </div>
          <div>
            <div className="text-lg font-bold tracking-tight">Atlas Freight</div>
            <div className="text-[10px] uppercase tracking-[0.24em] text-slate-500">Global Logistics</div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          <a href="/about" className="transition hover:text-brand-500">About</a>
          <a href="/services" className="transition hover:text-brand-500">Services</a>
          <a href="/tracking" className="transition hover:text-brand-500">Tracking</a>
          <a href="/quote" className="transition hover:text-brand-500">Quote</a>
          <a href="/contact" className="transition hover:text-brand-500">Contact</a>
        </nav>

        <a href="/quote" className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700">
          Request Quote
        </a>
      </div>
    </header>
  );
}

export default function QuotePage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <Header />
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Request a quote</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">Tell us about your shipment.</h1>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20 lg:px-8">
        <form className="rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-slate-200">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
              <input className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Company</label>
              <input className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" placeholder="Company name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <input className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" placeholder="name@company.com" />
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
              <input className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" placeholder="Dubai" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Destination</label>
              <input className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" placeholder="Singapore" />
            </div>
          </div>
          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-slate-700">Shipment details</label>
            <textarea className="min-h-[140px] w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" placeholder="Cargo type, weight, dimensions, timing, and special requirements." />
          </div>
          <button className="mt-6 rounded-full bg-brand-500 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-brand-700">
            Submit Request
          </button>
        </form>
      </section>
    </main>
  );
}
