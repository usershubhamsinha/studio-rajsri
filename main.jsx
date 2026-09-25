import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const WHATSAPP = "919431505981";
const WEBSITE_WHATSAPP = "918210262697";
const PHONE = "9431505981";

const services = [
  {
    icon: "▣",
    title: "Photo Studio",
    text: "Passport photos, 4×6 prints and everyday photo services with simple local ordering."
  },
  {
    icon: "▤",
    title: "CSC Services",
    text: "Selected citizen and online services, handled locally with clear guidance."
  },
  {
    icon: "▧",
    title: "Photo Framing",
    text: "Popular frame sizes for family photos, certificates and memorable moments."
  },
  {
    icon: "↗",
    title: "Print & Document",
    text: "Send documents in advance on WhatsApp and collect your ready prints."
  },
  {
    icon: "◫",
    title: "Business Website",
    text: "Get a clean, modern website for your shop or business, starting from ₹2,000.",
    hot: true
  }
];

const cscServices = [
  "PAN Card Application",
  "Voter ID Enrollment",
  "Birth & Death Certificates",
  "Income & Caste Certificates",
  "Electricity Bill Payment",
  "Mobile & DTH Recharge",
  "Insurance Premium Payment",
  "Railway & Flight Booking",
  "PM Kisan & Fasal Bima"
];

const prices = [
  { name: "A4 B&W Printing", price: "₹15 first page", detail: "₹5 each additional page" },
  { name: "Phone Photo 4×6", price: "₹55 / photo", detail: "Standard 4×6 print" },
  { name: "Passport Photos", price: "₹25 / 3 pcs", detail: "6 pcs ₹40 • 11 pcs ₹60 • more on request" },
  { name: "Resume — WhatsApp", price: "₹20", detail: "Send your resume/details for preparation" },
  { name: "Resume — Hard Print", price: "₹25", detail: "Printed copy during your visit" },
  { name: "Photo Frame 4×6", price: "₹130", detail: "Ready frame" },
  { name: "Photo Frame 6×8", price: "₹230", detail: "Ready frame" },
  { name: "Photo Frame 8×10 / 8×12", price: "₹400", detail: "Popular larger frame sizes" }
];

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Icon({ children }) {
  return <span className="icon" aria-hidden="true">{children}</span>;
}

