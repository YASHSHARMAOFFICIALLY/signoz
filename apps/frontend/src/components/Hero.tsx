import Image from "next/image";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

const TRUST = ["Built for Agents of SigNoz Hackathon × WeMakeDevs"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-28 pt-40">
      {/* layered background: warm radial glow + masked dot grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-16 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(60%_50%_at_50%_35%,black,transparent)]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(17,17,20,0.10) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Reveal variant="up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Built on SigNoz + OpenTelemetry
          </span>
        </Reveal>

        <Reveal variant="up" delay={100}>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-heading sm:text-6xl">
            Resolve Incidents{" "}
            <span className="font-display italic text-primary">before</span>{" "}
            your users feel them
          </h1>
        </Reveal>

        <Reveal variant="up" delay={200}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            An AI SRE copilot that reads your traces, logs, and metrics across
            SigNoz and OpenTelemetry — then tells you exactly what broke.
          </p>
        </Reveal>

        <Reveal variant="up" delay={300}>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#"
              className="rounded-full bg-primary px-7 py-3.5 font-semibold text-white shadow-[0_10px_30px_-8px_rgba(244,99,42,0.6)] transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_14px_36px_-8px_rgba(244,99,42,0.7)]"
            >
              Watch Demo
            </a>
            <a
              href="#"
              className="group flex items-center gap-2 rounded-full border border-border bg-surface px-7 py-3.5 font-semibold text-heading transition-colors hover:border-heading/30"
            >
              View on GitHub
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </Reveal>

        <Reveal variant="up" delay={400}>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
            {TRUST.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-primary"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Product mockup — live investigation, original faux UI, no lifted asset */}
      <Reveal variant="up" delay={200} className="relative mx-auto mt-80 max-w-5xl">
        {/* floating robot mascot — top-right of the mockup */}
        <div className="animate-float absolute -right-6 -top-16 z-20 hidden sm:block">
          <Image
            src="/robot.webp"
            alt="Lumen copilot mascot"
            width={130}
            height={130}
            priority
          />
        </div>
        <div className="overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-[0_50px_140px_-45px_rgba(17,17,20,0.4)]">
          {/* window chrome */}
          <div className="flex items-center gap-2 border-b border-border px-5 py-3.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-4 rounded-md bg-body px-3 py-1 text-xs text-muted">
              signoz.io / copilot
            </span>
          </div>

          <div className="grid grid-cols-[200px_1fr] max-sm:grid-cols-1">
            {/* sidebar */}
            <aside className="border-r border-border bg-body/60 p-4 max-sm:hidden">
              <p className="px-2 text-xs font-semibold uppercase tracking-wider text-muted">
                Incidents
              </p>
              <ul className="mt-3 space-y-1 text-left">
                {[
                  ["Checkout latency", true],
                  ["DB connection pool", false],
                  ["Payment 5xx spike", false],
                  ["Cache eviction storm", false],
                ].map(([name, active]) => (
                  <li
                    key={name as string}
                    className={cn(
                      "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm",
                      active
                        ? "bg-surface font-semibold text-heading shadow-sm"
                        : "text-muted",
                    )}
                  >
                    <span
                      className={cn(
                        "h-6 w-6 shrink-0 rounded-md",
                        active ? "bg-primary" : "bg-border",
                      )}
                    />
                    {name}
                  </li>
                ))}
              </ul>
            </aside>

            {/* main panel */}
            <div className="p-6 text-left">
              <div className="flex gap-6 border-b border-border pb-3 text-sm">
                <span className="relative font-semibold text-heading">
                  Investigating
                  <span className="absolute -bottom-3 left-0 h-0.5 w-full rounded-full bg-primary" />
                </span>
                <span className="text-muted">Root cause</span>
              </div>

              <div className="mt-5 space-y-4">
                {/* user prompt */}
                <div className="ml-auto max-w-[75%] rounded-2xl rounded-tr-sm bg-heading px-4 py-2.5 text-sm text-white">
                  Why is checkout p99 latency spiking?
                </div>
                {/* agent working */}
                <div className="max-w-[80%] rounded-2xl rounded-tl-sm border border-border bg-surface px-4 py-3 text-sm text-muted">
                  <p className="mb-3 text-heading">
                    Correlating traces, logs, and metrics…
                  </p>
                  <div className="space-y-2">
                    {[
                      ["Scanned 1.2M spans on SigNoz", "done"],
                      ["Correlated error logs to deploy", "done"],
                      ["Pinpointing slow DB query", "run"],
                    ].map(([label, state]) => (
                      <div key={label} className="flex items-center gap-2.5">
                        <span
                          className={cn(
                            "flex h-4 w-4 items-center justify-center rounded-full",
                            state === "done"
                              ? "bg-primary text-white"
                              : "border-2 border-primary",
                          )}
                        >
                          {state === "done" && (
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                              <path
                                d="M5 13l4 4L19 7"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                          {state === "run" && (
                            <span className="h-1.5 w-1.5 animate-ping rounded-full bg-primary" />
                          )}
                        </span>
                        <span className={cn(state === "run" && "text-heading")}>
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* floating stat card — grid-breaking overlap for depth */}
        <div className="absolute -bottom-5 -right-3 hidden rounded-2xl border border-border bg-surface px-5 py-3 shadow-[0_20px_50px_-20px_rgba(17,17,20,0.3)] sm:block">
          <p className="font-display text-2xl font-semibold text-heading">
            68%
          </p>
          <p className="text-xs text-muted">faster MTTR</p>
        </div>
      </Reveal>
    </section>
  );
}
