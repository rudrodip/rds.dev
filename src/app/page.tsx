import Header from "@src/components/Header/Header";
import CodeQuote from "@src/components/Typographics/CodeQuote";
import dynamic from "next/dynamic";
import LoadSpinner from "@src/components/loadspinner";

const DynamicTerminalUI = dynamic(() => import("@src/components/TerminalUI/TerminalUI"), { loading: () => <LoadSpinner /> });
const DynamicProject = dynamic(() => import("@src/components/Project/Projects"), { loading: () => <LoadSpinner /> });
const DynamicContactPage = dynamic(() => import("@src/components/Contact/contact"), { loading: () => <LoadSpinner /> });

export default function Home() {
  return (
    <>
      <div className="flex items-center md:min-h-screen my-6 md:mt-0 lg:-translate-y-10">
        <Header />
      </div>
      <div id="aboutme" className=" mb-6 lg:mb-32">
        <CodeQuote />
      </div>
      <div className="lg:mb-32">
        <DynamicTerminalUI />
      </div>
      <div id="projects" className="w-full lg:mb-32">
        <DynamicProject />
      </div>
      <div className="lg:mb-32">
        <DynamicContactPage />
      </div>
    </>
  );
}
