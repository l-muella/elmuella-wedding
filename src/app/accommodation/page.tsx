import { Background } from "@/components/background";
import Accommodation from "@/components/blocks/accommodation";
import { AccommodationHero } from "@/components/blocks/accommodation-hero";

export default function AccommodationPage() {
  return (
    <Background>
      <div className="py-28 lg:py-12 lg:pt-44">
        <AccommodationHero />
        <Accommodation />
      </div>
    </Background>
  );
}
