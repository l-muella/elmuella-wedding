import Image from "next/image";

export const Hero = () => {
  return (
    <section className="pt-28 pb-12 lg:pt-44 lg:pb-16">
      <div className="container flex flex-col items-center justify-center text-center">
        <h1 className="text-foreground max-w-160 text-5xl font-light tracking-tight md:text-6xl lg:text-7xl">
          Palina ∞ Lukas
        </h1>
        <div className="text-center">
          <p className="text-muted-foreground max-w-small mx-auto mt-4 text-xl leading-snug text-balance">
            We warmly invite you to celebrate our wedding on Monday, 28
            September 2026, in Seville. We cannot imagine this special day
            without you. Please join us as we promise each other forever.
          </p>
        </div>

        {/* <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild>
            <a href="/menu">
              Select Menu
            </a>
          </Button>
        </div> */}
      </div>

      <div className="mt-12 max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-10 lg:container lg:mt-12">
        <div className="relative h-[650px] w-full">
          <Image
            src="/hero.webp"
            alt="hero"
            fill
            className="rounded-2xl object-cover object-center shadow-lg max-lg:rounded-tr-none max-lg:object-top"
          />
        </div>
      </div>
    </section>
  );
};
