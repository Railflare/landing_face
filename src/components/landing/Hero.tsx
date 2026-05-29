'use client';

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import WaitlistModal from "../WaitlistModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    <div className="hero-outer">
      <div className="hero-frame">

        <span className="frame-corner frame-tl" />
        <span className="frame-corner frame-tr" />
        <span className="frame-corner frame-bl" />
        <span className="frame-corner frame-br" />

        {/* ── TOP 70 % — orange section ─────────────────────── */}
        <div className="hero-top">
          <div className="hero-dots"    aria-hidden="true" />
          <div className="hero-glow"    aria-hidden="true" />

          {/* floating nav */}
          <div className="hero-nav-wrap">
            <nav className="hero-nav">
              <a href="/" aria-label="Railflare home">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/logo-lockup.png"
                  alt="railflare"
                  className="hero-logo"
                />
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="waitlist-btn"
              >
                Join Waitlist
              </button>
            </nav>
          </div>

          {/* headline + subheading */}
          <div className="hero-body">
            <h1 className="hero-headline">
              Agent payments,{" "}
              <span className="t-underline-inv">watched</span>.
            </h1>
            <p className="hero-sub">
              Cloudflare for agentic economy — giving control back to businesses
              without compromising agent autonomy over payments.
            </p>
          </div>
        </div>

        {/* ── BOTTOM 30 % — value panel ─────────────────────── */}
        <div className="hero-value-panel">
          <div className="value-inner">
            <p className="value-eyebrow">
              Value Railflare brings to agentic economy
            </p>
            <h2 className="value-headline">
              Recognise yourself as a business,{" "}
              <span className="t-fill">accepting Payments</span>?
            </h2>
            <p className="value-body">
              <span className="value-arrow" aria-hidden="true">
                <ArrowRight size={14} strokeWidth={2} />
              </span>
              Railflare takes away the burden, and makes you ready for the
              agentic internet&nbsp;(no-code)
            </p>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}
