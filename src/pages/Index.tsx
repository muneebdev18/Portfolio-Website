import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import SkillsNew from "@/components/SkillsNew";
import Lenis from 'lenis'

const Index = () => {
  const lenis = new Lenis({
    autoRaf: true,
  });
  lenis.on('scroll', (e) => {
    console.log(e);
  });

  // Second Option for Scrolling Effect
//   const lenis = new Lenis();
// // Use requestAnimationFrame to continuously update the scroll
// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        {/* <Skills /> */}
        <SkillsNew/>
        <Contact />
      </main>
      <Footer />
      <a
      href="https://wa.me/923062953623"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.6)] 
      hover:scale-110 hover:shadow-[0_0_30px_rgba(34,197,94,0.8)] 
      transition-all duration-700 ease-in-out flex items-center justify-center 
      animate-[float_3s_ease-in-out_infinite] z-50"
    >
      <FaWhatsapp size={28} />
    </a>
    </div>
  );
};

export default Index;
