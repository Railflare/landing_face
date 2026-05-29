import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--ink-950)",
        padding: "80px 48px 48px",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>

        {/* ── CTA card ─────────────────────────────────────────────── */}
        <div
          style={{
            position: "relative",
            textAlign: "center",
            padding: "56px 24px 52px",
            border: "1px solid rgba(244,238,229,0.09)",
            borderRadius: 20,
            marginBottom: 72,
          }}
        >
          {/* Travelling orange border light */}
          <svg
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              overflow: "visible",
              borderRadius: 20,
            }}
          >
            <defs>
              <filter id="cta-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <rect
              x="0.75"
              y="0.75"
              width="99.9%"
              height="99.8%"
              rx="19.25"
              ry="19.25"
              fill="none"
              stroke="#FB7728"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="100 3000"
              filter="url(#cta-glow)"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-3100"
                dur="8s"
                repeatCount="indefinite"
              />
            </rect>
          </svg>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo-lockup.png"
            alt="railflare"
            style={{
              height: 30,
              filter: "brightness(0) invert(1)",
              margin: "0 auto 18px",
              display: "block",
            }}
          />
          <p
            style={{
              font: "400 15px/1 var(--font-sans)",
              color: "rgba(244,238,229,0.38)",
              margin: "0 0 28px",
            }}
          >
            agent payments, watched.
          </p>
          <a
            href="#waitlist"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              font: "600 14px/1 var(--font-sans)",
              color: "var(--ink-900)",
              background: "#ffffff",
              padding: "12px 24px",
              borderRadius: 999,
              textDecoration: "none",
            }}
          >
            join the waitlist <ArrowRight size={14} strokeWidth={2.5} />
          </a>
        </div>

        {/* ── Brand tagline ─────────────────────────────────────────── */}
        <p
          style={{
            font: "400 13px/1.65 var(--font-sans)",
            color: "rgba(244,238,229,0.28)",
            margin: "0 0 48px",
            maxWidth: 240,
          }}
        >
          the control plane for autonomous transactions.
        </p>

        {/* ── Bottom bar ───────────────────────────────────────────── */}
        <div
          style={{
            borderTop: "1px solid rgba(244,238,229,0.07)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              font: "500 11px/1 var(--font-mono)",
              color: "rgba(244,238,229,0.22)",
            }}
          >
            © 2026 railflare, inc.
          </span>

          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            {/* X / Twitter */}
            <a
              href="#"
              aria-label="X (Twitter)"
              style={{ color: "rgba(244,238,229,0.32)", display: "flex" }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="#"
              aria-label="GitHub"
              style={{ color: "rgba(244,238,229,0.32)", display: "flex" }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
