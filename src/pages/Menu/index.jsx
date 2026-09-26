import { useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import MenuHero from "./components/MenuHero";
import MenuGrid from "./components/MenuGrid";

export default function Menu() {
  useEffect(() => {
    document.title = "Seasonal Menu | Maison Ember — Restaurant Concept";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore the seasonal menu demonstration for Maison Ember, showcasing appetizers, seafood, hearth-roasted plates, and desserts."
      );
    }
  }, []);

  return (
    <main className="bg-[#f4f1ea] min-h-screen text-[#1a1a1a] selection:bg-[#a85a3a] selection:text-white">
      <Navbar theme="dark" activeLink="Menu" />
      <MenuHero />
      <MenuGrid />
      <Footer />
    </main>
  );
}
