'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import type { TestimonialsSectionData } from '../../types';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['600'], style: ['normal', 'italic'] });

export default function Testimonials({ data }: { data: TestimonialsSectionData }) {
  const [index, setIndex] = useState(0);
  const item = data.items[index];
  const total = data.items.length;

  const go = (step: number) => setIndex((current) => (current + step + total) % total);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [total]);

  return (
    <section id={data.id} className="relative overflow-hidden bg-[#fbfaf6] py-8">
      <svg viewBox="0 0 140 100" className="pointer-events-none absolute left-0 top-6 hidden h-24 w-28 text-[#d5e6c4] sm:block" aria-hidden>
        <ellipse cx="30" cy="40" rx="22" ry="10" transform="rotate(-30 30 40)" fill="currentColor" />
        <ellipse cx="72" cy="22" rx="18" ry="8" transform="rotate(-8 72 22)" fill="currentColor" />
      </svg>
      <div className="relative mx-auto max-w-[980px] px-4">
        <div className="text-center">
          <svg viewBox="0 0 64 36" className="mx-auto h-8 w-14 text-[#5d8a3c]" aria-hidden>
            <path d="M32 30c-6-8-14-10-22-8 6-6 10-14 10-22 3 7 8 12 12 14 4-2 9-7 12-14 0 8 4 16 10 22-8-2-16 0-22 8z" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
          <p className="mt-2 flex items-center justify-center gap-3 text-[16px] font-medium text-[#3f7a34]">
            <span className="h-px w-8 bg-[#3f7a34]" />
            {data.eyebrow}
            <span className="h-px w-8 bg-[#3f7a34]" />
          </p>
          <h2 className={`${playfair.className} mt-2 text-[34px] text-[#1c241c] sm:text-[46px]`}>
            {data.title} <span className="italic text-[#3f7a34]">{data.title_highlight}</span>
          </h2>
          <p className="mx-auto mt-2 max-w-[520px] text-[15px] text-[#667068]">{data.description}</p>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-[28px] border border-[#e7eedf] bg-white shadow-[0_10px_30px_rgba(40,70,30,0.05)]">
          <span className="absolute left-0 top-8 z-10 hidden h-16 w-4 rounded-r-full bg-[#6f9a4a] sm:block" />
          <AnimatePresence mode="wait">
            <motion.div
              key={item.name}
              className="grid md:grid-cols-[280px_1fr]"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
            >
              <img src={item.image} alt="" className="h-56 w-full object-cover md:h-full md:min-h-[280px]" />
              <div className="relative px-5 py-6 sm:px-8">
                <svg viewBox="0 0 80 90" className="pointer-events-none absolute right-4 top-6 hidden h-24 w-20 text-[#e5f0d8] sm:block" aria-hidden>
                  <path d="M40 78c-8-14-20-16-30-12 8-8 14-20 14-34 4 12 10 18 16 20 6-2 12-8 16-20 0 14 6 26 14 34-10-4-22-2-30 12z" fill="currentColor" />
                  <circle cx="40" cy="28" r="5" fill="currentColor" />
                </svg>
                <p className={`${playfair.className} text-[42px] leading-none text-[#6f9a4a]`}>“</p>
                <p className="mt-2 max-w-[460px] text-[15px] leading-7 text-[#3d4a40] sm:text-[16px]">{item.quote}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <img src={item.avatar} alt="" className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-[#3f7a34]">{item.name}</p>
                    <p className="text-[13px] text-[#667068]">{item.role}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-3">
                    <p className={`${playfair.className} text-[32px] text-[#1c241c]`}>{item.rating}</p>
                    <span className="h-8 w-px bg-[#d7e0d4]" />
                    <div>
                      <p className="text-[16px] tracking-wide text-[#e2b23a]">★★★★★</p>
                      <p className="text-[12px] text-[#667068]">{item.ratings_count}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-5 flex justify-center gap-3">
          <button type="button" aria-label="Previous" onClick={() => go(-1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d5e0cc] bg-white text-[#3f7a34] transition hover:border-[#3e6b38] hover:bg-[#3e6b38] hover:text-white">
            ←
          </button>
          <button type="button" aria-label="Next" onClick={() => go(1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d5e0cc] bg-white text-[#3f7a34] transition hover:border-[#3e6b38] hover:bg-[#3e6b38] hover:text-white">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
