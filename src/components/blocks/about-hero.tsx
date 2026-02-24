import { DashedLine } from "@/components/dashed-line";

const stats = [
  {
    value: "2023",
    label: "Year We Met",
  },
  {
    value: "26",
    label: "Trips Taken Together",
  },
  {
    value: "1.000+",
    label: "Photos Taken, Never Posted",
  },
  {
    value: "∞",
    label: "Adventures Ahead",
  },
  {
    value: "28.09.26",
    label: "Special Day",
  },
];

export function AboutHero() {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="text-4xl font-light tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Our Love Story
          </h1>

          <p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
            Technically, we met on 08.10.2023. But our story really began on
            Raya.
          </p>

          <p className="text-muted-foreground mt-8 max-w-lg space-y-6 text-lg text-balance md:mt-12 lg:mt-12">
            We matched on a dating app. After a while, Palina casually announced
            that she was about to delete her profile. Lukas, however, wasn’t
            ready to let this connection disappear that easily. He convinced her
            to meet, just once. For Palina, it wasn’t a date. For Lukas, it very
            much was.
            <br />
            <br />
            They agreed to meet for coffee and then visit a photo exhibition.
            Lukas arrived, of course, with his “hot dog” Albert - an undeniably
            strong first impression. Coffee turned into the exhibition, and the
            evening ended with dinner at restaurant Wiener. On the second “date”
            Lukas discovered Palina was in her ascetic phase: no bread, no
            alcohol. Slightly mysterious. Definitely intriguing. By the third
            meeting, Palina blindfolded Lukas, put him in a taxi, and took him
            to a brunch-in-the-dark experience. Eating, talking, and getting to
            know each other without seeing anything. Then the chapters followed
            naturally: the Open Tennis Final at Stadthalle, hiking at Rax, a
            long cinema evening, and Lukas cooking dinner at his place.
            <br />
            <br />
            And then came date eight - Lukas’ birthday. Palina invited him over.
            After seven “not-dates” they finally first kissed. At that point,
            there was no debate left. It was definitely a date. And the
            beginning of something much bigger than either of us expected.
          </p>
        </div>

        <div
          className={`relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:pt-0 lg:pl-10`}
        >
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <div className="font-display text-4xl font-light tracking-wide md:text-5xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