function App() {
  const [orderType, setOrderType] = useState("Printing");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const orderMessage = useMemo(() => {
    const cleanName = name.trim() || "Not provided";
    const cleanPhone = phone.trim() || "Not provided";
    const cleanDetails = details.trim() || "I will send the documents/photos on WhatsApp.";
    return `Hello Studio Rajsri, I want to place an advance ${orderType} request.\n\nName: ${cleanName}\nPhone: ${cleanPhone}\nDetails: ${cleanDetails}\n\nI will send the required files/photos here on WhatsApp.`;
  }, [name, phone, details, orderType]);

  const submitOrder = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.open(whatsappLink(orderMessage), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="site-shell">
      <header className="nav">
        <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">SR</span>
          <span>
            <strong>Studio Rajsri</strong>
            <small>Photo • CSC • Framing</small>
          </span>
        </a>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? "×" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#advance" onClick={() => setMenuOpen(false)}>Send Files</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a className="nav-cta" href={whatsappLink("Hello Studio Rajsri, I have an enquiry.")} target="_blank" rel="noreferrer">WhatsApp</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="dot"></span> Main Road, Pesham • Birni • Giridih</div>
            <h1>Local services.<br /><em>Made simple.</em></h1>
            <p className="hero-text">
              Photo studio, selected CSC services, printing and photo framing —
              with the convenience of sending your work in advance on WhatsApp.
            </p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => scrollToId("advance")}>Send Documents <span>↗</span></button>
              <button className="ghost-btn" onClick={() => scrollToId("pricing")}>View Pricing</button>
            </div>
            <div className="hero-meta">
              <span>✓ Local & convenient</span>
              <span>✓ Clear pricing</span>
              <span>✓ WhatsApp ordering</span>
            </div>
          </div>

          <div className="hero-card reveal delay">
            <div className="card-glow"></div>
            <div className="floating-note note-one"><span>01</span> Send files first</div>
            <div className="floating-note note-two"><span>02</span> We prepare them</div>
            <div className="device">
              <div className="device-top"><span>Studio Rajsri</span><i></i></div>
              <div className="device-body">
                <div className="device-sidebar">
                  <b>✦</b><span></span><span></span><span></span><span></span><span></span>
                </div>
                <div className="device-main">
                  <div className="photo-placeholder">⌁</div>
                  <div className="device-line"></div>
                  <div className="mini-lines"><i></i><i></i><i></i><i></i></div>
                </div>
                <div className="device-side">
                  <i></i><i></i><i className="bright"></i>
                </div>
              </div>
              <div className="device-bottom"><span></span><span></span><span></span></div>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div><strong>Studio Rajsri</strong><span>Serving Main Road, Pesham & nearby areas</span></div>
          <a href={`tel:${PHONE}`}>Call {PHONE} <span>↗</span></a>
        </section>

        <section id="services" className="section">
          <div className="section-heading">
            <div>
              <p className="kicker">WHAT WE DO</p>
              <h2>One place for the<br /><span>everyday stuff.</span></h2>
            </div>
            <p>From a quick passport photo to printing a document you sent from home, Studio Rajsri is designed around practical local needs.</p>
          </div>
          <div className="service-grid">
            {services.map((s, i) => (
              <article className={s.hot ? "service-card hot-service" : "service-card"} key={s.title}>
                <div className="service-number">0{i + 1}</div>
                {s.hot && <span className="hot-badge">HOT TOPIC</span>}
                <Icon>{s.icon}</Icon>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                {s.hot ? (
                  <a className="service-action" href={whatsappLink("Hello Shubham Sinha, I am interested in getting a website for my business. Please tell me about the ₹2,000 landing page option and other available options.")} target="_blank" rel="noreferrer">
                    Discuss on WhatsApp <span>↗</span>
                  </a>
                ) : (
                  <span className="arrow">↗</span>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section website-section">
          <div className="website-service-card">
            <div className="website-copy">
              <div className="hot-line"><span></span> NEW • BUSINESS WEBSITE SERVICE</div>
              <p className="kicker">FOR LOCAL SHOPS & BUSINESSES</p>
              <h2>Your business<br /><span>deserves a place online.</span></h2>
              <p>Need a simple website for your shop, studio, service or small business? Get a clean single-page website starting from <strong>₹2,000</strong>.</p>
              <div className="website-points">
                <span>✓ Single landing page</span>
                <span>✓ Mobile-friendly design</span>
                <span>✓ Modern minimalist design</span>
                <span>✓ Other features & pricing on discussion</span>
              </div>
              <a className="website-wa-btn" href={whatsappLink("Hello Shubham Sinha, I am interested in getting a website for my business. I would like to know about the ₹2,000 single landing page option and other available options/pricing.")} target="_blank" rel="noreferrer">
                Talk to Shubham on WhatsApp <span>↗</span>
              </a>
              <small>Website service inquiries: Shubham Sinha • WhatsApp 8210262697</small>
            </div>
            <div className="website-preview">
              <div className="preview-top"><span>YOUR BUSINESS</span><i></i><i></i><i></i></div>
              <div className="preview-hero"><span className="preview-label">ONLINE PRESENCE</span><strong>Simple.<br />Professional.<br /><em>Yours.</em></strong><div className="preview-button">GET STARTED ↗</div></div>
              <div className="preview-bottom"><i></i><i></i><i></i></div>
            </div>
          </div>
        </section>

        <section id="pricing" className="section pricing-section">
          <div className="section-heading compact">
            <div>
              <p className="kicker">SIMPLE PRICING</p>
              <h2>Know the price<br /><span>before you visit.</span></h2>
            </div>
            <p>Transparent starting prices for common services. For unusual sizes or quantities, just ask on WhatsApp.</p>
          </div>
          <div className="price-list">
            {prices.map((p, i) => (
              <div className="price-row" key={p.name}>
                <span className="price-index">{String(i + 1).padStart(2, "0")}</span>
                <div className="price-name"><strong>{p.name}</strong><small>{p.detail}</small></div>
                <b>{p.price}</b>
              </div>
            ))}
          </div>
          <div className="price-note">* Prices shown are for the listed standard services. Please confirm special requirements before sending files.</div>
        </section>

        <section id="advance" className="section advance-section">
          <div className="advance-copy">
            <p className="kicker">SAVE A TRIP</p>
            <h2>Send it now.<br /><span>Collect it later.</span></h2>
            <p>
              Need a xerox, printout or resume? Fill in your basic details and continue to WhatsApp.
              You can attach your documents there. We can prepare them before you visit.
            </p>
            <div className="steps">
              <div><b>01</b><span>Tell us what you need</span></div>
              <div><b>02</b><span>Send your files on WhatsApp</span></div>
              <div><b>03</b><span>Visit and collect the ready work</span></div>
            </div>
          </div>

          <form className="order-card" onSubmit={submitOrder}>
            <div className="form-top">
              <span>ADVANCE REQUEST</span>
              <span className="status"><i></i> WhatsApp</span>
            </div>

            <label>What do you need?</label>
            <div className="choice-grid">
              {["Printing", "Resume", "Photo Print", "Other"].map(type => (
                <button
                  type="button"
                  key={type}
                  className={orderType === type ? "choice active" : "choice"}
                  onClick={() => setOrderType(type)}
                >{type}</button>
              ))}
            </div>

            <div className="field-grid">
              <label><span>Name</span><input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" required /></label>
              <label><span>Phone</span><input value={phone} onChange={e => setPhone(e.target.value)} placeholder="10-digit number" inputMode="tel" /></label>
            </div>

            <label><span>Details</span><textarea value={details} onChange={e => setDetails(e.target.value)} placeholder="Example: 12 pages A4 B&W, 2 copies each. Or: make my resume and print 1 copy." rows="4"></textarea></label>

            <button className="whatsapp-btn" type="submit">Continue to WhatsApp <span>↗</span></button>
            {submitted && <p className="form-hint">WhatsApp should open in a new tab. Attach your files there and send the message.</p>}
            <p className="privacy-note">No online payment is required here. Files are sent directly through WhatsApp.</p>
          </form>
        </section>

        <section className="section csc-section">
          <div className="csc-intro">
            <p className="kicker">SELECTED CSC SERVICES</p>
            <h2>Useful online services,<br /><span>without the clutter.</span></h2>
            <p>We keep this list focused on common services. Availability and eligibility can depend on the relevant government/service portal.</p>
          </div>
          <div className="csc-grid">
            {cscServices.map((s, i) => <div className="csc-item" key={s}><span>{String(i + 1).padStart(2, "0")}</span>{s}<b>↗</b></div>)}
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-mark">SR</div>
          <div>
            <p className="kicker">ABOUT STUDIO RAJSRI</p>
            <h2>Practical service, <span>close to home.</span></h2>
            <p>Owned by <strong>Dilip Kumar Sinha</strong>, Studio Rajsri combines photo studio work, photo framing, document printing and selected CSC services at Main Road, Pesham, Birni, Giridih.</p>
          </div>
          <div className="about-details">
            <div><small>ADDRESS</small><strong>Main Road, Pesham<br />Block Birni, District Giridih<br />Jharkhand — 815316</strong></div>
            <div><small>CSC ID</small><strong>567324540011</strong></div>
            <div><small>CONTACT</small><strong>{PHONE}<br />dilipsinha447@gmail.com<br />usershubhamsinha@gmail.com</strong></div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><span className="brand-mark">SR</span><strong>Studio Rajsri</strong></div>
        <span>Photo Studio • CSC • Photo Framing</span>
        <div className="footer-links">
          <a href={`tel:${PHONE}`}>Call</a>
          <a href={whatsappLink("Hello Studio Rajsri.")} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="mailto:dilipsinha447@gmail.com">Email</a>
        </div>
        <small>© {new Date().getFullYear()} Studio Rajsri. All rights reserved.</small>
      </footer>

      <a className="floating-wa" href={whatsappLink("Hello Studio Rajsri, I have an enquiry.")} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">⌁</a>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
