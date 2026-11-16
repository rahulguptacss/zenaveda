import type { FooterData, LinkType } from '../../types';

function Links({ items, columns = false }: { items: LinkType[]; columns?: boolean }) {
  return (
    <ul className={columns ? 'mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5' : 'mt-4 space-y-2.5'}>
      {items.map((link) => (
        <li key={link.name}>
          <a href={link.href} className="flex items-center gap-2 text-[15px] text-[#3d4a40] hover:text-[#3f7a34]">
            <span className="text-[#6f9a4a]">›</span>
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Footer({ data }: { data: FooterData }) {
  return (
    <footer className="relative overflow-hidden bg-[#fbfaf6] text-[#1c241c]">
      <svg viewBox="0 0 160 90" className="pointer-events-none absolute right-0 top-0 h-24 w-36 text-[#cfe3b8]" aria-hidden>
        <ellipse cx="120" cy="28" rx="28" ry="10" transform="rotate(24 120 28)" fill="currentColor" />
        <ellipse cx="86" cy="16" rx="20" ry="8" transform="rotate(6 86 16)" fill="currentColor" />
      </svg>
      <div className="relative mx-auto grid max-w-[1100px] gap-4 px-5 pb-20 pt-4 sm:grid-cols-2 sm:gap-8 sm:pt-8 lg:grid-cols-[1.2fr_1fr_1.3fr] lg:pb-24">
        <a href="#home" className="inline-flex sm:-mb-0">
          <img src={data.logo} alt={data.logo_text} className="h-[104px] w-auto sm:h-32" />
        </a>
        <div>
          <h3 className="text-[22px] font-semibold">{data.quick_title}</h3>
          <span className="mt-1 block h-[3px] w-10 rounded-full bg-[#e07a2f]" />
          <Links items={data.quick_links} columns />
        </div>
        <div>
          <h3 className="text-[22px] font-semibold">{data.contact_title}</h3>
          <span className="mt-1 block h-[3px] w-10 rounded-full bg-[#e07a2f]" />
          <ul className="mt-3 space-y-2 text-[15px] text-[#3d4a40]">
            <li className="hidden items-start gap-2 lg:flex">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eef6e6] text-[#4f7a42]">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2" /></svg>
              </span>
              <span className="max-w-[220px] leading-5">{data.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eef6e6] text-[#4f7a42]">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 4h3l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 2-2z" /></svg>
              </span>
              <a href={`tel:${data.phone}`}>{data.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eef6e6] text-[#4f7a42]">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 7 9-7" /></svg>
              </span>
              <a href={`mailto:${data.email}`}>{data.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <svg viewBox="0 0 1440 160" className="absolute bottom-10 left-0 h-16 w-full text-[#d7e8c4] sm:h-20" preserveAspectRatio="none" aria-hidden>
        <path fill="currentColor" d="M0 80c180 40 280-20 460 0s280 50 460 10 300-40 520 10v60H0z" />
        <path fill="#b7d39a" d="M0 110c200 30 320-10 500 8s300 28 480 0 280-24 460 8v34H0z" opacity="0.9" />
      </svg>
      <svg viewBox="0 0 80 90" className="pointer-events-none absolute bottom-14 right-6 hidden h-24 w-20 text-[#c5ddb0] sm:block" aria-hidden>
        <path d="M40 78c-8-14-20-16-30-12 8-8 14-20 14-34 4 12 10 18 16 20 6-2 12-8 16-20 0 14 6 26 14 34-10-4-22-2-30 12z" fill="currentColor" />
        <circle cx="40" cy="28" r="5" fill="currentColor" />
      </svg>
      <div className="relative flex items-center justify-center gap-4 bg-[#163226] px-4 py-3 text-center text-[13px] text-white sm:text-[14px]">
        <span className="hidden h-px w-16 bg-white/50 sm:block" />
        {data.copyright}
        <span className="hidden h-px w-16 bg-white/50 sm:block" />
      </div>
    </footer>
  );
}
