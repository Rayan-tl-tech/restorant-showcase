import { useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import AboutHero from "./components/AboutHero";
import Philosophy from "./components/Philosophy";
import KitchenVisual from "./components/KitchenVisual";
import ChefTeam from "./components/ChefTeam";
import ImagePair from "./components/ImagePair";
import Values from "./components/Values";
import ReservationCTA from "../../components/common/ReservationCTA";

export default function About() {
  useEffect(() => {
    document.title = "About Our Concept | Maison Ember — Restaurant Concept";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn about the philosophy, people, and culinary storytelling behind the Maison Ember restaurant website concept."
      );
    }
  }, []);

  return (
    <main className="bg-[#f4f1ea] min-h-screen text-[#1a1a1a] selection:bg-[#a85a3a] selection:text-white">
      <Navbar theme="dark" activeLink="About" />
      <AboutHero />
      <Philosophy />
      <KitchenVisual />
      <ChefTeam />
      <ImagePair />
      <Values />
      <ReservationCTA
        bgImage="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=80"
        label="Begin the Evening"
        title="Your table is waiting."
        description="Demo call-to-action — ready to connect to a future client's reservation flow."
        buttonText="Reservation Enquiry"
      />
      <Footer />
    </main>
  );
}
