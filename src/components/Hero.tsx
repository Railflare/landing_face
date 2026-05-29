import { ShieldPlus, Folder, Layers, Database, ShieldCheck, TrendingUp, Globe, GitMerge } from "lucide-react";

const SCATTER = [
  { Icon: ShieldPlus,  x: "8%",  y: "32%", rot: -12 },
  { Icon: Folder,      x: "22%", y: "62%", rot: -6  },
  { Icon: Layers,      x: "20%", y: "16%", rot: 10  },
  { Icon: Database,    x: "82%", y: "22%", rot: 14  },
  { Icon: ShieldCheck, x: "88%", y: "48%", rot: -8  },
  { Icon: TrendingUp,  x: "84%", y: "74%", rot: 16  },
];

export default function Hero() {
  return (
    <section style={{
      margin: "12px 12px 0",
      borderRadius: 28,
      background: "var(--flare-500)",
      position: "relative",
      overflow: "hidden",
      padding: "120px 24px 140px",
      textAlign: "center",
    }}>
      {/* dot grid overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.18) 1px, transparent 0)",
        backgroundSize: "16px 16px",
        opacity: 0.6,
        pointerEvents: "none",
      }} />

      {/* bottom glow */}
      <div style={{
        position: "absolute", left: "50%", bottom: -160,
        transform: "translateX(-50%)",
        width: 760, height: 380,
        background: "radial-gradient(ellipse at center, #FFE3B8 0%, rgba(255,227,184,0) 60%)",
        pointerEvents: "none",
      }} />

      {/* scattered icon cards */}
      {SCATTER.map(({ Icon, x, y, rot }, i) => (
        <div key={i} style={{
          position: "absolute", left: x, top: y,
          transform: `rotate(${rot}deg)`,
          width: 76, height: 76, borderRadius: 14,
          border: "1.5px dashed rgba(255,255,255,0.55)",
          display: "grid", placeItems: "center",
          background: "rgba(255,255,255,0.04)",
        }}>
          <Icon size={28} color="rgba(255,255,255,0.85)" strokeWidth={1.5} />
        </div>
      ))}

      <div style={{ position: "relative", maxWidth: 980, margin: "0 auto" }}>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(56px, 8vw, 92px)",
          fontWeight: 800,
          lineHeight: 0.98,
          letterSpacing: "-0.028em",
          color: "white",
          margin: "0 0 28px",
          textWrap: "balance",
        } as React.CSSProperties}>
          agent payments, watched.
        </h1>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: 20,
          fontWeight: 400,
          lineHeight: 1.45,
          color: "rgba(255,255,255,0.92)",
          maxWidth: 680,
          margin: "0 auto 40px",
        }}>
          every charge, every agent, every rail — on one screen.{" "}
          allow, block, or hold each transaction before it settles.{" "}
          start watching for free — no credit card required.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button style={{
            background: "white",
            color: "var(--flare-600)",
            border: "none",
            borderRadius: 999,
            padding: "14px 28px",
            font: "600 16px/1 var(--font-sans)",
            cursor: "pointer",
          }}>
            start watching for free
          </button>
          <button style={{
            background: "rgba(255,255,255,0.10)",
            color: "white",
            border: "1px solid rgba(255,255,255,0.35)",
            borderRadius: 999,
            padding: "14px 26px",
            font: "600 16px/1 var(--font-sans)",
            cursor: "pointer",
          }}>
            view docs
          </button>
        </div>
      </div>

      {/* bottom strip */}
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0,
        borderTop: "1px solid rgba(255,255,255,0.18)",
        padding: "16px 32px",
        display: "flex",
        gap: 40,
        justifyContent: "center",
        flexWrap: "wrap",
        font: "500 13px/1 var(--font-sans)",
        color: "rgba(255,255,255,0.92)",
      }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <Globe size={14} strokeWidth={1.75} />
          sub-80ms ingest, anywhere
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <ShieldCheck size={14} strokeWidth={1.75} />
          allow / hold / block at the rail
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <GitMerge size={14} strokeWidth={1.75} />
          route across stripe, visa, ach, x402
        </span>
      </div>
    </section>
  );
}
