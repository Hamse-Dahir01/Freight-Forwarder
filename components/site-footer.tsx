import Link from 'next/link';

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/tracking', label: 'Tracking' },
  { href: '/quote', label: 'Quote' },
  { href: '/contact', label: 'Contact' },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.2fr_0.8fr_0.9fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-lg font-bold text-white shadow-soft">
              A
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight text-white">Airsell Cargo</div>
              <div className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Global Logistics</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
            Reliable air and sea freight forwarding, customs support, and coordinated shipment solutions for businesses moving cargo across borders.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Quick links</div>
          <div className="mt-4 flex flex-wrap gap-5 text-sm text-slate-300">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</div>
          <div className="mt-4 space-y-2 text-sm text-slate-300">
            <p>+252 634 823310</p>
            <p>info@airsellcargo.com</p>
            <p>Somalia</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-5 text-sm text-slate-400 lg:px-8">
          © 2025 Airsell Cargo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
