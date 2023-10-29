import Header from "@src/components/Header/Header";
import TerminalUI from "@src/components/TerminalUI/TerminalUI";
import CodeQuote from "@src/components/Typographics/CodeQuote";
import ContactPage from "@src/components/Contact/contact";
import Projects from "@src/components/Project/Projects";

export default function Home() {
  return (
    <>
      <div className="flex items-center min-h-screen -translate-y-10">
        <Header />
      </div>
      <div id="aboutme" className="lg:mb-32">
        <CodeQuote />
      </div>
      <TerminalUI />
      <Projects />
      <ContactPage />
    </>
  );
}
