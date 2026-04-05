"use client";

import React from "react";
import { FadeIn, SlideIn } from "@/components/animations";

const contactInfo = [
  {
    title: "Account Holder:",
    content: <p className="text-muted-foreground mt-3">Lukas Mueller</p>,
  },
  {
    title: "IBAN:",
    content: (
      <p className="text-muted-foreground mt-3">AT13 6000 0000 8202 9810</p>
    ),
  },
  {
    title: "BIC:",
    content: <p className="text-muted-foreground mt-3">OPSKATWW</p>,
  },
];

export default function Gift() {
  return (
    <section className="py-28 lg:py-12 lg:pt-44">
      <div className="container max-w-2xl">
        <FadeIn delay={0.1}>
          <h1 className="text-center text-4xl font-light tracking-tight md:text-4xl lg:text-5xl">
            Wedding Gift
          </h1>
          <p className="text-muted-foreground mt-4 text-center text-xl leading-snug font-medium lg:mx-auto">
            Your presence is the greatest gift of all. Should you wish to give
            something, a contribution towards our honeymoon would mean the world
            to us.
          </p>
        </FadeIn>

        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          {contactInfo.map((info, index) => (
            <SlideIn key={index} direction="up" delay={0.2 + index * 0.1}>
              <div>
                <h3 className="text-lg font-semibold">{info.title}</h3>
                {info.content}
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
