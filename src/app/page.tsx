import CodeQuote from "@/components/Typographics/CodeQuote";
import dynamic from "next/dynamic";
import LoadSpinner from "@/components/loadspinner";
import { HeroSection } from "@/components/Header/Hero";
import Project1 from "@/components/Projects/project1";

const DynamicProject = dynamic(() => import("@/components/Project/Projects"), {
  loading: () => <LoadSpinner />,
});
const DynamicMobileProject = dynamic(
  () => import("@/components/Project/MobileView"),
  { loading: () => <LoadSpinner /> }
);
const DynamicContactPage = dynamic(
  () => import("@/components/Contact/contact"),
  { loading: () => <LoadSpinner /> }
);

export default function Home() {
  return (
    <>
      <div className="w-full lg:min-h-screen flex justify-center items-center">
        <HeroSection />
      </div>
      <div id="aboutme" className="mt-10 mb-6 lg:mb-32 mx-auto">
        <CodeQuote />
      </div>
      <div id="projects" className="w-full lg:mb-32">
        <DynamicProject />
        <DynamicMobileProject />
        {/* <Project1 /> */}
      </div>
      <div className="w-full lg:mb-32">
        <DynamicContactPage />
      </div>
    </>
  );
}
