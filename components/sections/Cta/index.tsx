import type { CtaSectionData } from '../../types';

export default function Cta({ data }: { data: CtaSectionData }) {
  return (
    <section id={data.id} className="bg-[#f7f6f1] px-4 py-8">
      <div className="mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-4 rounded-[28px] bg-[#1e4d34] px-8 py-10 text-white sm:flex-row sm:items-center">
        <div>
          <h2 className="text-[30px] font-semibold sm:text-[36px]">{data.title}</h2>
          <p className="mt-2 max-w-xl text-[15px] text-white/80">{data.description}</p>
        </div>
        <a href={data.button_href} className="rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#1e4d34]">
          {data.button_text}
        </a>
      </div>
    </section>
  );
}
