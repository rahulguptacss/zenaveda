'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import type { WhySectionData } from '../../types';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['600'] });

function Counter({ value, className }: { value: string; className: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const match = value.match(/^(\d+)(.*)$/);
  const suffix = match ? match[2] : '';
  const pad = match && match[1].length > 1 && match[1].startsWith('0') ? match[1].length : 0;
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = ref.current;
    const parsed = value.match(/^(\d+)(.*)$/);
    if (!node || !parsed) return;
    const goal = Number(parsed[1]);
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min(1, (now - start) / 1400);
          setCount(Math.round(goal * (1 - (1 - progress) ** 3)));
          if (progress < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  const shown = pad ? String(count).padStart(pad, '0') : String(count);
  return (
    <p ref={ref} className={className}>
      {match ? `${shown}${suffix}` : value}
    </p>
  );
}

function Mark({ name }: { name: string }) {
  const common = 'h-6 w-6 text-[#4f7a42]';
  if (name === 'leaf') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M5 19C14 18 19 12 19 5 12 5 6 10 5 19z" />
        <path d="M9 15c2-2 4-5 6-8" />
      </svg>
    );
  }
  if (name === 'people') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="8" cy="9" r="2" />
        <circle cx="15" cy="8" r="2" />
        <path d="M4 17c.6-2 2.2-3 4-3s3.4 1 4 3M13 17c.4-1.6 1.6-2.5 3.2-2.5 1.8 0 3.2 1 3.8 2.5" />
      </svg>
    );
  }
  if (name === 'calendar') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="4" y="6" width="16" height="14" rx="2" />
        <path d="M8 4v4M16 4v4M4 10h16" />
      </svg>
    );
  }
  if (name === 'heart') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 19s-7-4.2-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.8-7 9-7 9z" />
        <path d="M7 12h2.2l1.2-2 1.8 4 1.2-2H17" />
      </svg>
    );
  }
  if (name === 'meditate') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="5.5" r="1.6" />
        <path d="M12 8v4M8 16c1.2-2.4 2.4-3.2 4-3.2S14.8 13.6 16 16M5 17.5c2-.8 3.6-.6 4.6 1M19 17.5c-2-.8-3.6-.6-4.6 1" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 19c-2-3-5-4-8-3 2-2 4-5 4-8 1 2.5 2.6 4 4 4.6C13.4 12 15 10.5 16 8c0 3 2 6 4 8-3-1-6 0-8 3z" />
    </svg>
  );
}

function Point({ point }: { point: WhySectionData['points'][number] }) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-[#e3edd9] bg-white px-3 py-2.5 shadow-[0_6px_18px_rgba(40,70,30,0.04)]">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eef6e6]">
        <Mark name={point.icon} />
      </span>
      <div>
        <h3 className="text-[16px] font-semibold text-[#2f6a34]">{point.title}</h3>
        <p className="text-[13px] leading-5 text-[#667068]">{point.text}</p>
      </div>
    </div>
  );
}

export default function WhyChoose({ data }: { data: WhySectionData }) {
  const left = data.points.slice(0, 3);
  const right = data.points.slice(3);

  return (
    <section id={data.id} className="relative overflow-hidden bg-[#fbfaf6] py-8">
      <svg viewBox="0 0 160 110" className="pointer-events-none absolute left-0 top-4 h-28 w-36 text-[#d7e7c8]" aria-hidden>
        <ellipse cx="36" cy="48" rx="26" ry="11" transform="rotate(-32 36 48)" fill="currentColor" />
        <ellipse cx="78" cy="28" rx="22" ry="9" transform="rotate(-8 78 28)" fill="currentColor" />
      </svg>
      <div className="relative mx-auto max-w-[1100px] px-4">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <Mark name="lotus" />
          <h2 className={`${playfair.className} mt-2 text-[40px] text-[#1c241c] sm:text-[48px]`}>
            {data.title} <span className="text-[#3f7a34]">{data.title_highlight}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[560px] text-[15px] leading-7 text-[#667068]">{data.description}</p>
        </motion.div>

        <div className="mt-6 grid items-center gap-6 lg:grid-cols-[1fr_300px_1fr]">
          <div className="space-y-4">
            {left.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
              >
                <Point point={point} />
              </motion.div>
            ))}
          </div>
          <motion.div
            className="relative mx-auto"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
          >
            <div className="absolute left-1/2 top-8 h-56 w-56 -translate-x-1/2 rounded-full bg-[#e7f0dc]" />
            <img src={data.image} alt="" className="relative z-10 mx-auto h-[340px] w-[260px] object-contain object-bottom" />
          </motion.div>
          <div className="space-y-4">
            {right.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
              >
                <Point point={point} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[#e6eedf] pt-6 sm:grid-cols-4">
          {data.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="flex items-center justify-center gap-2 text-[#3f7a34]">
                <Mark name={stat.icon} />
                <Counter value={stat.value} className={`${playfair.className} text-[32px] leading-none`} />
              </div>
              <p className="mt-1 text-[14px] text-[#5c675e]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
