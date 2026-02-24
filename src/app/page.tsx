import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";
import { Features } from "@/components/blocks/features";
import { Hero } from "@/components/blocks/hero";
import { VerticalTimeline } from "@/components/blocks/vertical-timeline";

export default function Home() {
  return (
    <>
      <Background className="via-muted to-muted/80">
        <Hero />
        <VerticalTimeline />
        
        <Features />
        {/* <ResourceAllocation /> */}
      </Background>
      <Background variant="bottom">
        {/* <Pricing /> */}
        <FAQ />
      </Background>
    </>
  );
}
