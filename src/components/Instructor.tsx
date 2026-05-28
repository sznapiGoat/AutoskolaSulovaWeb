'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle, Quote } from 'lucide-react';
import { siteContent } from '@/lib/content';

export default function Instructor() {
  const { instructor } = siteContent;

  return (
    <section id="instruktorka" className="section-pad bg-white" aria-label="Instruktorka">
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
            Váš průvodce za volantem
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900">
            Instruktorka & majitelka
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl shadow-brand-100">
              <Image
                src={instructor.photo}
                alt="Instruktorka Barbora Šůlová se žákyní u výcvikového vozidla"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Name tag overlay */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-lg">
                <p className="font-display font-extrabold text-slate-900 text-lg leading-tight">{instructor.name}</p>
                <p className="text-brand-600 text-sm font-semibold mt-0.5">{instructor.title}</p>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="absolute -top-4 -right-4 bg-amber-500 text-brand-900 font-display font-extrabold rounded-2xl px-4 py-3 shadow-lg shadow-amber-200"
            >
              <div className="text-2xl leading-none">2017</div>
              <div className="text-xs font-semibold mt-0.5">rok vzniku</div>
            </motion.div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
          >
            <h3 className="text-2xl md:text-3xl font-display font-extrabold text-slate-900 mb-5">
              {instructor.name}
            </h3>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-7">
              {instructor.bio}
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {instructor.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle size={17} className="text-brand-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm md:text-base">{h}</span>
                </li>
              ))}
            </ul>

            {/* Quote from a review */}
            <div className="bg-brand-50 border-l-4 border-brand-500 rounded-r-2xl p-5">
              <Quote size={18} className="text-brand-300 mb-2" />
              <p className="text-slate-700 text-sm italic leading-relaxed">
                &bdquo;Není to jen učitelka, je i taxikář a přítel &mdash; zaveze vás kamkoliv v okolí a během jízdy vypráví vtipné historky.&ldquo;
              </p>
              <p className="text-slate-400 text-xs mt-2 font-semibold">&mdash; Daniel Vokáč, absolvent 2025</p>
            </div>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#kontakt"
                className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-md min-h-[44px] flex items-center"
              >
                Přihlásit se
              </a>
              <a
                href={`tel:${siteContent.contact.phoneRaw}`}
                className="border border-brand-200 hover:border-brand-400 text-brand-700 font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:bg-brand-50 min-h-[44px] flex items-center"
                aria-label={`Zavolat: ${siteContent.contact.phone}`}
              >
                {siteContent.contact.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
