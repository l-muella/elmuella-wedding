import Image from "next/image";

const planners = [
  {
    name: "Asunta",
    company: "Lead Planner",
    image: "/wedding-planners/asunta.jpg",
  },
  {
    name: "Irene",
    company: "Assistant Planner",
    image: "/wedding-planners/irene.jpg",
  },
  {
    name: "Maria",
    company: "Coordinator",
    image: "/wedding-planners/maria.jpg",
  },
];

export function PlannerFaces() {
  return (
    <section className="container max-w-5xl py-12">
      {/* Planners Section */}
      <h3 className="text-foreground text-4xl font-medium tracking-wide mb-8 text-center">
        Wedding Planners
      </h3>
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {planners.map((planner) => (
          <div key={planner.name} className="text-center">
            <Image
              src={planner.image}
              alt={planner.name}
              width={150}
              height={150}
              className="object-cover mx-auto rounded-full"
            />
            <h3 className="mt-3 font-semibold">{planner.name}</h3>
            <p className="text-muted-foreground">{planner.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
