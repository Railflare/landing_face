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
    <div className="arch-diagram">
      <div className="arch-top-row">
        {/* Left: Business entities with Agent CLI */}
        <div className="arch-business-col">
          <div className="arch-business-row">
            <div className="arch-business-box">
              <span className="arch-label">Business</span>
            </div>
            <div className="arch-agent-cli-box">
              <span className="arch-label">Agent CLI</span>
            </div>
          </div>
          <div className="arch-business-row">
            <div className="arch-business-box">
              <span className="arch-label">Business 02</span>
            </div>
            <div className="arch-agent-cli-box">
              <span className="arch-label">Agent CLI</span>
            </div>
          </div>
          <div className="arch-business-row">
            <div className="arch-business-box">
              <span className="arch-label">Business 03</span>
            </div>
            <div className="arch-agent-cli-box">
              <span className="arch-label">Agent CLI</span>
            </div>
          </div>
        </div>

        {/* Merchant-Side Interceptor */}
        <div className="arch-interceptor-col">
          <div className="arch-interceptor-box">
            <span className="arch-interceptor-label">Merchant-Side<br/>Interceptor</span>
          </div>
        </div>

        {/* Center: Protocols & Gateways */}
        <div className="arch-protocols-col">
          <div className="arch-protocols-box">
            <div className="arch-protocols-header">
              <span className="arch-label">Protocols & Rail</span>
            </div>
            <div className="arch-protocols-grid">
              <div className="arch-protocol-item">
                <span>API</span>
              </div>
              <div className="arch-protocol-item">
                <span>Stripe</span>
              </div>
              <div className="arch-protocol-item">
                <span>UCP</span>
              </div>
              <div className="arch-protocol-item">
                <span>Krampayments</span>
              </div>
              <div className="arch-protocol-item">
                <span>x402<br/>standard</span>
              </div>
            </div>
          </div>
          <div className="arch-gateways-box">
            <span className="arch-label">Gateways</span>
          </div>
        </div>

        {/* Buyer Side Interceptor */}
        <div className="arch-interceptor-col">
          <div className="arch-interceptor-box">
            <span className="arch-interceptor-label">Buyer Side<br/>Interceptor</span>
          </div>
        </div>

        {/* Right: Agent boxes */}
        <div className="arch-agents-col">
          <div className="arch-agent-box">
            <div className="arch-agent-window" />
            <span className="arch-label">Agent Z</span>
          </div>
          <div className="arch-agent-box">
            <div className="arch-agent-window" />
            <span className="arch-label">Agent X</span>
          </div>
        </div>
      </div>

      {/* Flow arrows */}
      <div className="arch-flow-arrows">
        <div className="arch-arrow-group" />
        <div className="arch-arrow-group arch-arrow-multi">
          <span>↓</span><span>↓</span><span>↓</span><span>↓</span>
          <span>↓</span><span>↓</span><span>↓</span><span>↓</span>
        </div>
        <div className="arch-arrow-group" />
      </div>

      {/* Bottom label */}
      <div className="arch-bottom-label">
        <span>Railflare Intercept</span>
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
    headline: "Every payment request. Caught before it clears.",
    body: "Railflare sits between your agent and the payment rail. Before a single token moves, every outbound request passes through our interception layer — surfacing protocol, identity, and intent.",
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
