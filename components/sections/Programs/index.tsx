'use client';

import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import type { ProgramsSectionData } from '../../types';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['600'] });

function CardIcon({ name }: { name: string }) {
  if (name === 'meditate') {
    return (
      <svg viewBox="0 0 48 40" className="mx-auto h-8 w-10 text-[#5d8a3c]" aria-hidden>
        <circle cx="24" cy="8" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M24 12v8M16 28c2-6 4-8 8-8s6 2 8 8M10 30c4-2 8-2 10 2M38 30c-4-2-8-2-10 2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 36" className="mx-auto h-8 w-12 text-[#5d8a3c]" aria-hidden>
      <path d="M32 30c-6-8-14-10-22-8 6-6 10-14 10-22 3 7 8 12 12 14 4-2 9-7 12-14 0 8 4 16 10 22-8-2-16 0-22 8z" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export default function Programs({ data }: { data: ProgramsSectionData }) {
  return (
    <section id={data.id} className="relative overflow-hidden bg-[#f7f4ec] py-8">
      <svg viewBox="0 0 140 100" className="pointer-events-none absolute left-0 top-6 h-24 w-32 text-[#cfe0be]" aria-hidden>
        <ellipse cx="30" cy="40" rx="22" ry="10" transform="rotate(-35 30 40)" fill="currentColor" />
        <ellipse cx="70" cy="24" rx="20" ry="9" transform="rotate(-10 70 24)" fill="currentColor" />
      </svg>
      <svg viewBox="0 0 140 100" className="pointer-events-none absolute right-0 top-4 h-24 w-32 text-[#cfe0be]" aria-hidden>
        <ellipse cx="90" cy="36" rx="24" ry="10" transform="rotate(30 90 36)" fill="currentColor" />
        <ellipse cx="50" cy="22" rx="18" ry="8" transform="rotate(8 50 22)" fill="currentColor" />
      </svg>
      <div className="relative mx-auto max-w-[1100px] px-4">
        <motion.div
          className="mx-auto mb-6 max-w-2xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <CardIcon name="lotus" />
          <p className="mt-2 flex items-center justify-center gap-3 text-[16px] font-medium text-[#4f7a42]">
            <span className="h-px w-10 bg-[#4f7a42]" />
            {data.eyebrow}
            <span className="h-px w-10 bg-[#4f7a42]" />
          </p>
          <h2 className={`${playfair.className} mt-3 text-[34px] font-semibold text-[#1c241c] sm:text-[44px]`}>{data.title}</h2>
          <p className="mx-auto mt-3 max-w-[620px] text-[16px] leading-7 text-[#5c675e]">{data.description}</p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, index) => (
            <motion.article
              key={`${item.title}-${index}`}
              className="overflow-hidden rounded-t-[150px] rounded-b-[28px] border border-[#d7e6cc] bg-[#fbfaf6] px-6 pb-4 pt-7 text-center shadow-[0_10px_24px_rgba(40,70,30,0.04)]"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <CardIcon name={item.icon} />
              <h3 className={`${playfair.className} mt-2 text-[26px] text-[#1c241c]`}>{item.title}</h3>
              <p className="mx-auto mt-2 max-w-[250px] text-[14px] leading-6 text-[#667068]">{item.text}</p>
              <img src={item.image} alt="" className="mt-4 h-[180px] w-full rounded-t-[90px] rounded-b-[22px] object-cover" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
