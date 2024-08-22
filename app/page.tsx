import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <div className="lg:mt-48">
        <div className="[--color:#3366ff] pointer-events-none relative -z-[2] mx-auto h-[30rem] overflow-hidden [mask-image:radial-gradient(ellipse_at_center_center,#000,transparent_80%)] my-[-17.8rem] before:absolute before:inset-0 before:h-full before:w-full before:opacity-50 before:[background-image:radial-gradient(circle_at_bottom_center,var(--color),transparent_70%)] after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t after:border-[hsl(var(--border))] after:bg-background" />
      </div>
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
