"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

const categories = [
  {
    title: "Location & Travel",
    questions: [
      {
        question: "Where will the wedding take place?",
        answer:
          "The wedding ceremony will take place at Iglesia del Santo Ángel, and the reception will be held at Villa Luisa in beautiful Seville, Spain.\n\nChurch address: Calle Rioja, 23, Casco Antiguo, 41001 Seville\n\nVilla Luisa address: Av. Manuel Siurot, 1, 41013 Seville",
      },
      {
        question: "How do I get to Seville?",
        answer:
          "Seville has an international airport (SVQ) with connections across Europe. You can also take a high-speed train (AVE) from Madrid or rent a car from Málaga.",
      },
    ],
  },
  {
    title: "Schedule & Timeline",
    questions: [
      {
        question: "What time should I arrive?",
        answer:
          "The Get Together will take place on Sunday, September 27th, 2026 at 6:00 PM.\n\nThe wedding ceremony begins at 5:00 PM on Monday, September 28th, 2026.\n\nWe kindly recommend arriving by 4:45 PM to allow time to be seated.",
      },
      {
        question: "How long will the celebration last?",
        answer:
          "The celebration will continue until 3:00 AM.\n\nCeremony: 5:00-5:45 PM\nCocktail: 6:15-8:00 PM\nGroup picture: 7:30 PM\nDinner: 8:00-10:30 PM\nCake cutting: 10:00 PM\nFirst Dance: 10:30 PM\nParty: 10:30 PM-3:00 AM",
      },
      {
        question: "Is there a welcome event?",
        answer:
          "Yes! We're hosting a Get Together on Sunday, September 27th at 3:00 PM at Rooftop Terrace 1912 of Mercer Plaza Sevilla.",
      },
    ],
  },
  {
    title: "Food & Drinks",
    questions: [
      {
        question: "Do I need to select my meal in advance?",
        answer:
          "Yes, please select your menu preference by visiting the Menu section on our website at www.elmuella.wedding before May 1st, 2026.",
      },
      {
        question: "Can you accommodate dietary restrictions?",
        answer:
          "Absolutely! Please indicate any dietary restrictions or allergies when selecting your menu. Our caterer can accommodate vegetarian, vegan, gluten-free, and other dietary needs.",
      },
    ],
  },
  {
    title: "Dress Code & Gifts",
    questions: [
      {
        question: "What is the dress code?",
        answer:
          "Sunday Get Together: Mediterranean Chic\nWedding Ceremony & Dinner: Black Tie",
      },
      {
        question: "Are gifts expected?",
        answer:
          "Your presence is the greatest gift. 🤍 However, if you wish to honor us with a gift, make a contribution to our dream honeymoon.",
      },
    ],
  },
  {
    title: "Discover Seville",
    questions: [
      {
        question: "What should I see in Seville and the surroundings?",
        answer:
          "In Seville:\n\nReal Alcázar of Seville - A breathtaking royal palace with magnificent gardens.\nSeville Cathedral & La Giralda - One of the largest Gothic cathedrals in the world. Climb La Giralda for panoramic views.\nPlaza de España - Iconic, romantic, and perfect for a sunset stroll.\nBarrio Santa Cruz - The old Jewish quarter with charming narrow streets and hidden courtyards.\nMetropol Parasol (Las Setas) - Modern architecture with beautiful rooftop views over the city.\n\nPerfect day trips or short stays:\n\nGranada - Home to the spectacular Alhambra Palace and views of the Sierra Nevada (approx. 2.5-3 hours by car).\nCórdoba - Famous for its UNESCO-listed Mosque-Cathedral La Mezquita (approx. 45 minutes by high-speed train).\nRonda - Dramatic cliffs and breathtaking scenery.\nCádiz - A charming coastal town with beautiful beaches.\nJerez de la Frontera - Known for sherry wine and Andalusian horses.\n\nWe highly recommend booking Alhambra tickets in advance if you plan to visit Granada.",
      },
      {
        question: "Where are the best places to eat in Seville?",
        answer:
          "Seville is a paradise for food lovers. Here are some of our favorite spots:\n\nTraditional & Tapas\n\nEl Rinconcillo - The oldest tapas bar in Seville\nEl Librero Tapas Y Quesos - Authentic Andalusian atmosphere\nBodega Santa Cruz (Las Columnas) - Lively and local\nBar Dos de Mayo - Charming local spot with great tapas\n\nModern & Fine Dining\n\nAbantal - Michelin-starred Andalusian cuisine\nCañabota - Exceptional seafood\nSobretablas - Creative Andalusian fine dining\nL A T I E N D A La Azotea Tapas - Creative tapas with a modern twist\n\nRooftop & Romantic Spots\n\nLa Terraza del EME - Cathedral views\nPura Vida Rooftop Bar - Relaxed boho vibe, rooftop pool\nMercer Plaza Sevilla - Top quality rooftop, stylish, tranquil\nRío Grande Sevilla - One of the nicest looking restaurants\n\nWe recommend making reservations in advance.",
      },
    ],
  },
  {
    title: "Other Details",
    questions: [
      {
        question: "Will there be transportation?",
        answer:
          "Yes, shuttle buses will be provided between the church and Villa Luisa.",
      },
      {
        question: "Who do I contact with questions?",
        answer:
          "You can definitely write to us directly.\n\nFor wedding surprises or speech coordination, please reach out to our wedding planners through the Wedding Planners section.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-20 lg:py-20", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <FadeIn className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-4xl font-light tracking-tight md:text-4xl lg:text-5xl">
                Any Questions?
              </h1>
            ) : (
              <h2 className="text-4xl font-light tracking-tight md:text-4xl lg:text-5xl">
                Any Questions?
              </h2>
            )}
            <p className="text-muted-foreground max-w-md text-xl leading-snug lg:mx-auto">
              To make things easier, we’ve gathered answers to the most common
              questions right here.
            </p>
          </FadeIn>

          <StaggerChildren staggerDelay={0.1} className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <StaggerItem key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4 text-xl font-bold">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger className="text-lg font-medium">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base whitespace-pre-line">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
};
