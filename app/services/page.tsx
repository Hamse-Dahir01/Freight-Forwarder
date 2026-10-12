import { SiteFooter } from '../../components/site-footer';
import { SiteHeader } from '../../components/site-header';

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
      <SiteHeader />
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

      <SiteFooter />
    </main>
  );
}
