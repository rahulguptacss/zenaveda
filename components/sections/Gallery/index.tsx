'use client';

import { motion } from 'framer-motion';
import { Great_Vibes, Playfair_Display } from 'next/font/google';
import type { GallerySectionData } from '../../types';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['600'] });
const script = Great_Vibes({ subsets: ['latin'], weight: '400' });

export default function Gallery({ data }: { data: GallerySectionData }) {
  return (
    <section id={data.id} className="relative overflow-hidden bg-[#fbfaf6] py-8">
      <svg viewBox="0 0 140 100" className="pointer-events-none absolute left-0 top-4 hidden h-24 w-28 text-[#d5e6c4] sm:block" aria-hidden>
        <ellipse cx="30" cy="40" rx="22" ry="10" transform="rotate(-30 30 40)" fill="currentColor" />
        <ellipse cx="70" cy="22" rx="18" ry="8" transform="rotate(-8 70 22)" fill="currentColor" />
      </svg>
      <div className="relative mx-auto max-w-[1100px] px-4">
        <motion.div
          className="mx-auto mb-5 max-w-2xl text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          <svg viewBox="0 0 64 36" className="mx-auto h-8 w-14 text-[#5d8a3c]" aria-hidden>
            <path d="M32 30c-6-8-14-10-22-8 6-6 10-14 10-22 3 7 8 12 12 14 4-2 9-7 12-14 0 8 4 16 10 22-8-2-16 0-22 8z" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
          <p className="mt-2 flex items-center justify-center gap-3 text-[16px] font-medium text-[#4f7a42]">
            <span className="h-px w-8 bg-[#4f7a42] sm:w-10" />
            {data.eyebrow}
            <span className="h-px w-8 bg-[#4f7a42] sm:w-10" />
          </p>
          <h2 className={`${playfair.className} mt-2 text-[32px] leading-tight text-[#1c241c] sm:text-[44px]`}>
            {data.title}{' '}
            <span className={`${script.className} text-[42px] text-[#3f7a34] sm:text-[56px]`}>{data.title_highlight}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[560px] text-[15px] leading-7 text-[#667068] sm:text-[16px]">{data.description}</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {data.items.map((item, index) => (
            <motion.div
              key={`${item.type}-${index}`}
              className="aspect-[4/3] overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
              whileHover={{ y: -4 }}
            >
              {item.type === 'card' ? (
                <div className="flex h-full flex-col items-center justify-center bg-[#eef6e6] px-4 text-center text-[#3f7a34]">
                  <svg viewBox="0 0 64 48" className="h-14 w-16" aria-hidden>
                    <path d="M32 40c-6-8-14-10-22-8 6-6 10-14 10-22 3 7 8 12 12 14 4-2 9-7 12-14 0 8 4 16 10 22-8-2-16 0-22 8z" fill="none" stroke="currentColor" strokeWidth="1.4" />
                    <circle cx="32" cy="16" r="2" fill="currentColor" />
                  </svg>
                  <p className={`${playfair.className} mt-2 text-[18px] leading-snug sm:text-[22px]`}>{item.title}</p>
                  <span className="mt-2 h-[2px] w-12 rounded-full bg-[#6f9a4a]" />
                </div>
              ) : (
                <img src={item.image} alt="" className="h-full w-full object-cover" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
