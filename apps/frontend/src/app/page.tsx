import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { AgentBentoGrid } from "@/components/ui/agent-bento-grid";
import { Faq } from "@/components/ui/faq";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section className="px-4 pb-28">
          <div className="mx-auto max-w-5xl">
            <Reveal variant="up">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
                  Everything your{" "}
                  <span className="font-display italic text-primary">
                    on-call
                  </span>{" "}
                  team needs
                </h2>
                <p className="mt-4 text-lg text-muted">
                  From alert to root cause — traces, logs, and metrics
                  correlated in one place.
                </p>
              </div>
            </Reveal>

            <Reveal variant="up" delay={100} className="mt-12">
              <AgentBentoGrid />
            </Reveal>
          </div>
        </section>

        <section className="px-4 pb-28">
          <Reveal variant="up">
            <Faq />
          </Reveal>
        </section>
      </main>
    </>
  );
}
