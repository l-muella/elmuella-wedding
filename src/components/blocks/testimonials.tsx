"use client";

import Image from "next/image";

import { DashedLine } from "../dashed-line";

import { FadeIn, ScaleIn } from "@/components/animations";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const items = [
  {
    quote: "Visiting the Grand Mosque during Ramadan.",
    city: "Abu Dhabi",
    image: "/testimonials/abu-dhabi.jpg",
  },
  {
    quote: "Exploring Maldives and the underwater wonderland.",
    city: "Maledives",
    image: "/testimonials/malediven.jpg",
  },
  {
    quote: "Romantic canoe rides through Venice’s canals.",
    city: "Venice",
    image: "/testimonials/venedig.jpg",
  },
  {
    quote: "Lukas’s journey to Belarus meeting Palina’s family.",
    city: "Belarus",
    image: "/testimonials/belarus.jpg",
  },
  {
    quote: "Celebrating New Year’s Eve in Tulum.",
    city: "Mexico",
    image: "/testimonials/rsvp-mexiko.jpg",
  },
  {
    quote: "Summer days at our favorite spot in Austria.",
    city: "Landhaus zu Appesbach",
    image: "/testimonials/wolfgangsee.jpg",
  },
  {
    quote: "Living the Vienna life, dancing at the balls.",
    city: "Vienna",
    image: "/testimonials/vienna-ball.jpg",
  },
  {
    quote: "Learning kite-surfing on our yacht adventure in Egypt.",
    city: "Egypt",
    image: "/testimonials/yacht.jpg",
  },
  {
    quote: "Dressing up for Halloween parties.",
    city: "Vienna",
    image: "/testimonials/halloween.jpg",
  },
  {
    quote: "Escaping for a relaxing retreat weekend in Pogush.",
    city: "Pogusch",
    image: "/testimonials/pogusch.jpg",
  },
  {
    quote: "Savoring wine and maroni in South Styria.",
    city: "South Styria",
    image: "/testimonials/wine-yard.jpg",
  },
  {
    quote: "Teaching Palina to ski and to après-ski.",
    city: "Kitzbühel",
    image: "/testimonials/skiing.jpg",
  },
  {
    quote: "Going for a walk with our hot dog.",
    city: "Vienna",
    image: "/testimonials/love-in-vienna.jpg",
  },
  {
    quote: "Spa getaways and relaxing facial treatments.",
    city: "Bad Hofgastein",
    image: "/testimonials/spa.jpg",
  },
  {
    quote: "Growing older while enjoying classical concerts together.",
    city: "Concert Hall",
    image: "/testimonials/concert.jpg",
  },
  {
    quote: "Wanderlust adventures around the world.",
    city: "Schafberg",
    image: "/testimonials/wanderlust.jpg",
  },
  {
    quote: "Romantic rooftop moments with stunning city views.",
    city: "Vienna",
    image: "/testimonials/rooftop-love.jpg",
  },
  {
    quote: "Christmas magic with our little family.",
    city: "Home",
    image: "/testimonials/xmas.jpg",
  },
];

export const Testimonials = ({
  className,
  dashedLineClassName,
}: {
  className?: string;
  dashedLineClassName?: string;
}) => {
  return (
    <>
      <section className={cn("overflow-hidden pt-20 lg:pt-24", className)}>
        <div className="container">
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h2 className="text-4xl font-light tracking-tight md:text-4xl lg:text-5xl">
                Gallery of Happiness
              </h2>
              <p className="text-muted-foreground max-w-md leading-snug">
                Moments captured throughout our journey together - from our
                first adventures in Vienna to sunny days in Seville, and all the
                beautiful memories in between.
              </p>
              {/* <Button variant="outline" className="shadow-md">
                Read our Customer Stories <ArrowRight className="size-4" />
              </Button> */}
            </div>
          </FadeIn>

          <ScaleIn
            delay={0.3}
            className="relative mt-8 -mr-[max(3rem,calc((100vw-80rem)/2+3rem))] md:mt-12 lg:mt-16"
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="">
                {items.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="xl:basis-1/3.5 grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] 2xl:basis-[24%]"
                  >
                    <Card className="bg-muted h-full overflow-hidden border-none">
                      <CardContent className="flex h-full flex-col p-0">
                        <div className="relative h-[288px] lg:h-[328px]">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.city}
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between gap-10 p-6">
                          <blockquote className="text-lg leading-none! font-medium md:text-xl lg:text-2xl">
                            {testimonial.quote}
                          </blockquote>
                          <div className="space-y-0.5">
                            <div className="text-muted-foreground font-cormorant text-xl">
                              {testimonial.city}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-8 flex gap-3">
                <CarouselPrevious className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
                <CarouselNext className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
              </div>
            </Carousel>
          </ScaleIn>
        </div>
      </section>
      <DashedLine
        orientation="horizontal"
        className={cn("mx-auto max-w-[80%]", dashedLineClassName)}
      />
    </>
  );
};
