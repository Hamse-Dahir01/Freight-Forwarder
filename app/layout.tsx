import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Atlas Freight | Air & Sea Freight Forwarding',
  description: 'Professional freight forwarding solutions for air cargo, sea cargo, customs clearance, warehousing, and end-to-end logistics support.',
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
