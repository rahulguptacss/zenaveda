'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import type { BackToTopData } from '../../types';

export default function BackToTop({ data }: { data: BackToTopData }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <button type="button" aria-label={data.aria_label} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#1e4d34] text-white">
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
