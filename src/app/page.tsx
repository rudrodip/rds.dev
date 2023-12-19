import CodeQuote from "@src/components/Typographics/CodeQuote";
import dynamic from "next/dynamic";
import LoadSpinner from "@src/components/loadspinner";
import { HeroSection } from "@src/components/Header/Hero";
import { TechStack } from "@src/components/TechStack/TechStack";

const DynamicTerminalUI = dynamic(
  () => import("@src/components/TerminalUI/TerminalUI"),
  { loading: () => <LoadSpinner /> }
);
const DynamicProject = dynamic(
  () => import("@src/components/Project/Projects"),
  { loading: () => <LoadSpinner /> }
);
const DynamicMobileProject = dynamic(
  () => import("@src/components/Project/MobileView"),
  { loading: () => <LoadSpinner /> }
);
const DynamicContactPage = dynamic(
  () => import("@src/components/Contact/contact"),
  { loading: () => <LoadSpinner /> }
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <div id="aboutme" className="mt-10 mb-6 lg:mb-32">
        <CodeQuote />
      </div>
      <TechStack />
      <div className="lg:mb-32">
        <DynamicTerminalUI />
      </div>
      <div id="projects" className="w-full lg:mb-32">
        <DynamicProject />
        <DynamicMobileProject />
      </div>
      <div className="w-full lg:mb-32">
        <DynamicContactPage />
      </div>
    </>
  );
}
