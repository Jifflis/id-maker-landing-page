"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { SimpleAppLogger } from "@/utils/SimpleAppLogger";

const features = [
  {
    number: "01",
    kicker: "Start beautifully",
    title: "100+ templates for every occasion",
    description: "Choose a polished starting point for schools, teams, companies, events, and communities—then make every detail your own.",
    image: "/templates.svg",
    alt: "A selection of professional ID card templates",
    tags: ["Fully editable", "Multiple formats", "Brand ready"],
  },
  {
    number: "02",
    kicker: "Make it yours",
    title: "Create once. Reuse forever.",
    description: "Build and save custom templates with your colors, fields, logo, and layout. Your next batch starts exactly where you left off.",
    image: "/create_template.svg",
    alt: "Custom template editor in ID Maker",
    tags: ["Custom branding", "Saved layouts", "Easy editing"],
  },
  {
    number: "03",
    kicker: "Work at scale",
    title: "Turn a CSV into hundreds of IDs",
    description: "Import a spreadsheet and generate an entire set in one go. It is fast, consistent, and ideal for larger organizations.",
    image: "/csv_generator.svg",
    alt: "Bulk ID generation using CSV data",
    tags: ["CSV import", "One-tap generation", "Batch export"],
  },
  {
    number: "04",
    kicker: "Stay flexible",
    title: "Quick manual creation when you need it",
    description: "Making just a few cards? Enter details directly, preview changes instantly, and export without setting up a spreadsheet.",
    image: "/manual.svg",
    alt: "Manual ID card creation interface",
    tags: ["Instant preview", "Simple fields", "Fast export"],
  },
  {
    number: "05",
    kicker: "Look consistent",
    title: "Smart cropping that finds the face",
    description: "Bring photos in at any size. Face detection centers and crops portraits into consistent, professional headshots automatically.",
    image: "/crop_image.svg",
    alt: "Automatic face detection and photo cropping",
    tags: ["Face detection", "Auto-centering", "Consistent photos"],
  },
];

const videos = [
  { id: "lF0ouuURMSk", title: "Bulk generation", label: "From CSV to finished cards" },
  { id: "elr-l8qVgg4", title: "Smart auto-cropping", label: "Clean photos in a few clicks" },
  { id: "u1BWP63rdo4", title: "Manual generation", label: "Create one card from scratch" },
  { id: "ut8aq_DTJyw", title: "Custom templates", label: "Build a reusable design" },
];

export default function HomePage() {
  useEffect(() => {
    SimpleAppLogger.init({ key: process.env.NEXT_PUBLIC_LOGGER_API_KEY || "" });
    SimpleAppLogger.info("Home page loaded", "homepage");
  }, []);

  return (
    <main>
      <Navbar />
      <Banner />

      <section className="features-section" id="features">
        <div className="section-heading">
          <span className="section-kicker">Everything you need</span>
          <h2>From blank canvas to print-ready in minutes.</h2>
          <p>Powerful tools stay out of your way, so you can focus on creating IDs people are proud to wear.</p>
        </div>

        <div className="features-list">
          {features.map((feature, index) => (
            <article className={`feature-row ${index % 2 ? "feature-reverse" : ""}`} key={feature.title}>
              <div className="feature-image-wrap">
                <span className="feature-number">{feature.number}</span>
                <Image src={feature.image} alt={feature.alt} fill sizes="(max-width: 768px) 90vw, 540px" />
              </div>
              <div className="feature-copy">
                <span className="feature-kicker">{feature.kicker}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="tag-list">
                  {feature.tags.map((tag) => <span key={tag}><b>✓</b>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="steps-section" id="how-it-works">
        <div className="steps-shell">
          <div className="steps-heading">
            <span className="section-kicker light">A simpler workflow</span>
            <h2>Three steps. One polished result.</h2>
            <p>No complicated setup and no steep learning curve.</p>
          </div>
          <div className="steps-grid">
            <div className="step-card"><span>01</span><div className="step-icon">▦</div><h3>Pick a template</h3><p>Start from a professionally designed layout or open one you saved.</p></div>
            <div className="step-card"><span>02</span><div className="step-icon">✎</div><h3>Add your details</h3><p>Enter them manually or import a CSV to create an entire batch.</p></div>
            <div className="step-card"><span>03</span><div className="step-icon">↗</div><h3>Export and print</h3><p>Auto-layout aligns both sides so every card is ready to print.</p></div>
          </div>
        </div>
      </section>

      <section className="videos-section">
        <div className="section-heading video-heading">
          <span className="section-kicker">See it in action</span>
          <h2>Learn the essentials in a few minutes.</h2>
          <p>Short, practical walkthroughs to help you get more from ID Maker.</p>
        </div>
        <div className="video-grid">
          {videos.map((video, index) => (
            <article className="video-card" key={video.id}>
              <div className="video-frame">
                <iframe src={`https://www.youtube-nocookie.com/embed/${video.id}`} title={video.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <div className="video-meta"><span>0{index + 1}</span><div><h3>{video.title}</h3><p>{video.label}</p></div></div>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-inner">
          <Image src="/logo.svg" alt="" width={64} height={64} />
          <span className="section-kicker light">Ready when you are</span>
          <h2>Your next batch of ID cards can be done today.</h2>
          <p>Download ID Maker for free and turn hours of repetitive work into a few simple steps.</p>
          <a href="#stores" className="button button-white">Choose your platform <span>↑</span></a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="brand"><Image src="/logo.svg" alt="" width={44} height={44} /><span>ID Maker</span></Link>
            <p>Professional ID cards without the complicated workflow.</p>
          </div>
          <div><h3>Product</h3><a href="#features">Features</a><a href="#how-it-works">How it works</a><a href="#download">Download</a></div>
          <div><h3>Support</h3><a href="mailto:jifflisotomier@gmail.com">Contact us</a><Link href="/privacy-policy">Privacy policy</Link></div>
          <div><h3>Support the project</h3><p>ID Maker is free. Donations help us keep improving it.</p><a className="footer-email" href="mailto:jifflisotomier@gmail.com">jifflisotomier@gmail.com</a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} ID Maker. All rights reserved.</span><span>Designed and developed by Jeffrey C. Abaniel</span></div>
      </footer>
    </main>
  );
}
