"use client";

import Image from "next/image";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

const bridesmaids = [
  {
    name: "Diana Demeshko",
    company: "Bridesmaid",
    image: "/bridesmaids/diana.jpg",
  },
  {
    name: "Kateryna	Pavlova",
    company: "Bridesmaid",
    image: "/bridesmaids/kateryna.jpg",
  },
  {
    name: "Kristina	Pichler",
    company: "Bridesmaid",
    image: "/bridesmaids/kristina.jpg",
  },
];

const bestmen = [
  {
    name: "Constantin Klezl",
    company: "Groomsman",
    image: "/bestmen/tino.jpg",
  },
  {
    name: "Sebastian Ulbel",
    company: "Groomsman",
    image: "/bestmen/sebi.jpg",
  },
  {
    name: "Thomas Deutinger",
    company: "Groomsman",
    image: "/bestmen/tho.jpg",
  },
];

export function PeopleFaces() {
  return (
    <section className="container max-w-5xl py-12">
      {/* Bridesmaids Section */}
      <FadeIn delay={0.1}>
        <h3 className="text-foreground mb-8 text-center text-4xl font-medium tracking-wide">
          Bridesmaids
        </h3>
      </FadeIn>
      <StaggerChildren staggerDelay={0.15} className="mb-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {bridesmaids.map((bridesmaid) => (
          <StaggerItem key={bridesmaid.name} className="text-center">
            <Image
              src={bridesmaid.image}
              alt={bridesmaid.name}
              width={150}
              height={150}
              className="mx-auto rounded-full object-cover"
            />
            <h3 className="mt-3 font-semibold">{bridesmaid.name}</h3>
            <p className="text-muted-foreground">{bridesmaid.company}</p>
          </StaggerItem>
        ))}
      </StaggerChildren>

      {/* Bestmen Section */}
      <FadeIn delay={0.2}>
        <h3 className="text-foreground mb-8 text-center text-4xl font-medium tracking-wide">
          Bestmen
        </h3>
      </FadeIn>
      <StaggerChildren staggerDelay={0.15} className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {bestmen.map((person) => (
          <StaggerItem key={person.name} className="text-center">
            <Image
              src={person.image}
              alt={person.name}
              width={150}
              height={150}
              className="mx-auto rounded-full object-cover"
            />
            <h3 className="mt-3 font-semibold">{person.name}</h3>
            <p className="text-muted-foreground">{person.company}</p>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>
  );
}
