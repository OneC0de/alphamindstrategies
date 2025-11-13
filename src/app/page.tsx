import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionCard } from "@/components/SectionCard";
import { SeoShell } from "@/components/SeoShell";
import type { Metadata } from "next";

const pageSeo = {
  title: "Alpha Mind Strategies",
  description:
    "Alpha Mind Strategies helps organizations operationalize compliance, privacy, and responsible AI for the algorithmic age.",
};

export const metadata: Metadata = {
  ...pageSeo,
  openGraph: {
    title: pageSeo.title,
    description: pageSeo.description,
    url: "https://alphamindstrategies.com",
    siteName: "Alpha Mind Strategies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageSeo.title,
    description: pageSeo.description,
  },
};

const whatWeDo = [
  {
    title: "Compliance & Ethics Programs",
    bullets: [
      "Design and refresh codes of conduct and ethics policies.",
      "Structure hotline workflows and investigation playbooks.",
      "Build internal controls that withstand board and regulatory scrutiny.",
    ],
  },
  {
    title: "Privacy & Data Governance",
    bullets: [
      "CCPA/CPRA-aligned policies and data-mapping practices.",
      "Incident-response playbooks and DPIA support.",
      "Training for product and GTM teams on everyday privacy decisions.",
    ],
  },
  {
    title: "AI & Model Governance",
    bullets: [
      "AI-use policies, human-in-the-loop controls, and review gates.",
      "Risk assessments aligned with emerging AI regulations.",
      "Board and leadership briefing materials on AI risk and opportunity.",
    ],
  },
  {
    title: "Advisory & Special Projects",
    bullets: [
      "Support for GCs/CCOs standing up governance committees.",
      "Product counseling for AI-enabled features and fintech experiences.",
      "Thought-partnership on policy, research, and public positioning.",
    ],
  },
];

const howWeWork = [
  {
    title: "1 · Diagnose",
    body: "Map the current compliance, privacy, and AI landscape to understand live risks, hidden debt, and operational blind spots.",
  },
  {
    title: "2 · Design",
    body: "Translate laws and frameworks into policies, flows, and training embedded inside the product and business rhythms.",
  },
  {
    title: "3 · Deliver",
    body: "Partner through implementation to ensure adoption, auditability, and executive confidence.",
  },
];

const focusAreas = [
  {
    title: "Corporate Compliance",
    copy: "Ethics programs, hotline flows, conflicts management, and compliance committee design.",
  },
  {
    title: "Privacy & Consumer Protection",
    copy: "CCPA/CPRA, FTC/CFPB, card-network, and UDAAP-aligned frameworks for consumer, fintech, and platform businesses.",
  },
  {
    title: "AI & Emerging Technology",
    copy: "Responsible AI governance, algorithmic accountability, and technical risk translation for executives and boards.",
  },
];

const snapshot = [
  "Founder & Principal: Danielle Coleman",
  "Former counsel at Stripe & Super.com",
  "MIT guest lecturer on AI & law",
  "Published scholar on digital colonialism & algorithmic bias",
];

const highlights = [
  "Former Global Payments & Risk Counsel at Stripe",
  "Former Product Counsel at Super.com (fintech, travel, commerce)",
  "J.D., University of Michigan Law School (full-tuition scholar); B.A., Dartmouth College",
  "Research cited 250+ times for work on digital colonialism",
];

