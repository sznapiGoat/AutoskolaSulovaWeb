import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Nunito } from 'next/font/google';
import './globals.css';

const display = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const body = Nunito({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Autoškola Barbora Šůlová — Rokycany',
  description: 'Kurz skupiny B (osobní automobil) v Rokycanech. Osobní přístup, dvě výcviková vozidla, výuka o víkendech. 19 000 Kč, možnost splátek.',
  keywords: 'autoškola, Rokycany, skupina B, řidičský průkaz, Barbora Šůlová, kurz řízení',
  openGraph: {
    title: 'Autoškola Barbora Šůlová',
    description: 'Kurz skupiny B v Rokycanech — pohodová atmosféra, skvělá příprava na zkoušky.',
    type: 'website',
    locale: 'cs_CZ',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased bg-surface text-slate-900">
        {children}
      </body>
    </html>
  );
}
