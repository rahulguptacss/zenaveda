import { Great_Vibes, Playfair_Display } from 'next/font/google';
import { Check } from 'lucide-react';
import type { AboutSectionData } from '../../types';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['500', '600'] });
const script = Great_Vibes({ subsets: ['latin'], weight: '400' });

export default function About({ data }: { data: AboutSectionData }) {
  return (
    <section id={data.id} className="overflow-hidden bg-[#f7f4ec] py-8 sm:py-10">
      <div className="mx-auto grid max-w-[1180px] items-center gap-12 px-5 lg:grid-cols-2">
        <div className="relative mx-auto h-[460px] w-full max-w-[460px]">
          <svg viewBox="0 0 120 160" className="pointer-events-none absolute -left-6 bottom-6 h-40 w-28 text-[#d5e4c4]" aria-hidden>
            <ellipse cx="40" cy="40" rx="22" ry="10" transform="rotate(-30 40 40)" fill="currentColor" />
            <ellipse cx="70" cy="90" rx="24" ry="11" transform="rotate(20 70 90)" fill="currentColor" />
          </svg>
          <svg viewBox="0 0 140 80" className="pointer-events-none absolute -right-4 top-16 h-16 w-28 text-[#c9dcb4]" aria-hidden>
            <ellipse cx="40" cy="40" rx="28" ry="12" transform="rotate(-25 40 40)" fill="currentColor" />
            <ellipse cx="90" cy="36" rx="24" ry="10" transform="rotate(18 90 36)" fill="currentColor" />
          </svg>
          <div className="absolute left-8 top-6 h-[340px] w-[340px] rounded-full border border-[#d7e3c6]" />
          <img src={data.images[0]} alt="" className="absolute left-10 top-8 h-[320px] w-[320px] rounded-full object-cover" />
          <img src={data.images[1]} alt="" className="absolute bottom-2 right-2 h-[168px] w-[168px] rounded-full border-[6px] border-[#f7f4ec] object-cover shadow-md" />
          <div className="absolute left-0 top-8 flex h-[118px] w-[118px] flex-col items-center justify-center rounded-full bg-[#4e7c43] text-center text-white shadow-md">
            <svg viewBox="0 0 64 36" className="mb-1 h-5 w-8" aria-hidden>
              <path d="M32 30c-6-8-14-10-22-8 6-6 10-14 10-22 3 7 8 12 12 14 4-2 9-7 12-14 0 8 4 16 10 22-8-2-16 0-22 8z" fill="none" stroke="white" strokeWidth="1.8" />
            </svg>
            <p className="text-[26px] font-semibold leading-none">{data.badge_value}</p>
            <p className="mt-1 max-w-[78px] text-[12px] leading-tight">{data.badge_label}</p>
          </div>
        </div>

        <div>
          <div className="flex justify-center text-[#5d8a3c] lg:justify-start">
            <svg viewBox="0 0 64 36" className="h-8 w-14" aria-hidden>
              <path d="M32 30c-6-8-14-10-22-8 6-6 10-14 10-22 3 7 8 12 12 14 4-2 9-7 12-14 0 8 4 16 10 22-8-2-16 0-22 8z" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </div>
          <p className="mt-2 flex items-center justify-center gap-3 text-[15px] text-[#4f7a42] lg:justify-start">
            <span className="h-px w-8 bg-[#4f7a42]" />
            {data.eyebrow}
            <span className="h-px w-8 bg-[#4f7a42]" />
          </p>
          <h2 className={`${playfair.className} mt-3 text-center text-[40px] font-medium leading-[1.1] text-[#1c241c] sm:text-[48px] lg:text-left`}>
            {data.title}{' '}
            <span className={`${script.className} text-[56px] text-[#6d9a45] sm:text-[64px]`}>{data.title_highlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-center text-[16px] leading-7 text-[#5c675e] lg:mx-0 lg:text-left">{data.description}</p>
          <div className="mt-6 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <ul className="space-y-3">
              {data.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-[16px] text-[#243028]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5d8f45] text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="relative h-[118px] w-[190px] shrink-0 overflow-hidden rounded-2xl border border-[#e4ecdc] bg-white p-1.5 shadow-sm">
              <img src={data.images[2]} alt="" className="h-full w-full rounded-xl object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
