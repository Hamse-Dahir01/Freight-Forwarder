import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';

const services = [
  {
    title: 'Air Freight',
    description: 'Fast and dependable air cargo services for time-sensitive shipments, urgent goods, and cross-border deliveries.',
  },
  {
    title: 'Sea Freight',
    description: 'Flexible sea freight solutions for bulk shipments, container cargo, and cost-efficient international transport.',
  },
  {
    title: 'Customs Clearance',
    description: 'Efficient customs processing and documentation support to reduce delays and keep cargo moving without disruption.',
  },
  {
    title: 'Warehousing',
    description: 'Secure storage, handling, and inventory support for importers, exporters, and businesses with growing supply chains.',
  },
];

const stats = [
  { number: '24/7', label: 'Customer support' },
  { number: '100+', label: 'Shipments coordinated' },
  { number: '99%', label: 'Operational reliability' },
  { number: 'Global', label: 'Freight network' },
];

const highlights = [
  'Door-to-door cargo coordination',
  'Reliable air and sea freight services',
  'Transparent communication and updates',
  'Customs and documentation assistance',
];

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <SiteHeader />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <span className="mb-5 inline-flex w-fit rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
            Trusted shipping partner
          </span>
          <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
            Shipping cargo across borders with speed and confidence.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">
            Airsell Cargo helps businesses move goods safely and efficiently through air and sea freight solutions, customs support, and responsive logistics coordination.
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
            <span>Air freight</span>
            <span>•</span>
            <span>Sea freight</span>
            <span>•</span>
            <span>Customs support</span>
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
                  <div className="mt-3 text-3xl font-bold">AC-2048</div>
                </div>
                <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider">
                  In transit
                </div>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-sky-100">Origin</div>
                  <div className="mt-2 text-xl font-semibold">Mogadishu</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-sky-100">Destination</div>
                  <div className="mt-2 text-xl font-semibold">Dubai</div>
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
                <div className="mt-2 text-lg font-semibold text-slate-800">Africa–Middle East</div>
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
            <h3 className="mt-4 text-3xl font-black tracking-tight">Dependable logistics support, tailored to your cargo.</h3>

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
              <p className="mt-4 text-slate-600">We design practical shipping plans that balance cost, speed, and operational reliability.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-slate-500">Documentation</div>
              <div className="mt-4 text-2xl font-bold text-slate-900">End-to-end compliance</div>
              <p className="mt-4 text-slate-600">Our team works through paperwork, customs requirements, and clearances to reduce unnecessary delays.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-slate-500">Visibility</div>
              <div className="mt-4 text-2xl font-bold text-slate-900">Real-time updates</div>
              <p className="mt-4 text-slate-600">We keep clients informed through every stage of the shipment journey, from pickup to delivery.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-slate-500">Support</div>
              <div className="mt-4 text-2xl font-bold text-slate-900">Dedicated assistance</div>
              <p className="mt-4 text-slate-600">Our team stays available to answer questions, resolve issues, and coordinate urgent freight needs.</p>
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
            <div className="mt-5 text-2xl font-bold text-slate-900">AC-2048</div>
            <div className="mt-3 text-slate-600">Cargo arrived at the transit hub and is scheduled for customs processing tomorrow morning.</div>
            <div className="mt-8 space-y-4 text-sm text-slate-600">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span>Current location</span>
                <span className="font-semibold text-slate-900">Dubai</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span>Destination</span>
                <span className="font-semibold text-slate-900">Mogadishu</span>
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
            <h3 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">Need a dependable freight partner?</h3>
            <p className="mt-5 max-w-lg text-lg text-slate-300">
              Talk with Airsell Cargo about air freight, sea freight, customs support, and end-to-end shipment coordination.
            </p>
            <div className="mt-8 space-y-4 text-slate-200">
              <p>Phone: +252 634 823310</p>
              <p>Email: info@airsellcargo.com</p>
              <p>Location: Somalia</p>
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
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-700">Shipment details</label>
              <textarea className="min-h-[120px] w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100" placeholder="Tell us about your cargo requirement" />
            </div>
            <button className="mt-6 rounded-full bg-brand-500 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-brand-700">
              Request a Quote
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
