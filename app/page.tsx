import Image from "next/image"
import Link from "next/link"
import { MenuSection } from "./menu-section"

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <Link href="#top" className="brand" aria-label="Members Shisanyama home">
          <span className="brand-mark">M</span><span>Members<br /><em>Shisanyama</em></span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          <Link href="#menu">Menu</Link><Link href="#story">Our story</Link><Link href="#visit">Visit us</Link>
        </nav>
        <a className="top-cta" href="tel:+27602945644">Call to order <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="dot" /> Fire-grilled. Roadside-ready.</p>
          <h1>Good meat.<br /><span>Good people.</span><br />Good times.</h1>
          <p className="hero-lede">Pull over for a proper plate of chisa nyama — smoky meat, fluffy pap and sides made for sharing.</p>
          <div className="hero-actions"><a className="button button-dark" href="#menu">See the menu <span>↓</span></a><a className="text-link" href="https://www.google.com/maps/dir/?api=1&destination=44+Kemston+Ave,+Benoni" target="_blank" rel="noreferrer">Get directions <span>↗</span></a></div>
          <div className="hero-note"><span>★</span> A local favourite in Benoni since 2019</div>
        </div>
        <div className="hero-visual"><Image src="/chisanyama-hero.png" alt="A platter of grilled meat with pap, rice and salads" fill priority sizes="(max-width: 800px) 100vw, 55vw" /></div>
        <div className="hero-stamp">HOT OFF<br /><span>THE FIRE</span></div>
      </section>

      <section className="ticker" aria-label="Restaurant highlights"><span>CHARCOAL FLAME</span><b>✦</b><span>HOMEMADE SIDES</span><b>✦</b><span>SHARE THE TABLE</span><b>✦</b><span>CHARCOAL FLAME</span></section>

      <section className="intro section" id="story">
        <div><p className="eyebrow green">THE MEMBERS WAY</p><h2>From our fire<br />to your table.</h2></div>
        <div className="intro-body"><p>At Members, the grill is the gathering place. We take our time with the coals, season the good stuff and serve it up with sides that taste like home.</p><p>Come hungry, bring your people, and stay for one more bite.</p><a className="text-link green-link" href="#visit">Find your way here <span>↗</span></a></div>
      </section>

      <section className="menu-section section" id="menu"><div className="section-head"><div><p className="eyebrow green">THE MENU</p><h2>Built around<br />the braai.</h2></div><p className="section-intro">Choose your meat, make it a plate, then add a little extra. No fuss — just proper food.</p></div><MenuSection /></section>

      <section className="visit section" id="visit"><div className="visit-card"><p className="eyebrow">COME THROUGH</p><h2>Meet us by<br />the smoke.</h2><div className="visit-details"><div><strong>Find us</strong><p>44 Kemston Ave<br />Benoni, 1501<br />South Africa</p></div><div><strong>Hours</strong><p>Mon–Sun<br />8:00am – 10:00pm</p></div><div><strong>Call ahead</strong><p>+27 60 294 5644</p></div></div><a className="button button-light" href="https://www.google.com/maps/dir/?api=1&destination=44+Kemston+Ave,+Benoni" target="_blank" rel="noreferrer">Open in Google Maps <span>↗</span></a></div><div className="visit-aside"><div className="map-art"><span>YOU ARE<br /><b>HERE</b></span><i>✦</i></div><p>Good food is<br /><em>worth the detour.</em></p></div></section>

      <footer><div className="brand footer-brand"><span className="brand-mark">M</span><span>Members<br /><em>Shisanyama</em></span></div><p>© 2026 Members Shisanyama. Made for sharing.</p><div><a href="tel:+27602945644">Call us</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a></div></footer>
    </main>
  )
}
