import {
  Hero,
  PlatformOverview,
  FrameworkShowcase,
  HowItWorks,
  SolutionsBySize,
  Integrations,
  CTA,
} from "../components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <PlatformOverview />
      <HowItWorks />
      <FrameworkShowcase />
      <SolutionsBySize />
      <Integrations />
      <CTA />
    </>
  );
}
