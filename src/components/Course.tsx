'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle, CreditCard, AlertCircle, Car } from 'lucide-react';
import { siteContent } from '@/lib/content';

export default function Course() {
  const { course } = siteContent;

  return (
    <section id="kurz" className="section-pad bg-surface" aria-label="Kurz skupiny B a ceník">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <span className="text-brand-600 text-sm font-bold uppercase tracking-widest mb-3 block">
            Nabídka kurzů
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 mb-4">
            Ceník a vozidla
          </h2>
          <p className="text-slate-500 text-lg max-w-lg mx-auto">
            Provádíme výuku a výcvik na skupinu B (osobní automobil).
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Price card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              {/* Price header */}
              <div className="bg-gradient-to-br from-brand-900 to-brand-800 p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                    Skupina B
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-display font-extrabold">{course.priceFormatted}</span>
                </div>
                <p className="text-white/60 text-sm">{course.priceNote}</p>
              </div>

              {/* Features */}
              <div className="p-8 space-y-4">
                {[
                  'Výuka teorie i praktické jízdy',
                  'Výcvik na dvou typech vozidel',
                  'Výuka i o víkendech a svátcích',
                  'Možnost svozu z místa bydliště',
                  'Příprava na závěrečné zkoušky',
                  'Kondiční jízdy skupiny B',
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle size={17} className="text-brand-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}

                <div className="border-t border-slate-100 pt-4 mt-6">
                  <div className="flex items-center gap-2 mb-2">
                    <CreditCard size={16} className="text-brand-400" />
                    <span className="text-sm font-semibold text-slate-700">Platba</span>
                  </div>
                  <p className="text-sm text-slate-500 ml-6">{course.installments}</p>
                </div>

                <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 mt-2">
                  <div className="flex items-start gap-2">
                    <AlertCircle size={15} className="text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-700">{course.storno}</p>
                  </div>
                </div>

                <a
                  href="#kontakt"
                  className="block w-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-center px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-md mt-4 min-h-[44px] flex items-center justify-center"
                >
                  Přihlásit se do kurzu
                </a>
              </div>
            </div>
          </motion.div>

          {/* Vehicles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-3 space-y-6"
          >
            <h3 className="text-xl font-display font-bold text-slate-900 flex items-center gap-2">
              <Car size={20} className="text-brand-500" />
              Výcviková vozidla
            </h3>
            <p className="text-slate-500 text-sm -mt-2">
              {course.description}
            </p>

            {/* Side-by-side portrait cards — matches the natural 3:4 photo ratio */}
            <div className="grid grid-cols-2 gap-4">
              {course.vehicles.map((v, i) => (
                <motion.div
                  key={v.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
                  whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                  className="group bg-white rounded-2xl border border-slate-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100/40 overflow-hidden transition-shadow duration-300"
                >
                  {/* Portrait container matches the ~3:4 photo aspect ratio */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                    <Image
                      src={v.image}
                      alt={`Výcvikové vozidlo ${v.name} ${v.detail}`}
                      fill
                      className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 30vw"
                    />
                    {/* Bottom label */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/70 to-transparent pt-8 pb-3 px-3">
                      <span className="text-white font-display font-bold text-sm">
                        {v.name}
                      </span>
                      <span className="text-white/70 text-xs ml-1.5">{v.detail}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-1.5">
                      {v.highlights.map((h) => (
                        <span
                          key={h}
                          className="bg-brand-50 text-brand-700 text-xs font-semibold px-2 py-1 rounded-lg border border-brand-100"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 p-5 text-sm text-slate-500">
              <strong className="text-slate-700">Učebna:</strong> {course.classroom}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
