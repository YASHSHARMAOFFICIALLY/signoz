import Image from "next/image";

// Faux distributed-trace waterfall — on-theme observability diagram. Pure
// data, rendered as staggered bars; the "hot" span is primary-tinted.
const SPANS = [
  { label: "GET /checkout", offset: 0, width: 96, hot: false },
  { label: "auth.verify", offset: 8, width: 34, hot: false },
  { label: "db.query users", offset: 20, width: 30, hot: false },
  { label: "cart.price", offset: 30, width: 58, hot: true },
  { label: "payment.charge", offset: 52, width: 40, hot: false },
  { label: "email.receipt", offset: 74, width: 20, hot: false },
];

export default function LoginAside() {
  return (
    <aside className="relative hidden overflow-hidden bg-dark lg:flex lg:flex-col lg:justify-between lg:p-12">
      {/* subtle grid + primary glow */}
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
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl"
      />

      {/* brand */}
      <div className="relative">
        <span className="font-display text-2xl font-semibold tracking-tight text-white">
          Lumen
        </span>
      </div>

      {/* center: mascot + trace diagram */}
      <div className="relative flex flex-col gap-8">
        <Image
          src="/robot.webp"
          alt="Lumen copilot mascot"
          width={72}
          height={72}
          className="animate-float-slow drop-shadow-[0_8px_24px_rgba(244,99,42,0.35)]"
        />

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Live trace
          </p>
          <div className="mt-3 space-y-1.5">
            {SPANS.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="h-5 flex-1 overflow-hidden">
                  <div
                    className={`h-full rounded-sm ${s.hot ? "bg-primary" : "bg-white/25"}`}
                    style={{ marginLeft: `${s.offset}%`, width: `${s.width}%` }}
                  />
                </div>
                <span
                  className={`w-32 shrink-0 truncate text-[11px] ${s.hot ? "text-primary" : "text-white/50"}`}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/60">
            <span className="text-white/90">cart.price</span> ran 340ms slow —
            Lumen flagged it before your users did.
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
