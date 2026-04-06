"use client";

import { ExternalLink, Mail, Phone, MapPin } from "lucide-react";

import { ScaleIn, StaggerChildren, StaggerItem } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const hotels = [
  {
    name: "Mercer Placer Sevilla",
    address: "Pl. de S. Francisco, 11-12, 41004 Sevilla",
    distance: "5 min walk to the church",
    email: "reservations@mercerhoteles.com",
    phone: "+34 954 22 12 34",
    website: "https://www.mercerhoteles.com/en/mercer-plaza-sevilla/",
    features: [
      "🎉 Pre party on the rooftop terrace",
      "💑 Wedding couple stays here too",
    ],
    priceRange: "Boutique Luxury",
    promoCode: "P&LWED",
    promoPercentage: "-10%",
  },
  {
    name: "Legado Magdalena Hotel",
    address: "Calle San Pablo, 22, 41001 Sevilla",
    distance: "4 min walk to the church",
    email: "reservas@legadomagdalena.com",
    phone: "+34 954 22 08 60",
    website: "https://www.booking.com/hotel/es/legado-magdalena.en-gb.html",
    features: ["📍 600m distance to the pre party", "💰 Cheaper option"],
    priceRange: "Premium",
    promoCode: "PALINAANDLUKAS",
    promoPercentage: "-17%",
  },
  {
    name: "Hotel Don Ramón",
    address: "Calle Trajano, 2, 41001 Sevilla",
    distance: "5 min walk to the church",
    email: "reservas@hoteldonramon.com",
    phone: "+34 954 32 81 50",
    website: "https://www.hoteldonramon.com/",
    features: ["📍 700m distance to the pre party", "🏆 World travel award"],
    priceRange: "Premium",
    hidePrice: true,
  },
  {
    name: "Hotel Boutique Casa de Colón",
    address: "Calle Hernando Colón, 3, 41001 Sevilla",
    distance: "6 min walk to the church",
    email: "reservas@hotelcasadecolon.com",
    phone: "+34 955 11 78 28",
    website: "https://hotelcasadecolon.com/index.php/en/",
    features: ["📍 Next door to the pre party", "💰 Cheapest option"],
    priceRange: "Premium",
    hidePrice: true,
  },
];

const Accommodation = () => {
  return (
    <section className="container mt-10 max-w-7xl md:mt-14 lg:mt-20">
      <StaggerChildren
        staggerDelay={0.1}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {hotels.map((hotel) => (
          <StaggerItem key={hotel.name}>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{hotel.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4">
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="text-primary-foreground mt-0.5 size-4 shrink-0" />
                  <div className="flex-1">
                    <p className="font-medium">{hotel.distance}</p>
                    <p className="text-muted-foreground">{hotel.address}</p>
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-sm font-medium">Features:</p>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    {hotel.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary-foreground">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="text-primary-foreground size-4 shrink-0" />
                    <a
                      href={`mailto:${hotel.email}`}
                      className="hover:text-primary truncate"
                    >
                      {hotel.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="text-primary-foreground size-4 shrink-0" />
                    <a
                      href={`tel:${hotel.phone.replace(/\s/g, "")}`}
                      className="hover:text-primary"
                    >
                      {hotel.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  {hotel.promoCode ? (
                    <div className="flex flex-col">
                      <span className="text-muted-foreground text-sm font-semibold">
                        Promo Code
                        {hotel.promoPercentage
                          ? ` (${hotel.promoPercentage})`
                          : ""}
                        :
                      </span>
                      <span className="text-foreground text-sm font-bold underline">
                        {hotel.promoCode}
                      </span>
                    </div>
                  ) : hotel.hidePrice ? (
                    <span className="text-muted-foreground h-[2.8em] text-sm"></span>
                  ) : (
                    <span className="text-muted-foreground text-sm">
                      Price: {hotel.priceRange}
                    </span>
                  )}
                  <Button size="sm" asChild>
                    <a
                      href={hotel.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-1"
                    >
                      Book Now
                      <ExternalLink className="size-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <ScaleIn delay={0.5}>
        <div className="bg-muted/30 mt-12 rounded-lg border p-6 text-center md:p-8">
          <h3 className="text-2xl font-light md:text-3xl">
            Booking Recommendations
          </h3>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
            We recommend booking your accommodation as early as possible.
            September is a popular time to visit Seville, and hotels tend to
            fill up quickly. When making your reservation, please mention the
            dedicated promo code provided above to receive a discount.
          </p>
        </div>
      </ScaleIn>
    </section>
  );
};

export default Accommodation;
