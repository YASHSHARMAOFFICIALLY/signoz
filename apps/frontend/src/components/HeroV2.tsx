import Image from "next/image";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

const TRUST = "Built for Agents of SigNoz Hackathon × WeMakeDevs";

export default function HeroV2() {
  return (
    <section className="relative overflow-hidden px-4 pb-28 pt-40">
      {/* layered background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-24 h-[560px] w-[560px] translate-x-1/4 rounded-full bg-primary/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(70%_60%_at_70%_30%,black,transparent)]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(17,17,20,0.10) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* LEFT — copy */}
        <div className="text-left">
          <Reveal variant="right">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Built on SigNoz + OpenTelemetry
            </span>
          </Reveal>

          <Reveal variant="right" delay={100}>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight text-heading sm:text-6xl lg:text-7xl">
              Resolve incidents{" "}
              <span className="font-display italic text-primary">before</span>{" "}
              your users feel them
            </h1>
          </Reveal>

          <Reveal variant="right" delay={200}>
            <p className="mt-6 max-w-lg text-lg text-muted">
              An AI SRE copilot that reads your traces, logs, and metrics across
              SigNoz and OpenTelemetry — then tells you exactly what broke.
            </p>
          </Reveal>

          <Reveal variant="right" delay={300}>
            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
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

          <Reveal variant="right" delay={400}>
            <div className="mt-8 flex items-center gap-2 text-sm text-muted">
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
              {TRUST}
            </div>
          </Reveal>
        </div>

        {/* RIGHT — floating investigation visual */}
        <Reveal variant="left" delay={200} className="relative">
          {/* floating robot mascot + speech bubble */}
          <div className="animate-float absolute -right-4 -top-16 z-20 hidden sm:block">
            <Image
              src="/robot.webp"
              alt="Lumen copilot mascot"
              width={130}
              height={130}
              priority
            />
          </div>
          <div className="animate-float-slow absolute -left-2 -top-6 z-10 rounded-2xl rounded-bl-sm bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg">
            Investigating…
          </div>

          {/* floating MTTR pill */}
          <div className="animate-float-slow absolute -right-3 top-24 z-10 rounded-2xl border border-border bg-surface px-4 py-2.5 shadow-[0_20px_50px_-20px_rgba(17,17,20,0.3)]">
            <p className="font-display text-xl font-semibold text-heading">
              68%
            </p>
            <p className="text-xs text-muted">faster MTTR</p>
          </div>

          {/* investigation card */}
          <div className="overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-[0_50px_140px_-45px_rgba(17,17,20,0.4)]">
            <div className="flex items-center gap-2 border-b border-border px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-4 rounded-md bg-body px-3 py-1 text-xs text-muted">
                signoz.io / copilot
              </span>
            </div>

            <div className="p-6 text-left">
              <div className="flex gap-6 border-b border-border pb-3 text-sm">
                <span className="relative font-semibold text-heading">
                  Investigating
                  <span className="absolute -bottom-3 left-0 h-0.5 w-full rounded-full bg-primary" />
                </span>
                <span className="text-muted">Root cause</span>
              </div>

              <div className="mt-5 space-y-4">
                <div className="ml-auto max-w-[75%] rounded-2xl rounded-tr-sm bg-heading px-4 py-2.5 text-sm text-white">
                  Why is checkout p99 latency spiking?
                </div>
                <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-border bg-surface px-4 py-3 text-sm text-muted">
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
        </Reveal>
      </div>
    </section>
  );
}
