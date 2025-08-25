import Hero from "@/components/fragments/Hero";
import About from "@/components/fragments/About";
import Experiences from "@/components/fragments/Experiences";
import Skills from "@/components/fragments/Skills";
import Certificates from "@/components/fragments/Certificates";
import Education from "@/components/fragments/Education";
import Contact from "@/components/fragments/Contact";
import FloatingNav from "@/components/fragments/floating-nav";

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <FloatingNav />
      <Hero />
      <About />
      <Experiences />
      <Skills />
      <Certificates />
      <Education />
      <Contact />
    </main>
  );
}
