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

export default function AboutPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <Header />
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">About us</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">Reliable logistics for businesses moving goods across borders.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Airsell Cargo is a freight forwarding company supporting importers, exporters, and businesses with tailored freight, transport, and shipping coordination services. Our focus is simple: move cargo efficiently, communicate clearly, and support every shipment with practical expertise.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
            <div className="text-2xl font-black text-brand-700">01</div>
            <h3 className="mt-4 text-xl font-bold text-slate-900">Mission</h3>
            <p className="mt-3 text-slate-600">To provide dependable cargo movement services that help clients keep trade and supply chains running smoothly.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
            <div className="text-2xl font-black text-brand-700">02</div>
            <h3 className="mt-4 text-xl font-bold text-slate-900">Vision</h3>
            <p className="mt-3 text-slate-600">To become a trusted cargo partner for businesses handling regional and international freight operations.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
            <div className="text-2xl font-black text-brand-700">03</div>
            <h3 className="mt-4 text-xl font-bold text-slate-900">Values</h3>
            <p className="mt-3 text-slate-600">We prioritize speed, accuracy, trust, and customer support in every logistics decision and shipment plan.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
