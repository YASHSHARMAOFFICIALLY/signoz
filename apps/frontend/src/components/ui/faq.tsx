"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "Which telemetry sources does it read?",
    answer:
      "Traces, logs, and metrics from any OpenTelemetry-instrumented service, queried through your existing SigNoz backend. No new agents to deploy.",
  },
  {
    question: "Do I have to replace my current SigNoz setup?",
    answer:
      "No. The copilot reads from the SigNoz instance you already run — it adds an investigation layer on top rather than replacing your pipeline.",
  },
  {
    question: "How does it actually find root cause?",
    answer:
      "It correlates latency outliers in traces against error signatures in logs and resource metrics over the same window, then ranks the spans most likely responsible.",
  },
  {
    question: "Does my telemetry data leave my infrastructure?",
    answer:
      "Queries run against your own SigNoz deployment. Only the summarized findings surface in the copilot — raw spans and logs stay where they are.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto flex max-w-xl flex-col px-4">
      <p className="text-center text-sm font-semibold text-primary">FAQ</p>
      <h2 className="mt-2 text-center text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
        Questions, <span className="font-display italic text-primary">answered</span>
      </h2>
      <p className="mx-auto mt-4 max-w-md pb-8 text-center text-muted">
        What on-call engineers ask before wiring the copilot into their stack.
      </p>

      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={faq.question} className="border-b border-border">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left"
            >
              <h3 className="text-base font-semibold text-heading">
                {faq.question}
              </h3>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden
                className={cn(
                  "shrink-0 text-muted transition-transform duration-500 ease-in-out",
                  isOpen && "rotate-180",
                )}
              >
                <path
                  d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <p
              className={cn(
                "max-w-md overflow-hidden text-sm text-muted transition-all duration-500 ease-in-out",
                isOpen
                  ? "max-h-[300px] translate-y-0 pb-4 opacity-100"
                  : "max-h-0 -translate-y-2 opacity-0",
              )}
            >
              {faq.answer}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Faq;
