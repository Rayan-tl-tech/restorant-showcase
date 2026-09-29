import { useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ContactHero from "./components/ContactHero";
import ContactSection from "./components/ContactSection";
import MapPlaceholder from "./components/MapPlaceholder";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact & Reservations | Maison Ember — Restaurant Concept";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Plan your visit and connect with Maison Ember. View enquiry details, reservation interfaces, and location information."
      );
    }
  }, []);

  return (
    <main className="bg-[#f4f1ea] min-h-screen text-[#1a1a1a] selection:bg-[#a85a3a] selection:text-white">
      <Navbar theme="dark" activeLink="Contact" />
      <ContactHero />
      <ContactSection />
      <MapPlaceholder />
      <Footer />
    </main>
  );
}
