import React from "react";

import Link from "next/link";

import { Globe, Instagram, Video } from "lucide-react";

import { PlannerFaces } from "@/components/blocks/planner-faces";
import { DashedLine } from "@/components/dashed-line";

const contactInfo = [
  {
    title: "Love A tope",
    content: (
      <p className="text-muted-foreground mt-3">
        San Francisco Javier Avenue 9,
        <br />
        Building 2, Floor 3, Office 5
        <br />
        41018 Seville
      </p>
    ),
  },
  {
    title: "Contact",
    content: (
      <div className="mt-3">
        <div>
          <p className="">Email</p>
          <Link
            href="mailto:atope@loveatope.com"
            className="text-muted-foreground hover:text-foreground"
          >
            atope@loveatope.com
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: "Follow us",
    content: (
      <div className="mt-3 flex gap-6 lg:gap-10">
        <Link
          href="https://www.instagram.com/loveatope/"
          className="text-muted-foreground hover:text-foreground"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="size-5" />
        </Link>
        <Link
          href="https://www.tiktok.com/@loveatope_weddings"
          className="text-muted-foreground hover:text-foreground"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Video className="size-5" />
        </Link>
        <Link
          href="https://loveatope.com/en/"
          className="text-muted-foreground hover:text-foreground"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Globe className="size-5" />
        </Link>
      </div>
    ),
  },
];

export default function WeddingPlanners() {
  return (
    <section className="py-28 lg:py-12 lg:pt-44">
      <div className="container max-w-2xl">
        <h1 className="text-center text-4xl font-light tracking-tight md:text-4xl lg:text-5xl">
          Our Wedding Planners
        </h1>
        <p className="text-muted-foreground mt-4 text-center leading-snug font-medium lg:mx-auto">
          Meet the wonderful team from Love A Tope, our dedicated wedding
          planners based in Seville. With their experience and care, they are
          helping us bring our dream celebration to life.
        </p>
        <p className="text-muted-foreground mt-4 text-center leading-snug font-medium lg:mx-auto">
          If you are planning a surprise for us, would like to prepare a speech,
          or wish to organize anything special during the wedding day, we kindly
          ask you to get in touch with our planners directly. They will be happy
          to assist you and make sure everything runs smoothly.
        </p>

        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          {contactInfo.map((info, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold">{info.title}</h3>
              {info.content}
            </div>
          ))}
        </div>

        <DashedLine className="my-12" />

        {/* Wedding Planners */}
        <div className="mx-auto">
          <PlannerFaces />
        </div>
      </div>
    </section>
  );
}
