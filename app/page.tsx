import Hero from "@/components/Hero";
import About from "@/components/About";
import Video from "@/components/Video";
import Service from "@/components/Service"
import VerticalContent from "@/components/verticalContent";
import Contact from "@/components/Contact"
import Parallax from "@/components/Parallax";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Video/>
      <VerticalContent />
      <Parallax />
      <Contact />
      <Footer />
    </main>
  );
}
