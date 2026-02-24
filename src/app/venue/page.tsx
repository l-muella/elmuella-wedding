import { Background } from "@/components/background";
import Venue from "@/components/blocks/venue";
import { VenueHero } from "@/components/blocks/venue-hero";

export default function VenuePage() {
  return (
    <Background>
      <div className="py-28 lg:py-12 lg:pt-44">
        <VenueHero />
        <Venue />
      </div>
    </Background>
  );
}
