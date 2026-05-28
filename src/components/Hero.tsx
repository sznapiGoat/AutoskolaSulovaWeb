'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, ChevronDown, Star } from 'lucide-react';
import { siteContent } from '@/lib/content';

const wordVariant = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function AnimatedHeadline({ lines }: { lines: string[] }) {
  return (
    <div className="flex flex-col gap-1">
      {lines.map((line, li) => (
        <motion.span
          key={li}
          className="block"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.07, delayChildren: li * 0.3 }}
        >
          {line.split(' ').map((word, wi) => (
            <motion.span
              key={wi}
              variants={wordVariant}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-block mr-[0.28em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </div>
  );
}

export default function Hero() {
  const { hero, contact } = siteContent;

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Úvod"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.bgImage}
          alt="Instruktorka Barbora Šůlová se žákyní u výcvikového vozidla"
          fill
          priority
          quality={90}
          className="object-cover object-center scale-105"
          style={{ objectPosition: 'center 30%' }}
        />
        {/* Gradient overlay — light on right, darker on left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/85 via-brand-900/65 to-brand-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide w-full pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
              Rokycany — Skupina B
            </span>
            <span className="flex items-center gap-1 text-amber-300 text-sm font-semibold">
              <Star size={13} fill="currentColor" />
              4,4 · 42 recenzí
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white mb-6 leading-tight">
            <AnimatedHeadline lines={hero.headline} />
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: 'easeOut' }}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href={hero.ctaPrimary.href}
              className="group flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-brand-900 font-bold text-base px-7 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/30 min-h-[52px]"
            >
              {hero.ctaPrimary.label}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold text-base px-7 py-4 rounded-xl transition-all duration-200 hover:bg-white/10 min-h-[52px]"
            >
              {hero.ctaSecondary.label}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 gap-y-4 mt-10 pt-10 border-t border-white/15"
          >
            {hero.stats.map((s) => (
              <div key={s.label} className="flex flex-col min-w-0">
                <span className="text-xl sm:text-2xl font-display font-extrabold text-amber-400 truncate">{s.value}</span>
                <span className="text-xs sm:text-sm text-white/60">{s.label}</span>
              </div>
            ))}
            <a
              href={`tel:${contact.phoneRaw}`}
              className="flex flex-col col-span-2 sm:col-auto min-w-0"
              aria-label={`Zavolat: ${contact.phone}`}
            >
              <span className="text-base sm:text-xl font-display font-extrabold text-amber-400 hover:text-amber-300 transition-colors truncate">
                {contact.phone}
              </span>
              <span className="text-xs sm:text-sm text-white/60">zavolejte nám</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/40"
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
