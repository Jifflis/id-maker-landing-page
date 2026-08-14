"use client";

import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <div className="nav-shell">
        <Link href="/" className="brand" aria-label="ID Maker home">
          <Image src="/logo.svg" alt="" width={42} height={42} priority />
          <span>ID Maker</span>
        </Link>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <Link href="/privacy-policy">Privacy</Link>
        </div>

        <a className="nav-cta" href="#download">
          Get the app
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </nav>
  );
}
