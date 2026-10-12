import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Airsell Cargo | Air & Sea Freight Forwarding',
  description: 'Airsell Cargo provides reliable air and sea freight forwarding, customs clearance, warehousing, and end-to-end shipping support.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
