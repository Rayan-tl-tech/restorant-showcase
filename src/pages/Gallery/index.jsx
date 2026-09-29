import { useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import GalleryHero from "./components/GalleryHero";
import GalleryIntro from "./components/GalleryIntro";
import GalleryGrid from "./components/GalleryGrid";

export default function Gallery() {
  useEffect(() => {
    document.title = "Visual Journal & Gallery | Maison Ember — Restaurant Concept";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore the curated visual gallery for Maison Ember, showcasing art direction across culinary dishes, dining atmosphere, and kitchen craft."
      );
    }
  }, []);

  return (
    <main className="bg-[#f4f1ea] min-h-screen text-[#1a1a1a] selection:bg-[#a85a3a] selection:text-white">
      <Navbar theme="dark" activeLink="Gallery" />
      <GalleryHero />
      <GalleryIntro />
      <GalleryGrid />
      <Footer />
    </main>
  );
}
