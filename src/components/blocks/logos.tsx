import Image from "next/image";

import Marquee from "react-fast-marquee";

import { cn } from "@/lib/utils";

type Company = {
  name: string;
  logo: string;
  width: number;
  height: number;
};

export const Logos = () => {
  const topRowCompanies = [
    {
      name: "Tile 1",
      logo: "/tiles.svg",
      width: 150,
      height: 76,
    },
    {
      name: "Tile 2",
      logo: "/tiles.svg",
      width: 150,
      height: 76,
    },
    {
      name: "Tile 3",
      logo: "/tiles.svg",
      width: 150,
      height: 76,
    },
    {
      name: "Tile 4",
      logo: "/tiles.svg",
      width: 150,
      height: 76,
    },
  ];

  const bottomRowCompanies = [
    {
      name: "Tile 5",
      logo: "/tiles.svg",
      width: 150,
      height: 76,
    },
    {
      name: "Tile 6",
      logo: "/tiles.svg",
      width: 150,
      height: 76,
    },
    {
      name: "Tile 7",
      logo: "/tiles.svg",
      width: 150,
      height: 76,
    },
    {
      name: "Tile 8",
      logo: "/tiles.svg",
      width: 150,
      height: 76,
    },
    {
      name: "Tile 9",
      logo: "/tiles.svg",
      width: 150,
      height: 76,
    },
  ];

  return (
    <section className="pb-28 lg:pb-32 overflow-hidden">
      <div className="container space-y-10 lg:space-y-16">
        <div className="text-center">
          <h3 className="mb-4 text-xl text-balance md:text-2xl lg:text-3xl">
            We can’t imagine this day without you.
            <br className="max-md:hidden" />
            <span className="text-muted-foreground">
              Please join us as we promise each other forever.
            </span>
          </h3>
        </div>

        <div className="flex w-full flex-col items-center gap-8">
          {/* Top row - 4 logos */}
          <LogoRow companies={topRowCompanies} gridClassName="grid-cols-4" />

          {/* Bottom row - 5 logos */}
          <LogoRow
            companies={bottomRowCompanies}
            gridClassName="grid-cols-5"
            direction="right"
          />
        </div>
      </div>
    </section>
  );
};

type LogoRowProps = {
  companies: Company[];
  gridClassName: string;
  direction?: "left" | "right";
};

const LogoRow = ({ companies, gridClassName, direction }: LogoRowProps) => {
  return (
    <>
      {/* Desktop static version */}
      <div className="hidden md:block">
        <div
          className={cn(
            "grid items-center justify-items-center gap-x-20 lg:gap-x-28",
            gridClassName,
          )}
        >
          {companies.map((company, index) => (
            <div key={index}>
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={company.width}
                height={company.height}
                className="dark:opacity/100 object-contain opacity-50 dark:invert"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile marquee version */}
      <div className="md:hidden">
        <Marquee direction={direction} pauseOnHover>
          {companies.map((company, index) => (
            <div
              key={index}
              className="mx-8 inline-block"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={company.width}
                height={company.height}
                className="object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};
