const BEFORE = [
  "Fragmented Stablecoin & fiat rails — adoption is a tech heavylifting.",
  "Observability is an afterthought and needs to be self-implemented.",
  "Protocol stacks like x402, MPP, UCP, ACP are standalone standards with scope that ends at custom merchant needs.",
  "No native control mechanics — must be embedded algorithmically.",
];

const AFTER = [
  "Best available rail optimised for granular value exchange is picked autonomously.",
  "Built-in watchdog as a plug-and-play system. Not just metrics — business financial insights.",
  "Protocol stack is abstracted away. Businesses define outcomes and boundaries, not the methods underneath.",
  "Boundary Defined systems ensure every tx adheres to merchant policies from rail selection to settlement.",
];

/* Border tokens */
const N = "rgba(27,23,20,0.14)";       // neutral dashed colour
const F = "rgba(246,130,31,0.45)";     // flare dashed colour
const MK = 8;                           // mark size px
const MH = MK / 2;                     // half — used to centre marks on border lines

/* ── Junction mark ─────────────────────────────────────────────── */
function Mark({
  style,
  flare = false,
}: {
  style: React.CSSProperties;
  flare?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      style={{
        position: "absolute",
        width: MK,
        height: MK,
        background: "var(--paper-200)",
        border: `1.5px solid ${flare ? "var(--flare-500)" : "rgba(27,23,20,0.26)"}`,
        borderRadius: 1.5,
        zIndex: 3,
        ...style,
      }}
    />
  );
}

/* ── Comparison ─────────────────────────────────────────────────── */
export default function Comparison() {
  return (
    <section
      style={{
        background: "var(--paper-200)",
        padding: "48px 0 72px",
      }}
    >
      {/* Centering shell — matches hero value-panel max-width */}
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 12px" }}>
      {/* Frame wrapper for rails + marks */}
      <div style={{ position: "relative" }}>

        {/* ── Top split rail (neutral left | flare right) ────────── */}
        <div style={{ display: "flex", height: 1, pointerEvents: "none" }}>
          <div style={{ flex: 1, background: N }} />
          <div style={{ flex: 1, background: F }} />
        </div>

        {/* ── Top junction marks ─────────────────────────────────── */}
        <Mark style={{ top: -MH, left: -MH }} />
        <Mark style={{ top: -MH, left: "calc(50% - 4px)" }} />
        <Mark style={{ top: -MH, right: -MH }} flare />

        {/* ── Two-column content grid ────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          {/* ── LEFT — present stack ──────────────────────────────── */}
          <div
            style={{
              borderLeft:  `1px dashed ${N}`,
              borderRight: `1px dashed ${N}`,
              padding: "44px 52px 56px",
            }}
          >
            {/* header */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 16,
                marginBottom: 36,
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(28px, 3.2vw, 44px)",
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: "-0.025em",
                    color: "var(--ink-900)",
                    margin: "0 0 8px",
                  }}
                >
                  present stack
                </h3>
                <p
                  style={{
                    font: "400 13px/1 var(--font-sans)",
                    color: "var(--ink-400)",
                    margin: 0,
                  }}
                >
                  the agentic payment landscape today
                </p>
              </div>
              <span
                style={{
                  font: "600 12px/1 var(--font-sans)",
                  color: "var(--ink-700)",
                  padding: "7px 14px",
                  border: "1px solid rgba(27,23,20,0.18)",
                  borderRadius: 999,
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                today
              </span>
            </div>

            {/* items — plain text, dashed separators */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {BEFORE.map((text, i) => (
                <div
                  key={i}
                  style={{
                    padding: "18px 0",
                    borderBottom:
                      i < BEFORE.length - 1 ? `1px dashed ${N}` : "none",
                  }}
                >
                  <p
                    style={{
                      font: "400 13.5px/1.65 var(--font-sans)",
                      color: "var(--ink-700)",
                      margin: 0,
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — with railflare ────────────────────────────── */}
          <div
            style={{
              borderRight: `1px dashed ${F}`,
              padding: "44px 52px 56px",
            }}
          >
            {/* header */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 16,
                marginBottom: 36,
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(28px, 3.2vw, 44px)",
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: "-0.025em",
                    color: "var(--flare-500)",
                    margin: "0 0 8px",
                  }}
                >
                  with railflare
                </h3>
                <p
                  style={{
                    font: "400 13px/1 var(--font-sans)",
                    color: "var(--flare-500)",
                    margin: 0,
                  }}
                >
                  every agent, every payment — watched
                </p>
              </div>
              <span
                style={{
                  font: "600 12px/1 var(--font-sans)",
                  color: "var(--ink-700)",
                  padding: "7px 14px",
                  border: "1px solid rgba(27,23,20,0.18)",
                  borderRadius: 999,
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                join waitlist →
              </span>
            </div>

            {/* items */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {AFTER.map((text, i) => (
                <div
                  key={i}
                  style={{
                    padding: "18px 0",
                    borderBottom:
                      i < AFTER.length - 1 ? `1px dashed ${F}` : "none",
                  }}
                >
                  <p
                    style={{
                      font: "400 13.5px/1.65 var(--font-sans)",
                      color: "var(--ink-900)",
                      margin: 0,
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom split rail ──────────────────────────────────── */}
        <div style={{ display: "flex", height: 1, pointerEvents: "none" }}>
          <div style={{ flex: 1, background: N }} />
          <div style={{ flex: 1, background: F }} />
        </div>

        {/* ── Bottom junction marks ──────────────────────────────── */}
        <Mark style={{ bottom: -MH, left: -MH }} />
        <Mark style={{ bottom: -MH, left: "calc(50% - 4px)" }} />
        <Mark style={{ bottom: -MH, right: -MH }} flare />
      </div>
      </div>
    </section>
  );
}
