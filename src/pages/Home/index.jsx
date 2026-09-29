import { useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ReservationCTA from "../../components/common/ReservationCTA";
import HomeHero from "./components/HomeHero";
import ConceptIntro from "./components/ConceptIntro";
import FeaturedPlates from "./components/FeaturedPlates";
import Story from "./components/Story";
import Approach from "./components/Approach";
import HomeGallery from "./components/HomeGallery";
import { HOME_IMAGES } from "./data/homeData";

export default function Home() {
  useEffect(() => {
    document.title = "Maison Ember — Restaurant Concept Demo";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Maison Ember is a cinematic restaurant website demo showcasing seasonal gastronomy, atmospheric dining, and modern culinary design."
      );
    }
  }, []);

  return (
    <main className="bg-[#f4f1ea] min-h-screen text-[#1a1a1a] selection:bg-[#a85a3a] selection:text-white">
      <Navbar theme="dark" activeLink="Home" />
      <HomeHero />
      <ConceptIntro />
      <FeaturedPlates />
      <Story />
      <Approach />
      <HomeGallery />
      <ReservationCTA bgImage={HOME_IMAGES.ctaBg} />
      <Footer />
    </main>
  );
}
