import CodeQuote from "@/components/Typographics/CodeQuote";
import dynamic from "next/dynamic";
import LoadSpinner from "@/components/loadspinner";
import { HeroSection } from "@/components/Header/Hero";
import ProjectSection from "@src/components/Project/project-section";
import GithubSection from "@src/components/Github/github-section";
import FeaturedSection from "@/components/Projects/featured-section";

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
    <div  className="w-full h-full flex flex-col justify-center items-center gap-12 md:gap-16 lg:gap-24">
        <HeroSection />
        <CodeQuote />
        <ProjectSection />
        <GithubSection />
        <DynamicTestimonial />
        <DynamicContactPage />
    </div>
  );
}
