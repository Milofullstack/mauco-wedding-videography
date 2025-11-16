import Hero from "@/components/Hero";
import About from "@/components/About";
import View from "@/components/View";
import VerticalContent from "@/components/verticalContent";
import Contact from "@/components/Contact"
import Video from "@/components/Video";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <View/>
      <VerticalContent />
      <Video />
      <Contact />
      <Footer />
    </main>
  );
}
