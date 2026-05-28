'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { siteContent } from '@/lib/content';

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${stars} hvězdiček z 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < stars ? 'text-amber-500' : 'text-slate-200'}
          fill={i < stars ? 'currentColor' : 'currentColor'}
        />
      ))}
    </div>
  );
}

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
}

const COLORS = [
  'bg-brand-600', 'bg-emerald-600', 'bg-violet-600',
  'bg-rose-500',  'bg-amber-600',   'bg-teal-600',
];

export default function Testimonials() {
  const reviews = siteContent.testimonials;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setIndex(i => (i + dir + reviews.length) % reviews.length);
  }, [reviews.length]);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => go(1), 5500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused, go]);

  const slideVariants = {
    enter:  (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
    exit:   (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60, transition: { duration: 0.3, ease: 'easeIn' as const } }),
  };

  const review = reviews[index];
  const colorClass = COLORS[index % COLORS.length];

  return (
    <section id="reference" className="section-pad bg-surface" aria-label="Reference a recenze">
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
            Co říkají absolventi
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 mb-3">
            Reference
          </h2>
          <div className="flex items-center justify-center gap-2 text-slate-500">
            <div className="flex">
              {[1,2,3,4].map(i => <Star key={i} size={16} className="text-amber-500" fill="currentColor" />)}
              <Star size={16} className="text-amber-400" fill="currentColor" />
            </div>
            <span className="font-bold text-slate-700">4,4</span>
            <span className="text-slate-400">·</span>
            <span>42 recenzí na Google</span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden min-h-[280px] flex flex-col justify-between p-8 md:p-10">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {/* Quote icon */}
                <Quote size={32} className="text-brand-100 mb-4" />

                {/* Stars */}
                <div className="mb-4">
                  <StarRating stars={review.stars} />
                </div>

                {/* Text */}
                <blockquote className="text-slate-700 text-base md:text-lg leading-relaxed mb-6">
                  &bdquo;{review.text}&ldquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${colorClass} rounded-full flex items-center justify-center shrink-0`}>
                    <span className="text-white text-xs font-bold">{getInitials(review.author)}</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-slate-900 text-sm">{review.author}</p>
                    <p className="text-slate-400 text-xs">{review.date} · Google</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                  aria-label={`Recenze ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === index ? 'w-6 h-2 bg-brand-600' : 'w-2 h-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => go(-1)}
                aria-label="Předchozí recenze"
                className="w-10 h-10 rounded-full border border-slate-200 hover:border-brand-300 flex items-center justify-center text-slate-500 hover:text-brand-600 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Další recenze"
                className="w-10 h-10 rounded-full border border-slate-200 hover:border-brand-300 flex items-center justify-center text-slate-500 hover:text-brand-600 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Mini cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {reviews.slice(0, 4).map((r, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 p-4 text-center">
              <div className={`w-8 h-8 ${COLORS[i % COLORS.length]} rounded-full flex items-center justify-center mx-auto mb-2`}>
                <span className="text-white text-xs font-bold">{getInitials(r.author)}</span>
              </div>
              <StarRating stars={r.stars} />
              <p className="text-xs text-slate-500 mt-1 font-medium truncate">{r.author}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
