'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Send, CheckCircle, FileText, Stethoscope } from 'lucide-react';
import { siteContent } from '@/lib/content';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariant = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function Application() {
  const { application, contact } = siteContent;

  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Přihláška do autoškoly — ${form.name}`);
    const body = encodeURIComponent(
      `Jméno: ${form.name}\nTelefon: ${form.phone}\nE-mail: ${form.email}\n\n${form.message || 'Mám zájem o kurz skupiny B.'}`
    );
    window.open(`mailto:${contact.email}?subject=${subject}&body=${body}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  }

  const docIcons: Record<string, React.ElementType> = {
    'Žádost o řidičský průkaz': FileText,
    'Lékařský posudek': Stethoscope,
  };

  return (
    <section id="prihlaska" className="section-pad bg-white" aria-label="Přihláška do autoškoly">
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
            Začněte ještě dnes
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 mb-4">
            Přihláška
          </h2>
          <p className="text-slate-500 text-lg max-w-lg mx-auto">
            Tři jednoduché kroky a můžete začít. Pomůžeme vám se vším.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14"
        >
          {application.steps.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariant}
              className="relative bg-surface rounded-2xl p-7 border border-slate-100 group hover:border-brand-200 hover:shadow-lg hover:shadow-brand-50 transition-all duration-300"
            >
              <div className="text-5xl font-display font-extrabold text-brand-100 group-hover:text-brand-200 transition-colors leading-none mb-4 select-none">
                {step.number}
              </div>
              <h3 className="font-display font-bold text-slate-900 text-base mb-2">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Documents */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="font-display font-bold text-slate-900 text-lg mb-5">
              Potřebné dokumenty
            </h3>
            <p className="text-sm text-slate-500 -mt-2 mb-5">
              {application.intro}
            </p>

            {application.documents.map((doc) => {
              const Icon = docIcons[doc.name] ?? FileText;
              return (
                <a
                  key={doc.name}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 bg-surface rounded-2xl border border-slate-100 hover:border-brand-300 hover:shadow-md hover:shadow-brand-50 transition-all duration-200"
                  aria-label={`Stáhnout: ${doc.name}`}
                >
                  <div className="w-12 h-12 bg-brand-50 group-hover:bg-brand-100 rounded-xl flex items-center justify-center shrink-0 transition-colors">
                    <Icon size={20} className="text-brand-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-bold text-slate-800 text-sm truncate">{doc.name}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{doc.note}</p>
                  </div>
                  <Download size={16} className="text-slate-300 group-hover:text-brand-500 transition-colors shrink-0" />
                </a>
              );
            })}

            {/* Note box */}
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mt-4">
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Tip:</strong> Lékařský posudek vydá váš praktický lékař. Žádost stáhněte, vytiskněte oboustranně a vyplňte ručně.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-3"
          >
            <div className="bg-surface rounded-3xl border border-slate-100 p-8">
              <h3 className="font-display font-bold text-slate-900 text-lg mb-2">
                Nezávazná poptávka
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Napište nám — Barbora vás kontaktuje zpět a domluvíme vše individuálně.
              </p>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-emerald-500" />
                  </div>
                  <h4 className="font-display font-bold text-slate-900 text-lg mb-2">Odesláno!</h4>
                  <p className="text-slate-500 text-sm">Otevřeli jsme váš e-mailový klient. Barbora se vám ozve co nejdříve.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="app-name" className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">
                        Jméno a příjmení <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="app-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jana Nováková"
                        className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 rounded-xl px-4 py-3 text-slate-900 text-sm outline-none transition-all placeholder:text-slate-300 min-h-[44px]"
                      />
                    </div>
                    <div>
                      <label htmlFor="app-phone" className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">
                        Telefon <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="app-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+420 123 456 789"
                        className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 rounded-xl px-4 py-3 text-slate-900 text-sm outline-none transition-all placeholder:text-slate-300 min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="app-email" className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">
                      E-mail
                    </label>
                    <input
                      id="app-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jana@email.cz"
                      className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 rounded-xl px-4 py-3 text-slate-900 text-sm outline-none transition-all placeholder:text-slate-300 min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label htmlFor="app-message" className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">
                      Zpráva
                    </label>
                    <textarea
                      id="app-message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Mám zájem o kurz skupiny B. Preferuji výcvik o víkendu…"
                      className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 rounded-xl px-4 py-3 text-slate-900 text-sm outline-none transition-all placeholder:text-slate-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!form.name || !form.phone}
                    className="w-full flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-bold px-6 py-4 rounded-xl transition-all duration-200 hover:shadow-md min-h-[52px]"
                  >
                    <Send size={16} />
                    Odeslat poptávku
                  </button>

                  <p className="text-center text-xs text-slate-400 mt-2">
                    Nebo volejte přímo:{' '}
                    <a href={`tel:${contact.phoneRaw}`} className="font-semibold text-brand-600 hover:underline">
                      {contact.phone}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
