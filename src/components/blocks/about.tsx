"use client";

import Image from "next/image";
import Link from "next/link";

import { FadeIn, SlideIn } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section className="container mt-10 flex max-w-5xl flex-col gap-8 md:mt-14 md:gap-14 lg:mt-20 lg:flex-row">
      {/* Mobile order: 1 */}
      <div className="lg:hidden">
        <SlideIn direction="up" delay={0.1}>
          <ImageSection
            src="/about/our-story-london.jpg"
            alt="Our journey together"
            aspectRatio="aspect-[2/2]"
          />
        </SlideIn>
      </div>

      {/* Mobile order: 2 */}
      <div className="lg:hidden">
        <FadeIn delay={0.2}>
          <TextSection
            title="The Proposal"
            paragraphs={[
              "On 01.04.2025, Palina officially received her Austrian passport which meant one very important thing: no more visa stress. Lukas decided this milestone deserved a proper celebration and surprised her with a trip to London - the city she could now visit without paperwork drama.",
              "On a sunny April day, they watched The Lion King musical, strolled through the city, and did some enthusiastic bar hopping before heading to what Palina thought was just a 'nice dinner.' Instead, they were led into a private space styled like a cozy English living room, complete with a fireplace and champagne waiting.",
              "Still thinking it was simply a very well-planned surprise, Palina was completely caught off guard when Lukas suddenly got down on one knee. Plot twist: it wasn't just a trip. She said yes.",
            ]}
          />
        </FadeIn>
      </div>

      {/* Desktop left column */}
      <div className="hidden flex-col gap-8 lg:flex lg:gap-16 xl:gap-20">
        <SlideIn direction="left" delay={0.1}>
          <ImageSection
            src="/about/our-story-london.jpg"
            alt="Our journey together"
            className="xl:-translate-x-10"
            aspectRatio="aspect-[2/2]"
          />
        </SlideIn>
        <FadeIn delay={0.3}>
          <TextSection
            title="Why Seville?"
            paragraphs={[
              "One of our first vacations together took us to Andalusia. We flew to Málaga, spent wonderful days in Marbella, and then rented a car to explore the famous white villages of southern Spain. Driving through winding roads and sun-drenched hills, we discovered breathtaking places like Ronda, which completely stole our hearts.",
              "From there, we continued to Granada, standing in awe before the Alhambra, and later to Cádiz, where European charm meets strong Arabic influence. But when we finally arrived in sunny Seville. The warm air, the sound of flamenco in the streets, the incredible food, and the stunning architecture... We didn't just like it. We fell in love with it.",
              "And somehow, Seville became part of our story.",
            ]}
          />
        </FadeIn>
      </div>

      {/* Mobile order: 3 */}
      <div className="lg:hidden">
        <SlideIn direction="up" delay={0.3}>
          <ImageSection
            src="/about/holiday-sevilla.jpg"
            alt="Our special moments"
            aspectRatio="aspect-[2/2]"
          />
        </SlideIn>
      </div>

      {/* Desktop right column */}
      <div className="hidden flex-col gap-8 lg:flex lg:gap-16 xl:gap-20">
        <FadeIn delay={0.2}>
          <TextSection
            title="The Proposal"
            paragraphs={[
              "On 01.04.2025, Palina officially received her Austrian passport which meant one very important thing: no more visa stress. Lukas decided this milestone deserved a proper celebration and surprised her with a trip to London - the city she could now visit without paperwork drama.",
              "On a sunny April day, they watched The Lion King musical, strolled through the city, and did some enthusiastic bar hopping before heading to what Palina thought was just a 'nice dinner.' Instead, they were led into a private space styled like a cozy English living room, complete with a fireplace and champagne waiting.",
              "Still thinking it was simply a very well-planned surprise, Palina was completely caught off guard when Lukas suddenly got down on one knee. Plot twist: it wasn't just a trip. She said yes.",
            ]}
          />
        </FadeIn>
        <SlideIn direction="right" delay={0.4}>
          <ImageSection
            src="/about/holiday-sevilla.jpg"
            alt="Our special moments"
            className="xl:translate-x-10"
            aspectRatio="aspect-[2/2]"
          />
        </SlideIn>
      </div>

      {/* Mobile order: 4 */}
      <div className="lg:hidden">
        <FadeIn delay={0.4}>
          <TextSection
            title="Why Seville?"
            paragraphs={[
              "One of our first vacations together took us to Andalusia. We flew to Málaga, spent wonderful days in Marbella, and then rented a car to explore the famous white villages of southern Spain. Driving through winding roads and sun-drenched hills, we discovered breathtaking places like Ronda, which completely stole our hearts.",
              "From there, we continued to Granada, standing in awe before the Alhambra, and later to Cádiz, where European charm meets strong Arabic influence. But when we finally arrived in sunny Seville. The warm air, the sound of flamenco in the streets, the incredible food, and the stunning architecture... We didn't just like it. We fell in love with it.",
              "And somehow, Seville became part of our story.",
            ]}
          />
        </FadeIn>
      </div>
    </section>
  );
};

export default About;

interface ImageSectionProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export function ImageSection({
  src,
  alt,
  className,
  aspectRatio = "aspect-[2/1.5]",
}: ImageSectionProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className={cn("relative overflow-hidden rounded-2xl", aspectRatio)}>
        <Image src={src} alt={alt} fill className={cn("object-cover")} />
      </div>
    </div>
  );
}

interface TextSectionProps {
  title?: string;
  paragraphs: string[];
  ctaButton?: {
    href: string;
    text: string;
  };
}

export function TextSection({
  title,
  paragraphs,
  ctaButton,
}: TextSectionProps) {
  return (
    <section className="flex-1 space-y-4 text-lg md:space-y-6">
      {title && (
        <h2 className="text-foreground text-4xl font-light">{title}</h2>
      )}
      <div className="text-muted-foreground max-w-xl space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {ctaButton && (
        <div className="mt-8">
          <Link href={ctaButton.href}>
            <Button size="lg">{ctaButton.text}</Button>
          </Link>
        </div>
      )}
    </section>
  );
}
