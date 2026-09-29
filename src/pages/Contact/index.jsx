import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ContactHero from "./components/ContactHero";
import ContactSection from "./components/ContactSection";
import MapPlaceholder from "./components/MapPlaceholder";

export default function Contact() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Contact & Reservations | Maison Ember — Restaurant Concept";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Plan your visit and connect with Maison Ember. View enquiry details, reservation interfaces, and location information."
      );
    }

    if (location.hash) {
      const hash = location.hash.replace("#", "");
      const targetEl =
        (window.innerWidth < 1024
          ? document.getElementById("reservation-form")
          : document.getElementById(hash)) ||
        document.getElementById(hash) ||
        document.getElementById("reservation-form");

      if (targetEl) {
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }, 120);
      }
    }
  }, [location.hash]);

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