export default function HomePage() {
  return (
    <SeoShell {...pageSeo}>
      <div id="top" className="flex min-h-screen flex-col">
        <Navbar />

        <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-16 px-4 py-10 md:px-6 md:py-14">
          <section className="mt-4 flex flex-col gap-6 md:mt-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-cobalt)]">
                Alpha Mind Strategies
              </p>
              <h1 className="text-3xl font-semibold leading-snug tracking-tight text-[var(--color-navy)] md:text-4xl">
                Compliance for the Algorithmic Age.
              </h1>
              <p className="text-sm leading-relaxed text-[var(--color-slate-soft)] md:text-base">
                Alpha Mind Strategies helps legal, risk, and product teams turn{" "}
                <span className="font-medium text-[var(--color-navy)]">
                  AI, privacy, and compliance
                </span>{" "}
                from abstract frameworks into concrete systems—policies,
                training, and controls that actually work in production.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-navy)] px-4 py-2 text-sm font-medium text-[var(--color-ivory)] shadow-sm transition hover:bg-[var(--color-cobalt)]"
                >
                  Schedule a conversation
                </a>
                <p className="text-xs text-[var(--color-slate-soft)]">
                  For GCs, CCOs, and product leaders navigating AI, privacy, and
                  compliance decisions.
                </p>
              </div>
            </div>

            <div className="mt-6 w-full max-w-xs rounded-2xl border border-[rgba(119,118,110,0.35)] bg-white/80 p-4 text-xs text-[var(--color-slate)] md:mt-0">
              <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-cobalt)]">
                Snapshot
              </p>
              <ul className="space-y-1.5">
                {snapshot.map((item) => (
                  <li key={item} className="flex gap-1">
                    <span aria-hidden>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="what-we-do" className="space-y-4">
            <h2 className="text-lg font-semibold text-[var(--color-navy)]">
              What we do
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-[var(--color-slate-soft)]">
              We help organizations operationalize{" "}
              <span className="font-medium">
                compliance, privacy, and AI governance
              </span>{" "}
              so teams can move quickly without creating hidden legal or ethical
              debt. Our work sits at the intersection of{" "}
              <span className="italic">law, systems, and foresight.</span>
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {whatWeDo.map((capability) => (
                <SectionCard key={capability.title} title={capability.title}>
                  <ul className="list-disc space-y-1.5 pl-4">
                    {capability.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </SectionCard>
              ))}
            </div>
          </section>

          <section id="how-we-work" className="space-y-4">
            <h2 className="text-lg font-semibold text-[var(--color-navy)]">
              How we work
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-[var(--color-slate-soft)]">
              Every engagement starts with clarity. We don’t drop a 60-page memo
              and disappear—we co-design systems that your legal, product, and
              data teams can maintain.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              {howWeWork.map((phase) => (
                <SectionCard key={phase.title} title={phase.title}>
                  {phase.body}
                </SectionCard>
              ))}
            </div>
          </section>

          <section id="focus-areas" className="space-y-4">
            <h2 className="text-lg font-semibold text-[var(--color-navy)]">
              Focus areas
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {focusAreas.map((area) => (
                <SectionCard key={area.title} title={area.title}>
                  {area.copy}
                </SectionCard>
              ))}
            </div>
          </section>

          <section id="about" className="space-y-4">
            <h2 className="text-lg font-semibold text-[var(--color-navy)]">
              About Alpha Mind
            </h2>
            <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
              <div className="space-y-3 text-sm leading-relaxed text-[var(--color-slate-soft)]">
                <p>
                  Alpha Mind Strategies is led by{" "}
                  <span className="font-medium text-[var(--color-navy)]">
                    Danielle Coleman
                  </span>
                  , a California-barred attorney and former in-house counsel at
                  Stripe and Super.com. Her work lives at the practical edge of{" "}
                  <span className="font-medium">
                    compliance, privacy, and AI governance
                  </span>
                  .
                </p>
                <p>
                  Danielle has advised startups, public companies, and
                  regulators on payments, consumer-protection, and
                  emerging-technology risk. She is a published scholar on{" "}
                  <span className="font-medium">digital colonialism</span> with
                  forthcoming work on{" "}
                  <span className="font-medium">algorithmic bias</span>, cited
                  by institutions across Europe and Africa.
                </p>
                <p>
                  Alpha Mind bridges deep legal analysis and the realities of
                  shipping products, running platforms, and reporting to boards
                  and regulators. The goal is simple:{" "}
                  <span className="font-medium text-[var(--color-navy)]">
                    build systems people can trust.
                  </span>
                </p>
              </div>
              <div className="rounded-2xl border border-[rgba(119,118,110,0.35)] bg-white/80 p-4 text-xs text-[var(--color-slate)]">
                <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-cobalt)]">
                  Highlights
                </p>
                <ul className="space-y-1.5">
                  {highlights.map((item) => (
                    <li key={item} className="flex gap-1">
                      <span aria-hidden>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="contact" className="space-y-4">
            <h2 className="text-lg font-semibold text-[var(--color-navy)]">
              Contact
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-[var(--color-slate-soft)]">
              For GC, CCO, product, or policy-team inquiries, share a short
              description of your organization and the questions ahead. We
              typically respond within 2–3 business days.
            </p>

            <div className="rounded-2xl border border-[rgba(119,118,110,0.35)] bg-white/80 p-4 text-sm text-[var(--color-slate)]">
              <p className="mb-2">
                Email:{" "}
                <a
                  href="mailto:hello@alphamindstrategies.com"
                  className="font-medium text-[var(--color-cobalt)] underline-offset-2 hover:underline"
                >
                  hello@alphamindstrategies.com
                </a>
              </p>
              <p className="text-xs text-[var(--color-slate-soft)]">
                (Update to your preferred inbox or evolve into a form backed by
                an API route when ready.)
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </SeoShell>
  );
}
