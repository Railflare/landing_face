"use client";

import { useState, useEffect } from "react";

type State = "allow" | "hold" | "block";

interface Row {
  id: number;
  agent: string;
  merch: string;
  rail: string;
  amt: number;
  state: State;
  fresh: boolean;
}

const SEED: Omit<Row, "id" | "fresh">[] = [
  { agent: "agent-7f2c",       merch: "openai · gpt-4 call",  rail: "stripe", amt: 0.42,    state: "allow" },
  { agent: "agent-claude-buy", merch: "amazon.com · books",   rail: "visa",   amt: 1204.50, state: "hold"  },
  { agent: "agent-shop-bot",   merch: "unknown-merch.io",     rail: "ach",    amt: 48.00,   state: "block" },
  { agent: "agent-research",   merch: "arxiv.org · download", rail: "stripe", amt: 0.08,    state: "allow" },
  { agent: "agent-analytics",  merch: "snowflake · query",    rail: "x402",   amt: 2.14,    state: "allow" },
];

const TONES: Record<State, { bg: string; fg: string; dot: string; lbl: string }> = {
  allow: { bg: "var(--green-50)",  fg: "var(--green-500)",  dot: "var(--green-500)",  lbl: "allowed" },
  hold:  { bg: "var(--amber-50)",  fg: "var(--amber-500)",  dot: "var(--amber-500)",  lbl: "held"    },
  block: { bg: "var(--red-50)",    fg: "var(--red-500)",    dot: "var(--red-500)",    lbl: "blocked" },
};

export default function LiveStrip() {
  const [rows, setRows] = useState<Row[]>(() =>
    SEED.map((s, i) => ({ ...s, id: i, fresh: false }))
  );

  useEffect(() => {
    let n = 0;
    const t = setInterval(() => {
      const seed = SEED[n % SEED.length]; n++;
      const nu: Row = { ...seed, id: Date.now() + Math.random(), fresh: true };
      setRows((r) => [nu, ...r].slice(0, 5));
      setTimeout(() => setRows((r) => r.map((x) => x.id === nu.id ? { ...x, fresh: false } : x)), 700);
    }, 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ padding: "112px 24px 120px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* live pill */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18, justifyContent: "center" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "5px 12px 5px 10px", borderRadius: 999,
            background: "var(--flare-50)", color: "var(--flare-600)",
            font: "600 12px/1 var(--font-sans)",
          }}>
            <span className="rf-pulse" style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "var(--flare-500)",
              display: "inline-block",
            }} />
            live · 312 tx/s flowing right now
          </span>
        </div>

        {/* dashboard card */}
        <div style={{
          background: "#FFFFFF",
          border: "1px solid rgba(27,23,20,0.08)",
          borderRadius: 20,
          padding: 28,
          boxShadow: "0 24px 64px -28px rgba(27,23,20,0.18), 0 8px 24px -12px rgba(27,23,20,0.08)",
        }}>
          {/* card header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/logo-lockup.png" style={{ height: 22, width: "auto" }} alt="railflare" />
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "3px 10px 3px 8px", borderRadius: 999,
                background: "var(--green-50)", color: "var(--green-500)",
                font: "600 11px/1.4 var(--font-sans)",
              }}>
                <span className="rf-pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green-500)", display: "inline-block" }} />
                live
              </span>
            </div>
            <span style={{ font: "500 12px/1 var(--font-mono)", color: "var(--ink-400)" }}>
              p99 184ms · 0 incidents
            </span>
          </div>

          {/* table header */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1.6fr 0.7fr 0.7fr 0.7fr",
            gap: 16,
            padding: "10px 4px",
            borderBottom: "1px solid rgba(27,23,20,0.08)",
            font: "600 11px/1 var(--font-sans)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--ink-400)",
          }}>
            <span>agent</span>
            <span>merchant</span>
            <span>rail</span>
            <span style={{ textAlign: "right" }}>amount</span>
            <span>state</span>
          </div>

          {/* rows */}
          {rows.map((row) => {
            const tone = TONES[row.state];
            return (
              <div
                key={row.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.2fr 1.6fr 0.7fr 0.7fr 0.7fr",
                  gap: 16,
                  padding: "12px 4px",
                  alignItems: "center",
                  borderBottom: "1px solid rgba(27,23,20,0.05)",
                  background: row.fresh ? "rgba(246,130,31,0.08)" : "transparent",
                  transition: "background 700ms ease-out",
                  borderRadius: row.fresh ? 6 : 0,
                }}
              >
                <span style={{ font: "600 13px/1 var(--font-sans)", color: "var(--ink-900)" }}>{row.agent}</span>
                <span style={{ font: "400 13px/1 var(--font-sans)", color: "var(--ink-700)" }}>{row.merch}</span>
                <span style={{ font: "500 12px/1 var(--font-mono)", color: "var(--ink-400)" }}>{row.rail}</span>
                <span style={{ font: "500 14px/1 var(--font-mono)", color: "var(--ink-900)", textAlign: "right", fontFeatureSettings: '"tnum"' }}>
                  ${row.amt.toFixed(2)}
                </span>
                <span>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    padding: "3px 10px 3px 8px", borderRadius: 999,
                    background: tone.bg, color: tone.fg,
                    font: "600 11px/1.4 var(--font-sans)",
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: tone.dot, display: "inline-block" }} />
                    {tone.lbl}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
