function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-lg font-bold text-white shadow-soft">
            A
          </div>
          <div>
            <div className="text-lg font-bold tracking-tight">Airsell Cargo</div>
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

const shipments = [
  { id: 'AC-2048', route: 'Mogadishu → Dubai', status: 'In transit', detail: 'Customs processing scheduled for tomorrow morning.' },
  { id: 'AC-7811', route: 'Djibouti → Jeddah', status: 'Arrived at port', detail: 'Terminal clearance in progress.' },
  { id: 'AC-5029', route: 'Nairobi → Doha', status: 'Delayed by weather', detail: 'Updated ETA shared with the client team.' },
];

export default function TrackingPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <Header />
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Shipment tracking</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">Track your cargo with confidence.</h1>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <input
            placeholder="Enter tracking number"
            className="w-full rounded-full border border-slate-300 bg-white px-5 py-3.5 text-base outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          />
          <button className="rounded-full bg-brand-500 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-brand-700">
            Track Now
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="space-y-5">
          {shipments.map((item) => (
            <div key={item.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-slate-500">Tracking ID</div>
                  <div className="mt-2 text-2xl font-black text-slate-900">{item.id}</div>
                </div>
                <div className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">{item.status}</div>
              </div>
              <div className="mt-4 text-lg font-semibold text-slate-800">{item.route}</div>
              <p className="mt-2 text-slate-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
