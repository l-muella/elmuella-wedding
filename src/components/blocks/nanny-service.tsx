import React from "react";

import Link from "next/link";

const contactInfo = [
  {
    title: "Please visit:",
    content: (
      <div>
        <Link
          href="https://www.tripsitta.com"
          className="text-muted-foreground hover:text-foreground"
        >
          www.tripsitta.com
        </Link>
      </div>
    ),
  },
];

export default function NannyService() {
  return (
    <section className="py-28 lg:py-12 lg:pt-44">
      <div className="container max-w-2xl">
        <h1 className="text-center text-4xl font-light tracking-tight md:text-4xl lg:text-5xl">
          Nanny Service
        </h1>
        <p className="text-muted-foreground mt-4 text-left text-xl leading-snug font-medium lg:mx-auto">
          Children are very welcome to join the get-together on 27 September
          2026.
          <br />
          However, please note that our wedding celebration on 28 September 2026
          will be an adults-only event.
        </p>
        <p className="text-muted-foreground mt-4 text-left text-xl leading-snug font-medium lg:mx-auto">
          To help you fully enjoy the evening, we have researched professional
          childcare services for those who may need it.
        </p>

        <div className="mt-4 flex justify-between gap-8 max-sm:flex-col md:mt-4 lg:mt-8 lg:gap-12">
          {contactInfo.map((info, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold">{info.title}</h3>
              {info.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
