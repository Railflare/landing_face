"use client";

import { useEffect, useState } from "react";
import {
  Bot,
  ScanEye,
  ShieldCheck,
  GitMerge,
  Zap,
  Activity,
} from "lucide-react";

const STEPS = [
  {
    num: "01",
    Icon: Bot,
    title: "Initiate",
    body: "Your agent calls the Railflare SDK with a payment intent — merchant, amount, and rail preference. One line of code.",
    detail: "sdk.pay({ merchant, amount, rail })",
  },
  {
    num: "02",
    Icon: ScanEye,
    title: "Inspect",
    body: "Railflare intercepts in real-time. The transaction is fingerprinted: merchant reputation, agent identity, session context.",
    detail: "< 12 ms intercept latency",
  },
  {
    num: "03",
    Icon: ShieldCheck,
    title: "Evaluate",
    body: "Policy engine fires. Amount limits, merchant allowlists, agent permissions — evaluated against your live business rules.",
    detail: "allow · hold · block",
  },
  {
    num: "04",
    Icon: GitMerge,
    title: "Route",
    body: "The best available rail is selected on cost, latency, and reliability. Fails over automatically if the primary rail degrades.",
    detail: "stripe · visa · ach · x402",
  },
  {
    num: "05",
    Icon: Zap,
    title: "Settle",
    body: "The transaction executes on the chosen rail and confirmation is returned to your agent — end-to-end in under 80 ms.",
    detail: "< 80 ms p99",
  },
  {
    num: "06",
    Icon: Activity,
    title: "Observe",
    body: "Every step is indexed and queryable. Replay any transaction, step into the decision trail, and leave no blind spots.",
    detail: "full audit · 30-day replay",
  },
] as const;

const INTERVAL_MS = 3400;

export default function ProductCarousel() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let startTime = performance.now();
    let rafId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const pct = Math.min(elapsed / INTERVAL_MS, 1);
      setProgress(pct);

      if (pct >= 1) {
        setActive((a) => (a + 1) % STEPS.length);
        startTime = now;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const step = STEPS[active];
  const { Icon } = step;

  return (
    <section
      style={{
        background: "var(--ink-950)",
        padding: "108px 24px 112px",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        {/* eyebrow */}
        <div
          style={{
            font: "600 11px/1 var(--font-sans)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--flare-500)",
            marginBottom: 18,
            textAlign: "center",
          }}
        >
          how it works
        </div>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(30px, 4.2vw, 54px)",
            fontWeight: 700,
            lineHeight: 1.06,
            letterSpacing: "-0.025em",
            color: "#F4EEE5",
            margin: "0 auto 60px",
            textAlign: "center",
            maxWidth: 700,
          }}
        >
          payment intent to settled —{" "}
          <span style={{ color: "var(--flare-500)" }}>in milliseconds</span>
        </h2>

        {/* step pills nav */}
        <div
          style={{
            display: "flex",
            gap: 8,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 40,
          }}
        >
          {STEPS.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                font: "600 12px/1 var(--font-sans)",
                padding: "7px 15px",
                borderRadius: 999,
                border: "1px solid",
                borderColor:
                  i === active
                    ? "var(--flare-500)"
                    : "rgba(244,238,229,0.12)",
                background:
                  i === active
                    ? "rgba(246,130,31,0.12)"
                    : "transparent",
                color:
                  i === active
                    ? "var(--flare-400)"
                    : "rgba(244,238,229,0.38)",
                cursor: "pointer",
                transition: "all 220ms ease",
              }}
            >
              {s.num} {s.title}
            </button>
          ))}
        </div>

        {/* active card */}
        <div
          style={{
            background: "rgba(244,238,229,0.03)",
            border: "1px solid rgba(244,238,229,0.09)",
            borderRadius: 20,
            padding: "52px 60px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
            minHeight: 260,
          }}
        >
          {/* left: text */}
          <div>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: "rgba(246,130,31,0.10)",
                border: "1px solid rgba(246,130,31,0.22)",
                display: "grid",
                placeItems: "center",
                marginBottom: 22,
              }}
            >
              <Icon size={24} color="var(--flare-400)" strokeWidth={1.75} />
            </div>
            <div
              style={{
                font: "600 11px/1 var(--font-sans)",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: "var(--flare-500)",
                marginBottom: 10,
              }}
            >
              step {step.num}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px, 3.2vw, 42px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#F4EEE5",
                margin: "0 0 18px",
              }}
            >
              {step.title}
            </h3>
            <p
              style={{
                font: "400 15.5px/1.65 var(--font-sans)",
                color: "rgba(244,238,229,0.58)",
                margin: 0,
              }}
            >
              {step.body}
            </p>
          </div>

          {/* right: detail badge */}
          <div
            style={{
              background: "rgba(246,130,31,0.06)",
              border: "1px solid rgba(246,130,31,0.18)",
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 160,
              padding: "32px",
            }}
          >
            <span
              style={{
                font: "500 15px/1 var(--font-mono)",
                color: "var(--flare-400)",
                letterSpacing: "0.03em",
                textAlign: "center",
              }}
            >
              {step.detail}
            </span>
          </div>
        </div>

        {/* progress indicators */}
        <div
          style={{
            display: "flex",
            gap: 6,
            justifyContent: "center",
            marginTop: 28,
            alignItems: "center",
          }}
        >
          {STEPS.map((_, i) => (
            <div
              key={i}
              style={{
                height: 3,
                borderRadius: 999,
                overflow: "hidden",
                background: "rgba(244,238,229,0.12)",
                width: i === active ? 40 : 10,
                transition: "width 220ms ease",
                position: "relative",
              }}
            >
              {i === active && (
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    background: "var(--flare-500)",
                    width: `${progress * 100}%`,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
