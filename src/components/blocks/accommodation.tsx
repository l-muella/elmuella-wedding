import { ExternalLink, Mail, Phone, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const hotels = [
  {
    name: "Hotel Alfonso XIII",
    description: "A Luxury Collection Hotel",
    address: "Calle San Fernando, 2, 41004 Sevilla",
    distance: "1.2 km from Villa Luisa",
    email: "reservation.00088@luxurycollection.com",
    phone: "+34 954 91 70 00",
    website:
      "https://www.marriott.com/en-us/hotels/svqlc-hotel-alfonso-xiii-a-luxury-collection-hotel-seville/overview/",
    features: [
      "Historic luxury hotel built in 1929",
      "Located near Plaza de España",
      "Rooftop terrace with city views",
      "Outdoor swimming pool",
      "Fine dining restaurant",
    ],
    priceRange: "Luxury",
  },
  {
    name: "AC Hotel Ciudad de Sevilla",
    description: "by Marriott",
    address: "Avenida Manuel Siurot, 25, 41013 Sevilla",
    distance: "Same street as Villa Luisa",
    email: "csevilla@ac-hotels.com",
    phone: "+34 954-230 505",
    website:
      "https://www.marriott.com/en-us/hotels/svqci-ac-hotel-ciudad-de-sevilla/overview/",
    features: [
      "On the same street as the wedding venue",
      "Rooftop terrace with garden views",
      "Modern amenities",
      "Business center",
      "Fitness center",
    ],
    priceRange: "Mid-Range to Upper",
  },
  {
    name: "NH Collection Sevilla",
    description: "Premium Hotel",
    address: "Avenida Diego Martínez Barrio, 8, 41013 Sevilla",
    distance: "1.8 km from Villa Luisa",
    email: "nhcollectionsevilla@nh-hotels.com",
    phone: "+34 954 548 500",
    website: "https://www.nh-hotels.com/hotel/nh-collection-sevilla",
    features: [
      "Modern 4-star hotel in Nervión district",
      "Outdoor swimming pool with terrace",
      "Wellness center and fitness facilities",
      "Restaurant and bar on-site",
      "Close to San Bernardo metro station",
    ],
    priceRange: "Premium",
  },
  {
    name: "Legado Magdalena Hotel",
    description: "Boutique Hotel",
    address: "Calle San Pablo, 22, 41001 Sevilla",
    distance: "2.5 km from Villa Luisa",
    email: "reservas@legadomagdalena.com",
    phone: "+34 954 22 08 60",
    website: "https://www.booking.com/hotel/es/legado-magdalena.en-gb.html",
    features: [
      "4-star boutique hotel in the heart of Seville",
      "Rooftop saltwater pool with city views",
      "Stylish modern rooms with Andalusian charm",
      "Exceptional breakfast included",
      "24-hour front desk with concierge service",
    ],
    priceRange: "Premium",
  },
];

const Accommodation = () => {
  return (
    <section className="container mt-10 max-w-7xl md:mt-14 lg:mt-20">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {hotels.map((hotel) => (
          <Card key={hotel.name} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">{hotel.name}</CardTitle>
              <CardDescription className="mt-1">
                {hotel.description}
              </CardDescription>
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
                <span className="text-muted-foreground text-sm">
                  Price: {hotel.priceRange}
                </span>
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
        ))}
      </div>

      <div className="bg-muted/30 mt-12 rounded-lg border p-6 text-center md:p-8">
        <h3 className="text-2xl font-light md:text-3xl">
          Booking Recommendations
        </h3>
        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
          We recommend booking your accommodation as early as possible.
          September is a popular time to visit Seville, and hotels tend to fill
          up quickly. When making your reservation, please mention that you are
          attending our wedding at Villa Luisa, as some hotels may offer special
          rates for our guests.
        </p>
      </div>
    </section>
  );
};

export default Accommodation;
