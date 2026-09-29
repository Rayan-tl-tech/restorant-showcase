import { useState } from "react";
import SectionLabel from "../../../components/common/SectionLabel";
import PrimaryButton from "../../../components/common/PrimaryButton";
import Reveal from "../../../components/common/Reveal";
import { CONTACT_INFO } from "../data/contactData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    partySize: "",
    notes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="reservation-enquiry" className="bg-[#f4f1ea] py-24 lg:py-36 scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left column */}
          <div>
            <Reveal animation="fade-up" delay={100}>
              <SectionLabel className="text-[#1a1a1a]/70 mb-8">
                Get in Touch
              </SectionLabel>
              <h2
                className="text-[#1a1a1a] text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.05] mb-8 font-light font-serif"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                We'd be<br />
                delighted to hear<br />
                from you.
              </h2>
              <p className="text-[#1a1a1a]/70 text-base md:text-lg leading-relaxed mb-16 max-w-md font-sans">
                The fields below are non-functional visual placeholders for this portfolio
                demonstration.
              </p>
            </Reveal>

            <div className="space-y-0">
              {CONTACT_INFO.map((item, i) => (
                <Reveal
                  key={item.label}
                  animation="fade-up"
                  delay={150 + i * 100}
                  className={`py-8 ${i < CONTACT_INFO.length - 1 ? "border-b border-[#1a1a1a]/15" : ""}`}
                >
                  <div className="grid grid-cols-3 gap-6 items-start">
                    <span
                      className="text-[#a85a3a] text-[11px] font-medium uppercase font-sans"
                      style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.2em" }}
                    >
                      {item.label}
                    </span>
                    <div className="col-span-2">
                      <h3
                        className="text-[#1a1a1a] text-2xl md:text-3xl mb-2 font-light font-serif"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-[#1a1a1a]/60 text-sm font-sans">{item.subtitle}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right column — form card */}
          <Reveal
            animation="fade-scale"
            delay={180}
            className="bg-white p-10 lg:p-14 shadow-sm scroll-mt-24"
            id="reservation-form"
          >
            <h3
              className="text-[#1a1a1a] text-4xl md:text-5xl mb-10 font-light font-serif"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Reservation enquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-[#1a1a1a]/60 text-[11px] font-medium uppercase block mb-3 font-sans"
                    style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.15em" }}
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-b border-[#1a1a1a]/20 pb-3 text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 focus:outline-none focus:border-[#a85a3a] transition-colors font-sans"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-[#1a1a1a]/60 text-[11px] font-medium uppercase block mb-3 font-sans"
                    style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.15em" }}
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full bg-transparent border-b border-[#1a1a1a]/20 pb-3 text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 focus:outline-none focus:border-[#a85a3a] transition-colors font-sans"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label
                    htmlFor="contact-date"
                    className="text-[#1a1a1a]/60 text-[11px] font-medium uppercase block mb-3 font-sans"
                    style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.15em" }}
                  >
                    Preferred Date
                  </label>
                  <input
                    id="contact-date"
                    type="text"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    placeholder="Select a date"
                    className="w-full bg-transparent border-b border-[#1a1a1a]/20 pb-3 text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 focus:outline-none focus:border-[#a85a3a] transition-colors font-sans"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-guests"
                    className="text-[#1a1a1a]/60 text-[11px] font-medium uppercase block mb-3 font-sans"
                    style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.15em" }}
                  >
                    Party Size
                  </label>
                  <input
                    id="contact-guests"
                    type="text"
                    value={formData.partySize}
                    onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                    placeholder="Number of guests"
                    className="w-full bg-transparent border-b border-[#1a1a1a]/20 pb-3 text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 focus:outline-none focus:border-[#a85a3a] transition-colors font-sans"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-notes"
                  className="text-[#1a1a1a]/60 text-[11px] font-medium uppercase block mb-3 font-sans"
                  style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.15em" }}
                >
                  A Note for the Restaurant
                </label>
                <textarea
                  id="contact-notes"
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us how we can help"
                  className="w-full bg-transparent border-b border-[#1a1a1a]/20 pb-3 text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 focus:outline-none focus:border-[#a85a3a] transition-colors resize-none font-sans"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              <div className="pt-2">
                <PrimaryButton variant="terracotta" type="submit">
                  Send Enquiry
                </PrimaryButton>
              </div>

              <div className="border-l-2 border-[#a85a3a] bg-[#a85a3a]/5 px-6 py-4">
                <p className="text-[#a85a3a] text-sm font-sans">
                  Demo form only — no information will be submitted.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
