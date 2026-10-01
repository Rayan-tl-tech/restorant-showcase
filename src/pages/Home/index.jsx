import { useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import HomeHero from "./components/HomeHero";
import MenuSection from "../Menu/components/MenuSection";
import ContactSection from "../Contact/components/ContactSection";
import MapPlaceholder from "../Contact/components/MapPlaceholder";

export default function Home() {
  useEffect(() => {
    document.title = "Maison Ember — Restaurant Concept Demo";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Maison Ember is a cinematic restaurant website demo showcasing seasonal gastronomy, hearth-fired cooking, and modern culinary design."
      );
    }

    // Smooth scroll if URL loaded with hash (e.g. /#menu, /#contact)
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  }, []);

  return (
    <main className="bg-[#f4f1ea] min-h-screen text-[#1a1a1a] selection:bg-[#a85a3a] selection:text-white">
      <Navbar />
      <HomeHero />
      <MenuSection />
      <ContactSection />
      <MapPlaceholder />
      <Footer />
    </main>
  );
}
