import About from "@/components/about";
//import Contact from "@/components/contact";
import Design from "@/components/Design";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <About />
      <SectionDivider />
      <Projects/>
      <Design/>
      <Skills />
     
     
    </main>
  );
}