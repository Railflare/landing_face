"use client";

import { useState } from "react";
import {
  ScanSearch,
  Activity,
  GitBranch,
  Clock,
  Zap,
} from "lucide-react";

type TabId = "intercept" | "analyse" | "watch" | "route";

const TABS: { id: TabId; label: string; soon?: boolean }[] = [
  { id: "intercept", label: "Intercept" },
  { id: "analyse",   label: "Analyse"   },
  { id: "watch",     label: "Watch"     },
  { id: "route",     label: "Route",    soon: true },
];

/* ── Diagrams ──────────────────────────────────────────────────── */

function InterceptDiagram() {
  return (
    <div className="plc-diagram" style={{
      padding: "30px 12px 10px",
      overflow: "hidden",
      overflowX: "hidden",
      overflowY: "hidden",
      position: "relative",
      maxWidth: "100%",
    }}>
      {/* Vertical lines connecting to Railflare button */}
      <svg style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}>
        {/* Line 1: From middle bottom of "Merchant Side interceptor" text */}
        <line x1="168" y1="215" x2="168" y2="267" stroke="#FB7728" strokeWidth="2" strokeDasharray="4 4" />
        {/* Line 2: From middle bottom of "Gateways" block */}
        <line x1="320" y1="180" x2="320" y2="267" stroke="#FB7728" strokeWidth="2" strokeDasharray="4 4" />
        {/* Line 3: From middle bottom of "Buyer Side interceptor" text */}
        <line x1="465" y1="237" x2="465" y2="267" stroke="#FB7728" strokeWidth="2" strokeDasharray="4 4" />
      </svg>

      {/* Main Grid - scaled to fit */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "110px 70px 220px 50px 120px",
        gap: "10px",
        alignItems: "start",
        position: "relative",
        margin: "0 auto",
        maxWidth: "100%",
        width: "100%",
        overflow: "hidden",
        zIndex: 1,
      }}>

        {/* Left Column: Businesses + Agent CLIs as rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {["Business 01", "Business 02", "Business 03", "Business 04"].map((business, i) => (
            <div key={i}>
              <div style={{
                height: "40px",
                border: "1.5px solid rgba(31, 36, 38, 0.2)",
                borderRadius: "3px",
                background: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "7px",
                fontWeight: 600,
                color: "rgba(31, 36, 38, 0.4)",
              }}>
                {business}
              </div>
            </div>
          ))}
        </div>

        {/* Agent CLI Column - aligned with business boxes */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "12px" }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <div style={{
                  height: "40px",
                  border: "1.5px solid #FB7728",
                  borderRadius: "4px",
                  background: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "7px",
                  fontWeight: 600,
                  color: "rgba(251, 119, 40, 0.5)",
                }}>
                  Agent CLI
                </div>
              </div>
            ))}
          </div>
          {/* Merchant Side Label */}
          <div style={{
            fontSize: "7px",
            fontWeight: 600,
            color: "rgba(31, 36, 38, 0.7)",
            lineHeight: "1.3",
            textAlign: "center",
            marginTop: "4px",
          }}>
            Merchant Side<br/>interceptor
          </div>
        </div>

        {/* Center Column: Protocols & Gateways */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* Protocols & Rail */}
          <div style={{
            border: "1.5px solid #3B82F6",
            borderRadius: "8px",
            padding: "14px 8px 10px",
            background: "#ffffff",
            position: "relative",
            marginTop: "8px",
          }}>
            <div style={{
              position: "absolute",
              top: "-8px",
              left: "10px",
              background: "#ffffff",
              padding: "1px 6px",
              fontSize: "7px",
              fontWeight: 700,
              color: "rgba(31, 36, 38, 0.8)",
              zIndex: 10,
              whiteSpace: "nowrap",
            }}>Protocol & Rail Processors</div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "6px",
            }}>
              {[
                { name: "4CP" },
                { name: "Stripe" },
                { name: "UCP" },
                { name: "Agent Card" },
                { name: "Monopay" },
                { name: "x402" },
              ].map((item, i) => (
                <div key={i} style={{
                  padding: "6px 4px",
                  border: "1px solid rgba(31, 36, 38, 0.2)",
                  borderRadius: "4px",
                  fontSize: "7px",
                  fontWeight: 600,
                  color: "rgba(31, 36, 38, 0.6)",
                  textAlign: "center",
                  background: "#ffffff",
                  minHeight: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          {/* Gateways */}
          <div style={{
            border: "1.5px solid #FB7728",
            borderRadius: "8px",
            padding: "12px 8px",
            background: "#ffffff",
            position: "relative",
            minHeight: "50px",
            display: "flex",
            alignItems: "flex-start",
          }}>
            <div style={{
              fontSize: "7px",
              fontWeight: 600,
              color: "rgba(31, 36, 38, 0.7)",
            }}>Gateways</div>
          </div>
        </div>

        {/* Buyer Side Column */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <div style={{
            height: "190px",
            width: "45px",
            border: "1.5px solid #FB7728",
            borderRadius: "6px",
            background: "#ffffff",
          }} />
        </div>

        {/* Right Column: Agents */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {["Agent Z", "Agent X"].map((agent, i) => (
            <div key={i} style={{ position: "relative" }}>
              <div style={{
                width: "100px",
                height: "50px",
                border: "1.5px solid rgba(31, 36, 38, 0.2)",
                borderRadius: "3px",
                background: "#ffffff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}>
                <div style={{
                  fontSize: "7px",
                  fontWeight: 600,
                  color: "rgba(31, 36, 38, 0.4)",
                }}>
                  {agent}
                </div>
                <div style={{
                  background: "#10B981",
                  color: "#ffffff",
                  fontSize: "6px",
                  fontWeight: 600,
                  padding: "2px 6px",
                  borderRadius: "3px",
                }}>
                  Buyer
                </div>
              </div>
            </div>
          ))}
          {/* Buyer Side interceptor label below Agent X */}
          <div style={{
            fontSize: "7px",
            fontWeight: 600,
            color: "rgba(31, 36, 38, 0.7)",
            lineHeight: "1.3",
            textAlign: "center",
            marginTop: "4px",
          }}>
            Buyer Side<br/>interceptor
          </div>
        </div>
      </div>


      {/* Bottom: Railflare Button */}
      <div style={{
        marginTop: "12px",
        marginBottom: "12px",
        paddingLeft: "120px",
        paddingRight: "120px",
      }}>
        <div style={{
          background: "#FB7728",
          borderRadius: "8px",
          padding: "10px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(251, 119, 40, 0.3)",
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo-lockup.png"
            alt="railflare"
            style={{
              height: "14px",
              filter: "brightness(0) invert(1)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function AnalyseDiagram() {
  const rules = [
    { label: "Amount limit",       value: "$12.40 of $500",   pass: true  },
    { label: "Counterparty",       value: "resolving…",       pass: null  },
    { label: "Protocol",           value: "x402 compliant",   pass: true  },
    { label: "Velocity (hourly)",  value: "3 of 10 allowed",  pass: true  },
    { label: "Merchant policy",    value: "boundary: API",    pass: true  },
  ];

  return (
    <div className="plc-diagram">
      <div className="plc-analyse-header">
        <ScanSearch size={13} strokeWidth={2} />
        <span>Policy Engine</span>
        <span className="plc-analyse-latency"><Clock size={11} strokeWidth={2} /> sub-100ms</span>
      </div>
      <div className="plc-rules-list">
        {rules.map((r, i) => (
          <div key={i} className="plc-rule-row">
            <span className="plc-rule-label">{r.label}</span>
            <span className="plc-rule-value">{r.value}</span>
            <span className={`plc-rule-badge ${r.pass === null ? "plc-badge-pending" : r.pass ? "plc-badge-pass" : "plc-badge-fail"}`}>
              {r.pass === null ? "…" : r.pass ? "✓" : "✗"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function WatchDiagram() {
  const txns = [
    { hash: "0x4f2a…", amount: "$12.40",  rail: "x402", ok: true  },
    { hash: "0xc91b…", amount: "$0.08",   rail: "MPP",  ok: true  },
    { hash: "0xa3e7…", amount: "$240.00", rail: "x402", ok: false },
    { hash: "0x88d2…", amount: "$1.20",   rail: "Fiat", ok: true  },
  ];

  return (
    <div className="plc-diagram">
      <div className="plc-watch-header">
        <Activity size={13} strokeWidth={2} />
        <span>Watchdog</span>
        <span className="plc-live-badge"><span className="plc-live-dot" />live</span>
      </div>
      <div className="plc-tx-list">
        {txns.map((tx, i) => (
          <div key={i} className="plc-tx-row">
            <span className="plc-tx-hash">{tx.hash}</span>
            <span className="plc-tx-amount">{tx.amount}</span>
            <span className="plc-tx-rail">{tx.rail}</span>
            <span className={`plc-tx-status ${tx.ok ? "plc-status-ok" : "plc-status-warn"}`}>
              {tx.ok ? "cleared" : "flagged"}
            </span>
          </div>
        ))}
      </div>
      <div className="plc-watch-footer">
        <span>24h volume · <strong>$253.68</strong></span>
        <span>4 transactions</span>
      </div>
    </div>
  );
}

function RouteDiagram() {
  const rails = [
    { name: "x402",  latency: "45ms",  cost: "$0.001", best: true  },
    { name: "MPP",   latency: "120ms", cost: "$0.003", best: false },
    { name: "Fiat",  latency: "1.2s",  cost: "$0.02",  best: false },
  ];

  return (
    <div className="plc-diagram plc-diagram-soon">
      <div className="plc-soon-overlay">
        <span className="plc-soon-tag">coming soon</span>
      </div>
      <div className="plc-route-header">
        <GitBranch size={13} strokeWidth={2} />
        <span>Rail Selector</span>
      </div>
      <div className="plc-rails-list">
        {rails.map((r, i) => (
          <div key={i} className={`plc-rail-row ${r.best ? "plc-rail-best" : ""}`}>
            <span className="plc-rail-name">{r.name}</span>
            <span className="plc-rail-latency"><Zap size={10} strokeWidth={2} />{r.latency}</span>
            <span className="plc-rail-cost">{r.cost} / tx</span>
            {r.best && <span className="plc-rail-pick">selected</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Content map ───────────────────────────────────────────────── */

const STAGE: Record<TabId, {
  num: string;
  eyebrow: string;
  headline: string;
  body: string;
  diagram: React.ReactNode;
}> = {
  intercept: {
    num: "01",
    eyebrow: "Stage 01 — Intercept",
    headline: "Every Financial Actions Intercepted",
    body: "Railflare plug-in sits at the merchant end as well as track and intercepts the gateway to extract insights around your commerce.",
    diagram: <InterceptDiagram />,
  },
  analyse: {
    num: "02",
    eyebrow: "Stage 02 — Analyse",
    headline: "Intent decoded. Merchant policy applied.",
    body: "The intercepted request is evaluated against your rule engine in sub-100ms. Amount thresholds, counterparty reputation, protocol compliance — all resolved before any rail is touched.",
    diagram: <AnalyseDiagram />,
  },
  watch: {
    num: "03",
    eyebrow: "Stage 03 — Watch",
    headline: "Live oversight. Not just logs.",
    body: "Every cleared transaction enters the watchdog. Real-time anomaly detection, spend velocity tracking, and business-level financial insights — delivered plug-and-play, not as an afterthought.",
    diagram: <WatchDiagram />,
  },
  route: {
    num: "04",
    eyebrow: "Stage 04 — Route",
    headline: "Best rail. Picked automatically.",
    body: "Once cleared, Railflare selects the optimal settlement path — x402, MPP, UCP, or fiat — based on speed, cost, and your merchant policies. Zero manual config. Zero vendor lock-in.",
    diagram: <RouteDiagram />,
  },
};

/* ── Main component ────────────────────────────────────────────── */

export default function ProductLifecycle() {
  const [active, setActive] = useState<TabId>("intercept");
  const stage = STAGE[active];

  return (
    <section className="plc-section" style={{ background: "#ffffff" }}>
      <div className="plc-wrap">

        {/* Header */}
        <div className="plc-header">
          <p className="plc-eyebrow">How it works</p>
          <h2 className="plc-headline">One request. Four stages.</h2>
        </div>

        {/* Tab strip */}
        <div className="plc-tabs" role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={active === tab.id}
              onClick={() => setActive(tab.id)}
              className={`plc-tab ${active === tab.id ? "plc-tab-active" : ""}`}
            >
              {tab.label}
              {tab.soon && <span className="plc-tab-soon">soon</span>}
            </button>
          ))}
        </div>

        {/* Stage card */}
        <div className="plc-card" key={active}>
          {/* Corner marks */}
          <span className="plc-cm plc-cm-tl" aria-hidden="true" />
          <span className="plc-cm plc-cm-tr" aria-hidden="true" />
          <span className="plc-cm plc-cm-bl" aria-hidden="true" />
          <span className="plc-cm plc-cm-br" aria-hidden="true" />

          {/* Left — text */}
          <div className="plc-text">
            <p className="plc-stage-eyebrow">{stage.eyebrow}</p>
            <h3 className="plc-stage-headline">{stage.headline}</h3>
            <p className="plc-stage-body">{stage.body}</p>
            <div className="plc-stage-num" aria-hidden="true">{stage.num}</div>
          </div>

          {/* Right — visual */}
          <div className="plc-visual">
            <div className="plc-visual-inner">
              <span className="plc-vcm plc-vcm-tl" aria-hidden="true" />
              <span className="plc-vcm plc-vcm-tr" aria-hidden="true" />
              <span className="plc-vcm plc-vcm-bl" aria-hidden="true" />
              <span className="plc-vcm plc-vcm-br" aria-hidden="true" />
              {stage.diagram}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
