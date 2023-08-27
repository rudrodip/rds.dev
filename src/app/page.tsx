import Header from "@src/components/Header/Header";
import TerminalUI from "@src/components/TerminalUI/TerminalUI";
import CodeQuote from "@src/components/Typographics/CodeQuote";
import ContactPage from "@src/components/Contact/contact";
import dynamic from "next/dynamic";
import LoadSpinner from "@src/components/loadspinner";

const DynamicJourney = dynamic(
  () => import("@src/components/Journey/Journey"),
  {
    loading: () => <LoadSpinner />,
  }
);
export default function Home() {
  return (
    <>
      <div className="flex items-center min-h-screen -translate-y-10">
        <Header />
      </div>
      <div id="aboutme">
        <CodeQuote />
      </div>
      <div>
        <TerminalUI />
      </div>
      <DynamicJourney />
      <ContactPage />
    </>
  );
}
