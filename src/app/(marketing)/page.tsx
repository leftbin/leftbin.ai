import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { ProofPoints } from "@/components/sections/ProofPoints";
import { WhyUs } from "@/components/sections/WhyUs";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <HowWeWork />
      <ProofPoints />
      <WhyUs />
      <FinalCTA />
    </>
  );
}
