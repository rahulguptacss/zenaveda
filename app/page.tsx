import type { ReactNode } from 'react';
import Header from '../components/sections/Header';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Programs from '../components/sections/Programs';
import WhyChoose from '../components/sections/WhyChoose';
import Gallery from '../components/sections/Gallery';
import Testimonials from '../components/sections/Testimonials';
import Cta from '../components/sections/Cta';
import Faq from '../components/sections/Faq';
import Team from '../components/sections/Team';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';
import BackToTop from '../components/ui/BackToTop';
import { common, pages, sections } from '../components/types';

const sectionMap: Record<string, ReactNode> = {
  Hero: <Hero data={sections.hero} />,
  About: <About data={sections.about} />,
  Programs: <Programs data={sections.programs} />,
  WhyChoose: <WhyChoose data={sections.why} />,
  Gallery: <Gallery data={sections.gallery} />,
  Testimonials: <Testimonials data={sections.testimonials} />,
  Cta: <Cta data={sections.cta} />,
  Faq: <Faq data={sections.faq} />,
  Team: <Team data={sections.team} />,
  Contact: <Contact data={sections.contact} />,
};

export const metadata = {
  title: pages.home.metadata.title,
  description: pages.home.metadata.description,
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f6f1] text-[#163226]">
      <Header data={common.Header} />
      <main className="flex-1">
        {pages.home.components.map((block) => (
          <div key={block.key}>{sectionMap[block.component]}</div>
        ))}
      </main>
      <Footer data={common.Footer} />
      <BackToTop data={common.BackToTop} />
    </div>
  );
}
