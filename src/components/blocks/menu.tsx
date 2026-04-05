"use client";

import React from "react";

import { FadeIn, ScaleIn } from "@/components/animations";
import { ContactForm } from "@/components/blocks/contact-form";
import { DashedLine } from "@/components/dashed-line";

export default function Menu() {
  return (
    <section className="py-28 lg:py-12 lg:pt-44">
      <div className="container max-w-2xl">
        <FadeIn delay={0.1}>
          <h1 className="text-center text-4xl font-light tracking-tight md:text-4xl lg:text-5xl">
            Select Your Menu
          </h1>
          <p className="text-muted-foreground mt-4 text-center leading-snug font-medium lg:mx-auto">
            Kindly let us know your menu preference and any allergies.
          </p>
        </FadeIn>

        <DashedLine className="my-12" />

        {/* Inquiry Form */}
        <ScaleIn delay={0.3}>
          <div className="mx-auto">
            <ContactForm />
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
