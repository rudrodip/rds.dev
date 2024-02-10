import CodeQuote from "@/components/Typographics/CodeQuote";
import dynamic from "next/dynamic";
import LoadSpinner from "@/components/loadspinner";
import { HeroSection } from "@/components/Header/Hero";

const DynamicContactPage = dynamic(
  () => import("@/components/Contact/contact"),
  { loading: () => <LoadSpinner /> }
);

const DynamicFeaturedSection = dynamic(
  () => import("@/components/Projects/featured-section"),
  { loading: () => <LoadSpinner /> }
);

const DynamicStartupSection = dynamic(
  () => import("@/components/Projects/startup-section"),
  { loading: () => <LoadSpinner /> }
);

const DynamicGenAISection = dynamic(
  () => import("@/components/Projects/genai-section"),
  { loading: () => <LoadSpinner /> }
);

const DynamicRecentProjects = dynamic(
  () => import("@/components/Projects/recent-projects"),
  { loading: () => <LoadSpinner /> }
);

const DynamicTestimonial = dynamic(() => import("@/components/testimonial"), {
  loading: () => <LoadSpinner />,
});

export default function Home() {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto lg:min-h-screen flex justify-center items-center">
        <HeroSection />
      </div>
      <div id="aboutme" className="max-w-7xl mt-10 mb-6 lg:mb-32 mx-auto">
        <CodeQuote />
      </div>
      <div id="projects" className="w-full">
        <DynamicFeaturedSection />
        <DynamicStartupSection />
        <DynamicGenAISection />
        <DynamicRecentProjects />
        {/* <DynamicTestimonial /> */}
      </div>
      <div className="w-full max-w-7xl mx-auto mt-16 lg:mt-32 lg:mb-32">
        <DynamicContactPage />
      </div>
    </>
  );
}
