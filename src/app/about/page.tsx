import { Background } from "@/components/background";
import About from "@/components/blocks/about";
import { AboutHero } from "@/components/blocks/about-hero";
import { Testimonials } from "@/components/blocks/testimonials";
import { DashedLine } from "@/components/dashed-line";

export default function AboutPage() {
  return (
    <Background>
      <div className="py-28 lg:py-12 lg:pt-44">
        <AboutHero />

        <About />
        <div className="pt-20 lg:pt-24">
          <DashedLine className="mx-auto max-w-xl" />
          <Testimonials dashedLineClassName="hidden" />
        </div>
      </div>
    </Background>
  );
}
