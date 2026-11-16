import type { TeamSectionData } from '../../types';

export default function Team({ data }: { data: TeamSectionData }) {
  return (
    <section id={data.id} className="bg-[#f7f6f1] py-8">
      <div className="mx-auto max-w-[1180px] px-4">
        <div className="mb-8 text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#3d7a52]">{data.eyebrow}</p>
          <h2 className="mt-2 text-[34px] font-semibold text-[#163226] sm:text-[42px]">{data.title}</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {data.members.map((member) => (
            <article key={member.name} className="text-center">
              <img src={member.image} alt={member.name} className="mx-auto h-40 w-40 rounded-full object-cover sm:h-48 sm:w-48" />
              <h3 className="mt-3 text-[18px] font-semibold text-[#163226]">{member.name}</h3>
              <p className="text-[14px] text-[#5d6b62]">{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
