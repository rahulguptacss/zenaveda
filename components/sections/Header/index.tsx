'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { HeaderData } from '../../types';

export default function Header({ data }: { data: HeaderData }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(data.links[0]?.href ?? '#home');

  useEffect(() => {
    const ids = data.links.map((link) => link.href.replace('#', ''));

    const onScroll = () => {
      const marker = window.scrollY + 120;
      let current = data.links[0]?.href ?? '#home';
      ids.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) current = `#${id}`;
      });
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [data.links]);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex h-[64px] max-w-[1200px] items-center justify-between px-5">
        <a href="#home" className="shrink-0">
          <img src={data.logo} alt={data.logo_text} className="h-[108px] w-auto" />
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {data.links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={
                active === link.href
                  ? 'rounded-full bg-[#4f7d45] px-6 py-2 text-[16px] font-medium text-white'
                  : 'text-[16px] font-medium text-[#2f5a32] hover:text-[#4f7d45]'
              }
            >
              {link.name}
            </a>
          ))}
        </nav>
        <button type="button" className="text-[#2f5a32] lg:hidden" aria-label="Menu" onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="space-y-2 border-t border-[#e7efe4] bg-white px-5 py-4 lg:hidden">
          {data.links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block py-1 text-[16px] font-medium ${active === link.href ? 'text-[#4f7d45]' : 'text-[#2f5a32]'}`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
