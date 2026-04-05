"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { FadeIn, StaggerChildren, StaggerItem, SlideIn } from "@/components/animations";

export const VerticalTimeline = () => {
  const timelineGroups = [
    {
      title: "Get Together",
      dressCode: "Mediterranean Chic",
      events: [
        {
          date: "Sun · 27.09.2026",
          time: "15:00",
          title: "Welcome Gathering",
          location: "Rooftop Terrace 1912",
          address: "Pl. de S. Francisco, 11-12, 41004 Sevilla",
        },
      ],
    },
    {
      title: "The Day",
      dressCode: "Black Tie",
      events: [
        {
          date: "Mon · 28.09.2026",
          time: "17:00",
          title: "Wedding Ceremony",
          location: "Iglesia del Santo Ángel",
          address: "Calle Rioja, 23, 41001 Sevilla",
        },
        {
          date: "Mon · 28.09.2026",
          time: "18:30",
          title: "Cocktail Hour",
          location: "Villa Luisa",
          address: "Av. Manuel Siurot, 1, 41013 Sevilla",
        },
        {
          date: "Mon · 28.09.2026",
          time: "20:00",
          title: "Dinner",
          location: "Villa Luisa",
          address: "Av. Manuel Siurot, 1, 41013 Sevilla",
          buttonLink: "/menu",
          buttonText: "Select Menu",
        },
        {
          date: "Mon · 28.09.2026",
          time: "23:00",
          title: "Party",
          location: "Villa Luisa",
          address: "Av. Manuel Siurot, 1, 41013 Sevilla",
        },
      ],
    },
  ];

  return (
    <section>
      <div className="container">
        <FadeIn>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-4xl font-light tracking-tight md:text-4xl lg:text-5xl">
              Wedding Schedule
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-xl leading-snug text-balance">
              Here is our timeline so you know what to expect in Seville.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren staggerDelay={0.2} className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {timelineGroups.map((group, groupIndex) => (
            <StaggerItem key={groupIndex}>
              <SlideIn direction={groupIndex === 0 ? "left" : "right"} delay={0.1 + groupIndex * 0.1}>
                <h3 className="text-foreground font-cormorant mb-2 text-left text-3xl font-semibold lg:ml-8">
                  {group.title}
                </h3>
                {group.dressCode && (
                  <p className="text-foreground font-cormorant mb-8 text-left text-xl italic lg:ml-8">
                    Dress Code: {group.dressCode}
                  </p>
                )}
              </SlideIn>
              <div className="flex justify-center">
                <ol className="border-border relative w-full max-w-md border-l max-lg:ml-0">
                  {group.events.map((event, index) => (
                    <li key={index} className="mb-10 ml-6 last:mb-0">
                      <span className="bg-primary ring-background absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-8">
                        <svg
                          className="text-primary-foreground h-3 w-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                          />
                        </svg>
                      </span>
                      <SlideIn direction="left" delay={0.2 + index * 0.15}>
                        <time className="bg-muted border-border text-foreground rounded border px-2.5 py-0.5 text-xl font-medium">
                          {event.date} · {event.time}
                        </time>
                        <h4 className="text-foreground font-cormorant mt-2 mb-1 flex items-center text-2xl font-semibold">
                          {event.title}
                        </h4>
                        <p className="text-foreground font-cormorant mb-1 text-xl">
                          {event.location}
                        </p>
                        <p className="text-muted-foreground mb-2 text-xl">
                          {event.address}
                        </p>
                        {event.buttonLink && (
                          <Button variant="outline" asChild className="mt-3">
                            <Link href={event.buttonLink}>
                              {event.buttonText}
                            </Link>
                          </Button>
                        )}
                      </SlideIn>
                    </li>
                  ))}
                </ol>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};
