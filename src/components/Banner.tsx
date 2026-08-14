"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SimpleAppLogger } from "@/utils/SimpleAppLogger";
import "swiper/css";
import "swiper/css/pagination";

const stores = [
  {
    href: "https://play.google.com/store/apps/details?id=com.jeff.id.maker",
    src: "/google_play.png",
    alt: "Get ID Maker on Google Play",
    label: "Google Play",
    className: "store-google",
  },
  {
    href: "https://apps.apple.com/us/app/id-maker-studio/id6753566835",
    src: "/apple.jpg",
    alt: "Download ID Maker on the App Store",
    label: "App Store",
    className: "store-apple",
  },
  {
    href: "https://apps.microsoft.com/detail/9NM1S5XRR77R",
    src: "/windows_store.png",
    alt: "Get ID Maker from Microsoft",
    label: "Microsoft Store",
    className: "store-windows",
  },
];

const slides = ["/banner1.svg", "/banner3.svg", "/banner4.svg", "/banner5.svg"];

export function Banner() {
  return (
    <section className="hero" id="download">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="hero-shell">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Free ID card maker for every team
          </div>
          <h1>
            Professional ID cards, <span>made effortless.</span>
          </h1>
          <p className="hero-lead">
            Design, personalize, and print polished ID cards in minutes. Start with
            a template, import your data, and let ID Maker handle the repetitive work.
          </p>

          <div className="hero-actions">
            <a href="#stores" className="button button-primary">
              Download for free <span aria-hidden="true">↓</span>
            </a>
            <a href="#how-it-works" className="button button-secondary">
              See how it works <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="trust-row" aria-label="Product benefits">
            <span><b>✓</b> No design skills needed</span>
            <span><b>✓</b> Free to get started</span>
          </div>

          <div className="store-row" id="stores">
            {stores.map((store) => (
              <a
                key={store.label}
                href={store.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => SimpleAppLogger.info(`${store.label} clicked`, store.label)}
                className="store-link"
              >
                <Image
                  src={store.src}
                  alt={store.alt}
                  width={148}
                  height={44}
                  className={store.className}
                />
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="ID Maker app preview">
          <div className="visual-glow" />
          <div className="app-window">
            <div className="window-bar">
              <span className="window-dots"><i /><i /><i /></span>
              <span className="window-title">ID Maker Studio</span>
              <span className="window-status">Live preview</span>
            </div>
            <div className="slider-wrap">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                loop
                className="hero-swiper"
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={slide}>
                    <Image src={slide} alt={`ID Maker preview ${index + 1}`} fill sizes="(max-width: 768px) 90vw, 560px" priority={index === 0} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="floating-card floating-card-top">
            <span className="floating-icon">✦</span>
            <span><b>100+ templates</b><small>Ready to customize</small></span>
          </div>
          <div className="floating-card floating-card-bottom">
            <span className="floating-icon floating-icon-green">✓</span>
            <span><b>Print ready</b><small>Perfect alignment</small></span>
          </div>
        </div>
      </div>

      <div className="proof-bar">
        <div><strong>100+</strong><span>Templates</span></div>
        <div><strong>3</strong><span>Platforms</span></div>
        <div><strong>1-click</strong><span>Bulk generation</span></div>
        <div><strong>Free</strong><span>To get started</span></div>
      </div>
    </section>
  );
}
