import React from "react";

import { PeopleFaces } from "@/components/blocks/people-faces";
import { DashedLine } from "@/components/dashed-line";

export default function People() {
  return (
    <section className="py-28 lg:py-12 lg:pt-44">
      <div className="container max-w-2xl">
        <h1 className="text-center text-4xl font-light tracking-tight md:text-4xl lg:text-5xl">
          The People Make it Special
        </h1>
        <p className="text-muted-foreground mt-4 text-center leading-snug font-medium text-xl lg:mx-auto">
          Meet the wonderful friends who stand by our side on our special day.
        </p>

        {/* <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          {contactInfo.map((info, index) => (
            <div key={index}>
              <h2 className="font-medium">{info.title}</h2>
              {info.content}
            </div>
          ))}
        </div> */}

        <DashedLine className="my-12" />

        {/* People */}
        <div className="mx-auto">
          <PeopleFaces />
        </div>
      </div>
    </section>
  );
}
