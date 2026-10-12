const services = [
  {
    title: 'Air Freight',
    description: 'Fast-moving air cargo solutions for urgent, time-sensitive, and high-value shipments across global trade lanes.',
  },
  {
    title: 'Sea Freight',
    description: 'Flexible FCL and LCL ocean freight options designed for cost efficiency and reliable transit schedules.',
  },
  {
    title: 'Customs Clearance',
    description: 'Documentation, compliance checks, and border coordination help reduce delays and keep cargo moving smoothly.',
  },
  {
    title: 'Warehousing',
    description: 'Secure storage, inventory visibility, and distribution support for import, export, and bonded operations.',
  },
];

const stats = [
  { number: '25+', label: 'Years of logistics expertise' },
  { number: '120+', label: 'Global trade routes served' },
  { number: '99.5%', label: 'On-time milestone performance' },
  { number: '24/7', label: 'Client support' },
];

const highlights = [
  'Door-to-door logistics coordination',
  'Experienced air and sea freight specialists',
  'Transparent pricing and milestone tracking',
  'Clear customs and compliance support',
];

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

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <Header />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <span className="mb-5 inline-flex w-fit rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
            Trusted shipping partners
          </span>
          <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
            Move cargo globally with confidence.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            From urgent air shipments to cost-effective sea freight and customs coordination, we help businesses move goods faster, smarter, and with full visibility.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="/quote" className="rounded-full bg-brand-500 px-6 py-3.5 text-center text-base font-semibold text-white shadow-soft transition hover:bg-brand-700">
              Get a Freight Quote
            </a>
            <a href="/tracking" className="rounded-full border border-slate-300 bg-white px-6 py-3.5 text-center text-base font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-500">
              Track Shipment
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-500">
            <span>Import & export logistics</span>
            <span>•</span>
            <span>Customs support</span>
            <span>•</span>
            <span>24/7 operations</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-8 h-32 w-32 rounded-full bg-brand-100 blur-3xl" />
          <div className="absolute -right-10 bottom-10 h-36 w-36 rounded-full bg-sky-100 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-brand-900 via-brand-700 to-sky-500 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-sky-100">Live shipment</div>
                  <div className="mt-3 text-3xl font-bold">AF-2048</div>
                </div>
                <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider">
                  In transit
                </div>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-sky-100">Origin</div>
                  <div className="mt-2 text-xl font-semibold">Dubai</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-sky-100">Destination</div>
                  <div className="mt-2 text-xl font-semibold">Singapore</div>
                </div>
              </div>

              <div className="mt-8">
                <div className="mb-2 flex items-center justify-between text-sm text-sky-100">
                  <span>Progress</span>
                  <span>76%</span>
                </div>
                <div className="h-2.5 rounded-full bg-white/20">
                  <div className="h-full w-[76%] rounded-full bg-white" />
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Route</div>
                <div className="mt-2 text-lg font-semibold text-slate-800">Asia-Pacific</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">ETA</div>
                <div className="mt-2 text-lg font-semibold text-slate-800">4 days</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-900 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="text-3xl font-black">{item.number}</div>
              <div className="mt-3 text-sm text-sky-100">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Our services</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
            Freight solutions built around your supply chain.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand-100">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-xl text-brand-700">→</div>
              <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">Why choose us</p>
            <h3 className="mt-4 text-3xl font-black tracking-tight">A logistics partner that keeps trade moving.</h3>

            <ul className="mt-8 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-slate-200">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-slate-500">Planning</div>
              <div className="mt-4 text-2xl font-bold text-slate-900">Route optimization</div>
              <p className="mt-4 text-slate-600">We design routing plans that balance speed, cost, and reliability across each shipment.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-slate-500">Documentation</div>
              <div className="mt-4 text-2xl font-bold text-slate-900">End-to-end compliance</div>
              <p className="mt-4 text-slate-600">Our documentation team helps manage customs, declarations, permits, and cross-border approvals.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-slate-500">Visibility</div>
              <div className="mt-4 text-2xl font-bold text-slate-900">Real-time updates</div>
              <p className="mt-4 text-slate-600">Clients receive milestone tracking, proactive notifications, and portfolio visibility at every stage.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-slate-500">Support</div>
              <div className="mt-4 text-2xl font-bold text-slate-900">Dedicated account team</div>
              <p className="mt-4 text-slate-600">Each client is supported by a responsive logistics advisor focused on operational continuity.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">Shipment tracking</p>
            <h3 className="mt-4 text-3xl font-black tracking-tight text-slate-900">Track your cargo in real time.</h3>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <input
                aria-label="Tracking number"
                placeholder="Enter tracking number"
                className="w-full rounded-full border border-slate-300 bg-slate-50 px-5 py-3.5 text-base text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
              />
              <button className="rounded-full bg-brand-500 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-brand-700">
                Track Now
              </button>
            </div>
          </div>

          <div className="rounded-[1.5rem] bg-slate-50 p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm uppercase tracking-[0.2em] text-slate-500">Latest update</span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">On schedule</span>
            </div>
            <div className="mt-5 text-2xl font-bold text-slate-900">AF-2048</div>
            <div className="mt-3 text-slate-600">Arrived at a transshipment hub and is expected to clear customs tomorrow morning.</div>
            <div className="mt-8 space-y-4 text-sm text-slate-600">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span>Current location</span>
                <span className="font-semibold text-slate-900">Jebel Ali, UAE</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span>Destination</span>
                <span className="font-semibold text-slate-900">Singapore</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Estimated arrival</span>
                <span className="font-semibold text-slate-900">4 days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">Contact us</p>
            <h3 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">Ready to move your next shipment?</h3>
            <p className="mt-5 max-w-lg text-lg text-slate-300">
              Speak with our team to plan freight forwarding, customs support, and supply-chain visibility for your business.
            </p>
            <div className="mt-8 space-y-4 text-slate-200">
              <p>Phone: +971 4 555 2048</p>
              <p>Email: hello@atlasfreight.com</p>
              <p>Address: Dubai Logistics Park, UAE</p>
            </div>
          </div>

          <form className="rounded-[2rem] bg-white p-8 text-slate-900 shadow-soft">
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
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-700">Shipment details</label>
              <textarea className="min-h-[120px] w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" placeholder="Tell us about your cargo, origin, destination, and timeline." />
            </div>
            <button className="mt-6 rounded-full bg-brand-500 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-brand-700">
              Request a Quote
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
