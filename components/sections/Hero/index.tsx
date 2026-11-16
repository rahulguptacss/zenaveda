import { Great_Vibes, Playfair_Display } from 'next/font/google';
import type { HeroSectionData } from '../../types';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['500', '600'] });
const script = Great_Vibes({ subsets: ['latin'], weight: '400' });

export default function Hero({ data }: { data: HeroSectionData }) {
  return (
    <section id={data.id} className="bg-[#f4f1e8]">
      <div className="grid min-h-[560px] lg:min-h-[640px] lg:grid-cols-2">
        <div className="relative flex items-center overflow-hidden px-6 py-14 sm:px-12 lg:px-16">
          <svg viewBox="0 0 180 120" className="pointer-events-none absolute -left-2 -top-2 h-28 w-40 text-[#6f9a4a]" aria-hidden>
            <path d="M20 70c18-28 28-44 30-70 8 22 22 40 48 58" fill="none" stroke="currentColor" strokeWidth="2" />
            <ellipse cx="38" cy="42" rx="16" ry="8" transform="rotate(-40 38 42)" fill="currentColor" opacity="0.85" />
            <ellipse cx="62" cy="28" rx="14" ry="7" transform="rotate(-20 62 28)" fill="currentColor" opacity="0.7" />
            <ellipse cx="78" cy="52" rx="15" ry="7" transform="rotate(15 78 52)" fill="currentColor" opacity="0.75" />
          </svg>
          <svg viewBox="0 0 80 80" className="pointer-events-none absolute bottom-2 right-6 h-28 w-28 text-[#d7e3c8]" aria-hidden>
            <path d="M40 70c-8-14-18-18-28-16 8-8 14-20 14-32 4 10 10 16 14 18 4-2 10-8 14-18 0 12 6 24 14 32-10-2-20 2-28 16z" fill="currentColor" />
            <circle cx="40" cy="28" r="6" fill="currentColor" />
          </svg>
          <div className="relative mx-auto max-w-[520px]">
            <div className="mb-5 flex justify-center text-[#5d8a3c]">
              <svg viewBox="0 0 64 36" className="h-9 w-16" aria-hidden>
                <path d="M32 30c-6-8-14-10-22-8 6-6 10-14 10-22 3 7 8 12 12 14 4-2 9-7 12-14 0 8 4 16 10 22-8-2-16 0-22 8z" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </div>
            <p className="flex items-center justify-center gap-3 text-[15px] text-[#2c3a30]">
              <span className="h-px w-10 bg-[#2c3a30]" />
              {data.eyebrow}
              <span className="h-px w-10 bg-[#2c3a30]" />
            </p>
            <h1 className={`${playfair.className} mt-5 text-[46px] font-medium leading-[1.05] text-[#1c241c] sm:text-[58px]`}>
              {data.title_line1}
              <span className="block">{data.title_line2}</span>
              <span className={`${script.className} relative inline-block text-[72px] leading-none text-[#5f8f3e] sm:text-[84px]`}>
                {data.title_highlight}
                <span className="absolute -bottom-1 left-1 h-[3px] w-[78%] rounded-full bg-[#6f9a4a]" />
              </span>
            </h1>
            <p className="mt-6 max-w-[460px] text-[16px] leading-7 text-[#5c675e]">{data.description}</p>
            <a href={data.button_href} className="mt-7 inline-flex rounded-lg bg-[#3e6b38] px-7 py-3 text-[16px] font-medium text-white">
              {data.button_text}
            </a>
          </div>
        </div>
        <div className="min-h-[360px] lg:min-h-full">
          <img src={data.images[0]} alt="" className="h-full min-h-[360px] w-full object-cover lg:min-h-[640px]" />
        </div>
      </div>
    </section>
  );
}
