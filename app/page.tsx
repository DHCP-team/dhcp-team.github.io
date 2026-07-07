import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tracks from "@/components/Tracks";
import Writeups from "@/components/Writeups";
import Achievements from "@/components/Achievements";
import Members from "@/components/Members";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Tracks />
        <Writeups />
        <Achievements />
        <Members />
        <Contact />
      </main>
      <Footer />
    </>
  );
}