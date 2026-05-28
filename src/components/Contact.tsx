'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
import { siteContent } from '@/lib/content';

export default function Contact() {
  const { contact, business } = siteContent;

  return (
    <section id="kontakt" className="section-pad bg-white" aria-label="Kontakt">
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
            Kontaktujte nás
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 mb-4">
            Rezervace a dotazy
          </h2>
          <p className="text-slate-500 text-lg max-w-md mx-auto">
            Napište nebo zavolejte. Rádi vám odpovíme a domluvíme termín.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-5"
          >
            <h3 className="text-xl font-display font-bold text-slate-900">{business.name}</h3>

            {[
              {
                icon: Phone,
                label: 'Telefon',
                content: contact.phone,
                href: `tel:${contact.phoneRaw}`,
                note: contact.hours,
              },
              {
                icon: Mail,
                label: 'E-mail',
                content: contact.email,
                href: `mailto:${contact.email}`,
                note: null,
              },
              {
                icon: MapPin,
                label: 'Adresa',
                content: contact.address,
                href: `https://maps.google.com/?q=${encodeURIComponent(contact.address)}`,
                note: contact.addressNote,
              },
              {
                icon: Clock,
                label: 'Provozní doba',
                content: contact.hours,
                href: null,
                note: contact.hoursNote,
              },
            ].map(({ icon: Icon, label, content, href, note }) => (
              <motion.div
                key={label}
                whileHover={{ x: 4, transition: { type: 'spring', stiffness: 300, damping: 24 } }}
                className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 hover:border-brand-200 hover:bg-brand-50/30 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-brand-50 group-hover:bg-brand-100 rounded-xl flex items-center justify-center shrink-0 transition-colors">
                  <Icon size={18} className="text-brand-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-semibold text-slate-800 hover:text-brand-600 transition-colors flex items-center gap-1 break-all"
                    >
                      {content}
                      {href.startsWith('http') && <ExternalLink size={12} className="shrink-0 opacity-50" />}
                    </a>
                  ) : (
                    <p className="font-semibold text-slate-800">{content}</p>
                  )}
                  {note && <p className="text-xs text-slate-400 mt-0.5">{note}</p>}
                </div>
              </motion.div>
            ))}

            {/* Facebook */}
            <a
              href={contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-colors duration-200 group"
              aria-label="Facebook stránka Autoškoly Barbory Šůlové"
            >
              <div className="w-10 h-10 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center shrink-0 transition-colors text-blue-600">
                <FacebookIcon size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide mb-0.5">Facebook</p>
                <p className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors text-sm">
                  Autoškola Barbora Šůlová
                </p>
              </div>
              <ExternalLink size={13} className="ml-auto text-slate-300" />
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="rounded-3xl overflow-hidden border border-slate-100 shadow-sm"
          >
            <iframe
              title="Poloha Autoškoly Barbory Šůlové na mapě"
              src={contact.mapsEmbed}
              width="100%"
              height="100%"
              style={{ minHeight: '400px', border: 'none' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google mapa s polohou učebny autoškoly"
            />
          </motion.div>
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mt-14 bg-gradient-to-r from-brand-600 to-brand-700 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white"
        >
          <div>
            <h3 className="text-xl md:text-2xl font-display font-bold mb-1">Připraveni začít?</h3>
            <p className="text-white/70">Zavolejte nebo napište. Bez závazků.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`tel:${contact.phoneRaw}`}
              className="flex items-center gap-2 bg-white text-brand-700 font-bold px-6 py-3.5 rounded-xl hover:bg-brand-50 transition-colors min-h-[44px]"
              aria-label={`Zavolat: ${contact.phone}`}
            >
              <Phone size={17} />
              {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors min-h-[44px]"
            >
              <Mail size={17} />
              {contact.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
