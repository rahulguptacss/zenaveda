'use client';

import { useState } from 'react';
import { Playfair_Display } from 'next/font/google';
import type { ContactSectionData } from '../../types';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['600'] });
const field = 'h-12 w-full rounded-xl border border-[#d7e4cc] bg-white pl-10 pr-3 text-[14px] text-[#243028] outline-none placeholder:text-[#7d8a80]';

export default function Contact({ data }: { data: ContactSectionData }) {
  const [sent, setSent] = useState(false);

  return (
    <section id={data.id} className="bg-[#f3f6ee] px-4 py-8 sm:px-6">
      <div className="relative mx-auto grid max-w-[1100px] items-center gap-8 overflow-hidden rounded-[28px] bg-[#f7f4ec] px-5 py-10 sm:px-10 lg:grid-cols-2">
        <svg viewBox="0 0 120 140" className="pointer-events-none absolute left-2 top-4 h-24 w-20 text-[#b7c9a4]" aria-hidden>
          <path d="M20 110c10-30 8-60 30-90" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <ellipse cx="34" cy="48" rx="14" ry="6" transform="rotate(-40 34 48)" fill="none" stroke="currentColor" />
          <ellipse cx="52" cy="30" rx="12" ry="5" transform="rotate(-15 52 30)" fill="none" stroke="currentColor" />
        </svg>
        <svg viewBox="0 0 120 140" className="pointer-events-none absolute bottom-4 right-2 h-28 w-20 text-[#b7c9a4]" aria-hidden>
          <path d="M90 20c-8 34-6 60-28 96" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <ellipse cx="70" cy="70" rx="14" ry="6" transform="rotate(30 70 70)" fill="none" stroke="currentColor" />
        </svg>
        <div className="relative">
          <div className="flex justify-center text-[#5d8a3c]">
            <svg viewBox="0 0 64 36" className="h-8 w-14" aria-hidden>
              <path d="M32 30c-6-8-14-10-22-8 6-6 10-14 10-22 3 7 8 12 12 14 4-2 9-7 12-14 0 8 4 16 10 22-8-2-16 0-22 8z" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </div>
          <p className="mt-1 flex items-center justify-center gap-3 text-[15px] text-[#3f7a34]">
            <span className="h-px w-8 bg-[#3f7a34]" />
            {data.eyebrow}
            <span className="h-px w-8 bg-[#3f7a34]" />
          </p>
          <h2 className={`${playfair.className} mt-3 text-center text-[40px] text-[#1c241c] sm:text-[48px]`}>{data.title}</h2>
          <p className="mx-auto mt-2 max-w-[460px] text-center text-[15px] leading-7 text-[#667068]">{data.description}</p>
          <form
            className="mt-6 grid gap-3 sm:grid-cols-2"
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <label className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#6f9a4a]">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="8" r="3" /><path d="M5 19c1.2-3 3.4-4.5 7-4.5S17.8 16 19 19" /></svg>
              </span>
              <input required placeholder={data.name_placeholder} className={field} />
            </label>
            <label className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#6f9a4a]">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M6 4h3l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 2-2z" /></svg>
              </span>
              <input
                required
                inputMode="numeric"
                placeholder={data.phone_placeholder}
                onChange={(event) => {
                  event.target.value = event.target.value.replace(/\D/g, '');
                }}
                className={field}
              />
            </label>
            <label className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#6f9a4a]">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 7 9-7" /></svg>
              </span>
              <input required type="email" placeholder={data.email_placeholder} className={field} />
            </label>
            <label className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#6f9a4a]">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="4" y="6" width="16" height="14" rx="2" /><path d="M8 4v4M16 4v4M4 10h16" /></svg>
              </span>
              <input required type="text" placeholder={data.date_placeholder} className={field} />
            </label>
            <label className="relative sm:col-span-2">
              <span className="pointer-events-none absolute left-3 top-4 text-[#6f9a4a]">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M5 6h14v9H8l-3 3z" /></svg>
              </span>
              <textarea required placeholder={data.message_placeholder} className={`${field} h-[72px] py-3`} />
            </label>
            <button type="submit" className="h-12 rounded-full bg-[#3e6b38] text-[16px] font-medium text-white sm:w-52">
              {data.button_text}
            </button>
            {sent && <p className="text-sm text-[#3e6b38] sm:col-span-2">{data.success_message}</p>}
          </form>
        </div>
        <div className="relative">
          <span className="absolute -left-2 top-8 h-16 w-8 rounded-l-full border-b-4 border-l-4 border-t-4 border-[#8fb56e]" />
          <span className="absolute -right-2 bottom-8 h-16 w-8 rounded-r-full border-b-4 border-r-4 border-t-4 border-[#8fb56e]" />
          <img src={data.image} alt="" className="h-[420px] w-full rounded-[28px] object-cover sm:h-[480px]" />
        </div>
      </div>
    </section>
  );
}
