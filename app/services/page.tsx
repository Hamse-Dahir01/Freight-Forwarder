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

const services = [
  {
    title: 'Air Freight',
    copy: 'Priority air cargo services for urgent shipments, time-sensitive cargo, and international delivery planning.',
  },
  {
    title: 'Sea Freight',
    copy: 'Flexible ocean freight options for containerized cargo and large-volume trade requirements.',
  },
  {
    title: 'Customs Clearance',
    copy: 'Import and export document management, customs coordination, and compliance support to minimize delays.',
  },
  {
    title: 'Warehousing',
    copy: 'Safe storage, inventory handling, and distribution support for growing import and export businesses.',
  },
  {
    title: 'Project Cargo',
    copy: 'Specialized handling for oversized, complex, or high-priority cargo movements throughout the supply chain.',
  },
  {
    title: 'Door-to-Door',
    copy: 'End-to-end cargo coordination from origin pickup to final destination delivery for smoother logistics operations.',
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <Header />
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Services</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">Flexible logistics services for every shipment.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Airsell Cargo supports importers, exporters, and freight customers with practical shipping solutions designed to keep cargo moving with fewer disruptions and clearer communication.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-xl text-brand-700">→</div>
              <h2 className="text-xl font-bold text-slate-900">{service.title}</h2>
              <p className="mt-4 text-slate-600">{service.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
