import { ArrowRight } from "lucide-react";

export default function CTAStrip() {
  return (
    <section style={{ padding: "96px 24px", borderTop: "1px solid rgba(27,23,20,0.06)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(48px, 7vw, 80px)",
          fontWeight: 800,
          lineHeight: 0.96,
          letterSpacing: "-0.028em",
          color: "var(--ink-900)",
          margin: "0 0 24px",
        }}>
          <span className="t-outline">start watching.</span>
          <br />
          in <span className="t-fill">8 minutes</span>.
        </h2>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: 18,
          fontWeight: 400,
          lineHeight: 1.5,
          color: "var(--ink-700)",
          margin: "0 0 32px",
          maxWidth: 560,
          marginInline: "auto",
        }}>
          drop in the sdk, point your agents at railflare, see every payment.
          no card needed for the first 10,000 transactions.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button style={{
            background: "var(--flare-500)",
            color: "white",
            border: "1px solid var(--flare-600)",
            borderRadius: 999,
            padding: "14px 26px",
            font: "600 16px/1 var(--font-sans)",
            cursor: "pointer",
            display: "inline-flex", alignItems: "center", gap: 8,
          }}>
            start watching <ArrowRight size={16} strokeWidth={2} />
          </button>
          <button style={{
            background: "transparent",
            color: "var(--ink-900)",
            border: "1px solid rgba(27,23,20,0.16)",
            borderRadius: 999,
            padding: "14px 22px",
            font: "600 16px/1 var(--font-sans)",
            cursor: "pointer",
          }}>
            talk to sales →
          </button>
        </div>
      </div>
    </section>
  );
}
