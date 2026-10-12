import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Airsell Cargo | Air & Sea Freight Forwarding',
  description:
    'Airsell Cargo provides reliable air and sea freight forwarding, customs clearance, warehousing, and end-to-end shipping support.',
  metadataBase: new URL('https://airsellcargo.com'),
  openGraph: {
    title: 'Airsell Cargo',
    description: 'Trusted freight forwarding for air and sea cargo.',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#0f6fc5',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">{children}</body>
    </html>
  );
}
