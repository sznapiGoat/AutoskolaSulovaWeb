'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { siteContent } from '@/lib/content';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    setAtTop(y < 20);
  });

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        atTop ? 'bg-transparent' : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
      }`}
      aria-label="Hlavní navigace"
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-18">

          {/* Logo — text */}
          <a
            href="#"
            aria-label="Autoškola Barbora Šůlová, zpět nahoru"
            className="flex flex-col leading-none shrink-0"
          >
            <span className={`font-display font-extrabold text-base md:text-lg transition-colors ${atTop ? 'text-white' : 'text-brand-900'}`}>
              Autoškola
            </span>
            <span className={`font-display font-bold text-sm md:text-base transition-colors ${atTop ? 'text-amber-400' : 'text-amber-500'}`}>
              Barbora Šůlová
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Sekce stránky">
            {siteContent.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 min-h-[44px] flex items-center ${
                  atTop
                    ? 'text-white/90 hover:text-white hover:bg-white/10'
                    : 'text-slate-600 hover:text-brand-700 hover:bg-brand-50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${siteContent.contact.phoneRaw}`}
              className={`flex items-center gap-2 text-sm font-semibold transition-colors min-h-[44px] px-3 ${
                atTop ? 'text-white/80 hover:text-white' : 'text-slate-500 hover:text-brand-700'
              }`}
              aria-label={`Zavolat: ${siteContent.contact.phone}`}
            >
              <Phone size={15} />
              {siteContent.contact.phone}
            </a>
            <a
              href="#prihlaska"
              className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-md min-h-[44px] flex items-center"
            >
              Nezávazná poptávka
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`md:hidden p-2 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center ${
              atTop ? 'text-white hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'
            }`}
            aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Mobilní menu">
              {siteContent.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-slate-700 font-semibold hover:bg-brand-50 hover:text-brand-700 transition-colors min-h-[44px] flex items-center"
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-slate-100 mt-2 pt-4 flex flex-col gap-2">
                <a
                  href={`tel:${siteContent.contact.phoneRaw}`}
                  className="flex items-center gap-2 px-4 py-3 text-slate-600 font-semibold min-h-[44px]"
                  aria-label={`Zavolat: ${siteContent.contact.phone}`}
                >
                  <Phone size={16} className="text-brand-600" />
                  {siteContent.contact.phone}
                </a>
                <a
                  href="#prihlaska"
                  onClick={() => setMenuOpen(false)}
                  className="bg-brand-600 text-white text-center font-bold px-5 py-3 rounded-xl min-h-[44px] flex items-center justify-center"
                >
                  Nezávazná poptávka
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
