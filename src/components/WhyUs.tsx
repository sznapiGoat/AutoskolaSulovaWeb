'use client';

import { motion, type Transition } from 'framer-motion';
import { UserCheck, Car, Calendar, Gift } from 'lucide-react';
import { siteContent } from '@/lib/content';

const iconMap: Record<string, React.ElementType> = {
  UserCheck, Car, Calendar, Gift,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const easeOut: Transition = { duration: 0.55, ease: 'easeOut' };
const cardVariants = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: easeOut },
};

export default function WhyUs() {
  return (
    <section id="o-nas" className="section-pad bg-white" aria-label="Proč Autoškola Šůlová">
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
            Proč si vybrat nás
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 mb-4">
            Autoškola s osobním přístupem
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            {siteContent.business.description}
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {siteContent.whyUs.map((item) => {
            const Icon = iconMap[item.icon] ?? UserCheck;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                className="group bg-surface rounded-2xl p-7 border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/50 transition-shadow duration-300 cursor-default"
              >
                <div className="w-12 h-12 bg-brand-50 group-hover:bg-brand-100 rounded-xl flex items-center justify-center mb-5 transition-colors duration-200">
                  <Icon size={22} className="text-brand-600" />
                </div>
                <h3 className="text-base font-display font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.body}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* About text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mt-16 bg-gradient-to-br from-brand-900 to-brand-800 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Naším cílem je váš úspěch
            </h3>
            <p className="text-white/75 leading-relaxed text-base md:text-lg">
              Připravujeme vás k úspěšnému složení závěrečné zkoušky tak, aby váš vstup do silničního provozu byl co nejvíce bezpečný. Výuku i výcvik plánujeme podle vašich možností — včetně víkendů a svátků.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-4 shrink-0">
            <a
              href="#kontakt"
              className="bg-amber-500 hover:bg-amber-400 text-brand-900 font-bold px-6 py-3.5 rounded-xl text-center transition-all duration-200 hover:shadow-lg min-h-[44px] flex items-center justify-center"
            >
              Chci se přihlásit
            </a>
            <a
              href="#kurz"
              className="border border-white/25 hover:border-white/50 text-white font-semibold px-6 py-3.5 rounded-xl text-center transition-all duration-200 hover:bg-white/10 min-h-[44px] flex items-center justify-center"
            >
              Zobrazit ceny
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
