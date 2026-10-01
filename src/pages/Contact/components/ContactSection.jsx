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
  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success"

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    // Simulated 600ms submission transition
    setTimeout(() => {
      setStatus("success");
    }, 600);
  };

  const handleReset = () => {
    setStatus("idle");
    setFormData({
      name: "",
      email: "",
      date: "",
      partySize: "",
      notes: "",
    });
  };

  return (
    <section id="contact" className="bg-[#f4f1ea] py-24 lg:py-36 border-t border-[#1a1a1a]/10 scroll-mt-20">
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
                The fields below are interactive demonstration placeholders showcasing a bespoke restaurant enquiry flow.
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
            id="reservation-enquiry"
          >
            <h3
              className="text-[#1a1a1a] text-4xl md:text-5xl mb-10 font-light font-serif"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Reservation enquiry
            </h3>

            {status === "success" ? (
              <div className="py-6 space-y-6 animate-fadeIn">
                <div className="w-12 h-12 rounded-full border border-[#a85a3a] flex items-center justify-center text-[#a85a3a] mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span
                  className="text-[#a85a3a] text-[11px] font-semibold uppercase tracking-[0.25em] font-sans block"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Enquiry Received
                </span>
                <h4
                  className="text-[#1a1a1a] text-3xl font-light font-serif"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Thank you{formData.name ? `, ${formData.name}` : ""}.
                </h4>
                <p className="text-[#1a1a1a]/70 text-sm sm:text-base leading-relaxed font-sans max-w-md">
                  In a live restaurant website, your reservation request for{" "}
                  <strong className="text-[#1a1a1a] font-medium">{formData.date || "your selected date"}</strong>{" "}
                  {formData.partySize ? `(${formData.partySize} guests)` : ""} would be immediately transmitted to the restaurant's guest concierge.
                </p>
                <div className="pt-4 border-t border-[#1a1a1a]/15">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#a85a3a] hover:text-[#8f4a2e] transition-colors font-sans py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a85a3a]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <span>Submit Another Demo Enquiry</span>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 12h16m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
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
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full bg-transparent border-b border-[#1a1a1a]/20 pb-3 text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 focus:outline-none focus:border-[#a85a3a] focus-visible:border-[#a85a3a] transition-colors font-sans"
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
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full bg-transparent border-b border-[#1a1a1a]/20 pb-3 text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 focus:outline-none focus:border-[#a85a3a] focus-visible:border-[#a85a3a] transition-colors font-sans"
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
                      className="w-full bg-transparent border-b border-[#1a1a1a]/20 pb-3 text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 focus:outline-none focus:border-[#a85a3a] focus-visible:border-[#a85a3a] transition-colors font-sans"
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
                      className="w-full bg-transparent border-b border-[#1a1a1a]/20 pb-3 text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 focus:outline-none focus:border-[#a85a3a] focus-visible:border-[#a85a3a] transition-colors font-sans"
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
                    className="w-full bg-transparent border-b border-[#1a1a1a]/20 pb-3 text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 focus:outline-none focus:border-[#a85a3a] focus-visible:border-[#a85a3a] transition-colors resize-none font-sans"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                <div className="pt-2">
                  <PrimaryButton
                    variant="terracotta"
                    type="submit"
                    disabled={status === "submitting"}
                    className={status === "submitting" ? "opacity-80 cursor-wait" : ""}
                  >
                    {status === "submitting" ? (
                      <span className="inline-flex items-center gap-2">
                        <svg className="animate-spin h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Processing Enquiry...</span>
                      </span>
                    ) : (
                      "Send Enquiry"
                    )}
                  </PrimaryButton>
                </div>

                <div className="border-l-2 border-[#a85a3a] bg-[#a85a3a]/5 px-6 py-4">
                  <p className="text-[#a85a3a] text-sm font-sans">
                    Demo form only — no information will be submitted.
                  </p>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
