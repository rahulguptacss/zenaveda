'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronUp, Plus } from 'lucide-react';
import { Great_Vibes, Playfair_Display } from 'next/font/google';
import type { FaqSectionData } from '../../types';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['600'] });
const script = Great_Vibes({ subsets: ['latin'], weight: '400' });

function Icon({ name }: { name: string }) {
  const stroke = 'currentColor';
  if (name === 'mat') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke={stroke} strokeWidth="1.6">
        <rect x="4" y="8" width="16" height="8" rx="4" />
      </svg>
    );
  }
  if (name === 'heart') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke={stroke} strokeWidth="1.6">
        <path d="M12 19s-6-3.6-6-8a3.4 3.4 0 0 1 6-1.8A3.4 3.4 0 0 1 18 11c0 4.4-6 8-6 8z" />
      </svg>
    );
  }
  if (name === 'meditate') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke={stroke} strokeWidth="1.6">
        <circle cx="12" cy="6" r="1.6" />
        <path d="M12 8.5v3.5M8 16.5c1.2-2.2 2.4-3 4-3s2.8.8 4 3M6 18c1.8-.7 3.2-.5 4.2.8M18 18c-1.8-.7-3.2-.5-4.2.8" />
      </svg>
    );
  }
  if (name === 'card') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke={stroke} strokeWidth="1.6">
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 10h18" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke={stroke} strokeWidth="1.6">
      <path d="M12 19c-2-3-5-4-8-3 2-2 4-5 4-8 1 2.4 2.6 4 4 4.6 1.4-.6 3-2.2 4-4.6 0 3 2 6 4 8-3-1-6 0-8 3z" />
    </svg>
  );
}

export default function Faq({ data }: { data: FaqSectionData }) {
  const [open, setOpen] = useState(0);

  return (
    <section id={data.id} className="relative overflow-hidden bg-[#fbfaf6] py-8">
      <svg viewBox="0 0 160 120" className="pointer-events-none absolute right-0 top-6 h-28 w-36 text-[#d5e6c4]" aria-hidden>
        <ellipse cx="110" cy="40" rx="28" ry="10" transform="rotate(28 110 40)" fill="currentColor" />
        <ellipse cx="70" cy="24" rx="20" ry="8" transform="rotate(8 70 24)" fill="currentColor" />
      </svg>
      <div className="relative mx-auto grid max-w-[1100px] items-center gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          className="relative mx-auto w-full max-w-[420px]"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute -left-6 top-10 h-40 w-40 rounded-full bg-[#e7f0dc]" />
          <div className="relative overflow-hidden rounded-t-[220px] rounded-b-[36px] border-[6px] border-[#6f9a4a] bg-white">
            <img src={data.image} alt="" className="h-[460px] w-full object-cover object-top" />
          </div>
        </motion.div>

        <div>
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="flex justify-center text-[#5d8a3c] lg:justify-start">
              <Icon name="lotus" />
            </div>
            <p className="mt-2 flex items-center justify-center gap-3 text-[15px] font-semibold tracking-[0.14em] text-[#3f7a34] lg:justify-start">
              <span className="h-px w-8 bg-[#3f7a34]" />
              {data.eyebrow}
              <span className="h-px w-8 bg-[#3f7a34]" />
            </p>
            <h2 className={`${playfair.className} mt-2 text-[36px] leading-tight text-[#1c241c] sm:text-[44px]`}>
              {data.title}{' '}
              <span className={`${script.className} text-[52px] text-[#5f8f3e] sm:text-[60px]`}>{data.title_highlight}</span>
            </h2>
            <p className="mx-auto mt-2 max-w-[520px] text-[15px] leading-7 text-[#667068] lg:mx-0">{data.description}</p>
          </motion.div>

          <div className="mt-6 space-y-3">
            {data.items.map((item, index) => {
              const active = open === index;
              return (
                <motion.div
                  key={item.question}
                  className="overflow-hidden rounded-2xl border border-[#e4eedc] bg-white"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(active ? -1 : index)}
                    className={`flex w-full items-center gap-3 px-4 py-3 text-left text-[15px] font-semibold ${active ? 'bg-[#5d8a3e] text-white' : 'text-[#1c241c]'}`}
                  >
                    <span className={active ? 'text-white' : 'text-[#5d8a3e]'}>
                      <Icon name={item.icon} />
                    </span>
                    <span className="flex-1">{item.question}</span>
                    {active ? <ChevronUp className="h-4 w-4" /> : <Plus className="h-4 w-4 text-[#5d8a3e]" />}
                  </button>
                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.p
                        className="px-4 py-3 text-[14px] leading-6 text-[#5c675e]"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        {item.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
