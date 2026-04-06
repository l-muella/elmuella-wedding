"use client";

import { Globe, MapPin, Mail, Phone } from "lucide-react";

import { FadeIn, SlideIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { DashedLine } from "@/components/dashed-line";

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "Avda. Manuel Siurot 1,\n41013 Sevilla, España",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@villaluisa.com",
    href: "mailto:info@villaluisa.com",
  },
  {
    icon: Globe,
    label: "Website",
    value: "villaluisa.com",
    href: "https://www.villaluisa.com/",
    target: "_blank",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+(34) 954 666 359",
    href: "tel:+34954666359",
  },
];

export function VenueHero() {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <FadeIn delay={0.1}>
            <h1 className="text-4xl font-light tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Villa Luisa
            </h1>

            <p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
              Historic Private House in the Heart of Seville
            </p>

            <p className="text-muted-foreground mt-8 max-w-lg space-y-6 text-lg text-balance md:mt-12 lg:mt-12">
              Villa Luisa is a beautiful example of Seville’s architectural
              heritage. The villa reflects the unique mix of cultures that defines
              Andalusia, where classic European elegance meets gentle Arabic
              influence, and history can be felt in every corner.
              <br />
              <br />
              Elegant arches, decorative wrought iron, and hand-painted ceramic
              tiles - the famous azulejos of southern Spain - give the house its
              special character. For nearly a century, this private residence has
              hosted distinguished celebrations and cultural events within its
              nine unique spaces and more than 4,400 m² of lush gardens.
              <br />
              <br />
              Timeless and full of atmosphere, Villa Luisa offers a truly
              unforgettable setting for our wedding celebration.
            </p>
          </FadeIn>
        </div>

        <SlideIn direction="right" delay={0.3} className="relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:pt-0 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          <StaggerChildren staggerDelay={0.1} className="flex flex-col gap-6">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <StaggerItem key={detail.label} className="flex items-start gap-3">
                  <Icon className="text-primary-foreground mt-1 size-5 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <div className="text-muted-foreground text-sm">
                      {detail.label}
                    </div>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        target={detail.target}
                        rel={detail.target === "_blank" ? "noopener noreferrer" : undefined}
                        className="text-lg transition-opacity hover:opacity-75"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <div className="text-lg whitespace-pre-line">
                        {detail.value}
                      </div>
                    )}
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </SlideIn>
      </div>
    </section>
  );
}
