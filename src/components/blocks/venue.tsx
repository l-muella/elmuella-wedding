import Image from "next/image";

import { cn } from "@/lib/utils";

const Venue = () => {
  return (
    <section className="container mt-10 flex max-w-5xl flex-col gap-8 md:mt-14 md:gap-14 lg:mt-20 lg:flex-row lg:items-end">
      {/* Mobile order: 1 */}
      <div className="lg:hidden">
        <ImageSection src="/venue/villa-luisa.jpg" alt="Villa Luisa exterior" />
      </div>

      {/* Mobile order: 2 */}
      <div className="lg:hidden">
        <TextSection
          title="Our Wedding Venue"
          paragraphs={[
            "We chose Villa Luisa because it reflects the romance, passion, and beauty of Seville. Its architecture shows subtle Arabic inspiration - curved arches, tiled courtyards, and shaded patios that offer relief from the Andalusian sun - while the elegant halls bring a sense of classic European charm.",
            "From the Columns Patio, where we will welcome you with cocktails under the open sky, to the beautiful halls where we will celebrate our union, every space feels both intimate and grand. Light moves softly through the arches and reflects on colorful tiles, marble, and warm terracotta tones.",
            "The gardens create a peaceful oasis in the heart of the city - a place where history, culture, and emotion come together as we begin our new chapter, surrounded by the people we love most.",
          ]}
        />
      </div>

      {/* Desktop left column */}
      <div className="hidden flex-col gap-8 lg:flex lg:gap-16 xl:gap-20">
        <ImageSection
          src="/venue/villa-luisa.jpg"
          alt="Villa Luisa exterior"
          className="xl:-translate-x-10"
        />
        <TextSection
          title="History and Heritage"
          paragraphs={[
            "Villa Luisa was created in the early 20th century by Herman Bemberg, who arrived in Seville in 1918 and quickly fell in love with the city. In 1919, he commissioned the Valencian architect Vicente Traver y Tomás to design his private residence in the new El Porvenir district. Completed in 1925, the house was named “Villa Luisa” in memory of his sister.",
            "More than a private home, the villa reflected Bemberg’s passion for music, art, and travel. A devoted patron of the arts, he brought back rare pieces from Morocco and the Middle East, shaping the house into a place of culture, conversation, and elegant gatherings.",
            "Today, Villa Luisa carries this spirit forward, welcoming refined celebrations within its historic surroundings.",
          ]}
        />
      </div>

      {/* Mobile order: 3 */}
      <div className="lg:hidden">
        <ImageSection
          src="/venue/fountain.jpg"
          alt="Beautiful fountain at Villa Luisa"
        />
      </div>

      {/* Desktop right column */}
      <div className="hidden flex-col gap-8 lg:flex lg:gap-16 xl:gap-20">
        <TextSection
          title="Our Wedding Venue"
          paragraphs={[
            "We chose Villa Luisa because it reflects the romance, passion, and beauty of Seville. Its architecture shows subtle Arabic inspiration - curved arches, tiled courtyards, and shaded patios that offer relief from the Andalusian sun - while the elegant halls bring a sense of classic European charm.",
            "From the Columns Patio, where we will welcome you with cocktails under the open sky, to the beautiful halls where we will celebrate our union, every space feels both intimate and grand. Light moves softly through the arches and reflects on colorful tiles, marble, and warm terracotta tones.",
            "The gardens create a peaceful oasis in the heart of the city - a place where history, culture, and emotion come together as we begin our new chapter, surrounded by the people we love most.",
          ]}
        />
        <ImageSection
          src="/venue/fountain.jpg"
          alt="Beautiful fountain at Villa Luisa"
          className="xl:translate-x-10"
        />
      </div>

      {/* Mobile order: 4 */}
      <div className="lg:hidden">
        <TextSection
          title="History and Heritage"
          paragraphs={[
            "Villa Luisa was created in the early 20th century by Herman Bemberg, who arrived in Seville in 1918 and quickly fell in love with the city. In 1919, he commissioned the Valencian architect Vicente Traver y Tomás to design his private residence in the new El Porvenir district. Completed in 1925, the house was named “Villa Luisa” in memory of his sister.",
            "More than a private home, the villa reflected Bemberg’s passion for music, art, and travel. A devoted patron of the arts, he brought back rare pieces from Morocco and the Middle East, shaping the house into a place of culture, conversation, and elegant gatherings.",
            "Today, Villa Luisa carries this spirit forward, welcoming refined celebrations within its historic surroundings.",
          ]}
        />
      </div>
    </section>
  );
};

export default Venue;

interface ImageSectionProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageSection({ src, alt, className }: ImageSectionProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="relative aspect-[2/1.5] overflow-hidden rounded-2xl">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
}

interface TextSectionProps {
  title?: string;
  paragraphs: string[];
}

export function TextSection({ title, paragraphs }: TextSectionProps) {
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
    </section>
  );
}
