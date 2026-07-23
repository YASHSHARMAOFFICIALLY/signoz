import Image from "next/image";

// A real-looking trace waterfall for the checkout path. Durations in ms drive
// the bar widths; cart.price is the slow (hot) span the copilot flags.
const TOTAL = 812; // ms, root span
const SPANS = [
  { name: "POST /checkout", start: 0, dur: 812, depth: 0, hot: false },
  { name: "auth.verify", start: 24, dur: 61, depth: 1, hot: false },
  { name: "db.load_cart", start: 92, dur: 78, depth: 1, hot: false },
  { name: "cart.price", start: 176, dur: 342, depth: 1, hot: true },
  { name: "payment.charge", start: 528, dur: 190, depth: 1, hot: false },
  { name: "email.receipt", start: 724, dur: 71, depth: 2, hot: false },
];

export default function LoginAside() {
  return (
    <aside className="relative hidden overflow-hidden bg-dark lg:flex lg:flex-col lg:justify-between lg:p-12">
      {/* subtle grid + primary glow (background) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
      />

      {/* brand */}
      <div className="relative">
        <span className="font-display text-2xl font-semibold tracking-tight text-white">
          Lumen
        </span>
      </div>

      {/* trace console */}
      <div className="relative w-full max-w-md rounded-xl border border-white/10 bg-white/[0.03] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm">
        {/* header */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <span className="font-mono text-xs text-white/70">
              trace · checkout-service
            </span>
          </div>
          <span className="font-mono text-xs tabular-nums text-white/40">
            {TOTAL}ms
          </span>
        </div>

        {/* waterfall */}
        <div className="px-4 py-3">
          {SPANS.map((s) => (
            <div key={s.name} className="flex items-center gap-3 py-[3px]">
              <span
                className={`w-28 shrink-0 truncate font-mono text-[11px] ${s.hot ? "text-primary" : "text-white/55"}`}
              >
                {s.name}
              </span>
              <div className="relative h-3 flex-1">
                <div
                  className={`absolute top-0 h-full rounded-[2px] ${s.hot ? "bg-primary" : "bg-white/20"}`}
                  style={{
                    left: `${(s.start / TOTAL) * 100}%`,
                    width: `${Math.max((s.dur / TOTAL) * 100, 2)}%`,
                  }}
                />
              </div>
              <span
                className={`w-12 shrink-0 text-right font-mono text-[11px] tabular-nums ${s.hot ? "text-primary" : "text-white/40"}`}
              >
                {s.dur}ms
              </span>
            </div>
          ))}
        </div>

        {/* copilot verdict — mascot as the avatar delivering it */}
        <div className="flex items-start gap-3 border-t border-white/10 bg-primary/[0.06] px-4 py-3">
          <Image
            src="/robot.webp"
            alt="Lumen copilot"
            width={28}
            height={28}
            className="mt-0.5 shrink-0"
          />
          <p className="text-[13px] leading-snug text-white/80">
            <span className="font-mono text-primary">cart.price</span> spent
            342ms in an N+1 query — 6 sequential lookups.{" "}
            <span className="text-white/50">Batch them to cut ~300ms.</span>
          </p>
        </div>
      </div>

      {/* headline */}
      <div className="relative">
        <h2 className="max-w-sm font-display text-3xl font-semibold leading-tight tracking-tight text-white">
          Your AI SRE copilot for SigNoz.
        </h2>
        <p className="mt-3 max-w-sm text-sm text-white/60">
          Reads your traces, logs, and metrics — then tells you exactly what
          broke.
        </p>
      </div>
    </aside>
  );
}
