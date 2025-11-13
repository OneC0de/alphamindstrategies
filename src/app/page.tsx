import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Strategic Narrative",
    description:
      "Translate complex mandates into decisive storylines that boards, investors, and stakeholders adopt with confidence.",
  },
  {
    title: "Decision Architecture",
    description:
      "Design the frameworks, run of show, and prep needed to help principals make the right call when it matters most.",
  },
  {
    title: "Executive Communications",
    description:
      "Ghostwrite memos, investor notes, and flagship talks with the clarity and rigor of a top-tier editorial room.",
  },
];

const methods = [
  {
    label: "Listen in Stereo",
    detail:
      "We interview your team, customers, and board partners to understand the true dynamics of the room.",
  },
  {
    label: "Pressure-Test",
    detail:
      "Ideas are modeled against market intelligence, scenario planning, and counter-arguments before they leave the draft.",
  },
  {
    label: "Stand Beside You",
    detail:
      "Decks, memos, and facilitation notes arrive ready the night before. We sit in the meeting until the outcome lands.",
  },
];

const focusAreas = [
  "AI / frontier tech venture studios and funds",
  "Climate and critical infrastructure initiatives",
  "Education innovation and human capital policy",
  "Health equity, public health, and care delivery",
];

export default function Home() {
  return (
    <main className="bg-[#f8f4ee] text-[#1a1a1a]">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 pb-24 pt-12 md:px-10 lg:px-16 lg:pt-16">
        <section
          id="hero"
          className="grid gap-10 rounded-3xl border border-[#d6d0c4] bg-white/80 p-8 shadow-[0_35px_80px_-40px_rgba(0,0,0,0.25)] md:grid-cols-[1.1fr,0.9fr] md:p-12"
        >
          <div>
            <div className="mb-8 flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-[#a48c5c]">
              <span className="h-px w-10 bg-[#a48c5c]" aria-hidden />
              Alpha Mind Strategies
            </div>
            <p className="mb-6 text-sm text-[#6b5f4c]">
              Strategic Advisory · Narrative + Communications · Fractional COO
            </p>
            <h1 className="text-serif text-4xl font-semibold leading-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
              Sharp counsel for leaders navigating high-stakes rooms.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[#4a4337]">
              Alpha Mind Strategies partners with founders, investors, and civic
              leaders who need a trusted operator to articulate vision, pressure
              test strategy, and deliver flawlessly. We bring newsroom rigor,
              policy fluency, and boardroom tact to every engagement.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="rounded-full bg-[#224b8f] px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#1a396b]"
              >
                Schedule a working session
              </Link>
              <Link
                href="#what-we-do"
                className="rounded-full border border-[#c4a46a] px-7 py-3 text-sm font-semibold uppercase tracking-wide text-[#6f5933] transition hover:bg-[#fff8ee]"
              >
                Explore the practice
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-8 rounded-2xl bg-[#f8f4ee] p-6">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border border-[#d6d0c4] bg-white p-3">
                <Image
                  src="/alpha-mind-logo.png"
                  alt="Alpha Mind Strategies logo"
                  fill
                  sizes="64px"
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[#7f745c]">
                  Founder / Principal
                </p>
                <p className="text-lg font-semibold text-[#1a1a1a]">
                  Danielle Coleman
                </p>
              </div>
            </div>
            <p className="text-base text-[#4a4337]">
              Former innovation operator, national education advisor, and
              confidante to growth-stage leadership teams. Danielle has guided
              dozens of organizations through mission-critical launches, policy
              negotiations, and capital raises.
            </p>
            <div className="grid gap-4 text-sm text-[#3d3631]">
              <div className="rounded-xl border border-[#d6d0c4] bg-white px-4 py-3">
                Based in Washington, DC · Working globally
              </div>
              <div className="rounded-xl border border-[#d6d0c4] bg-white px-4 py-3">
                Trusted by venture funds, civic labs, and mission-driven CEOs
              </div>
            </div>
          </div>
        </section>

        <section id="what-we-do" className="space-y-12">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.3em] text-[#a48c5c]">
              What we do
            </p>
            <h2 className="text-serif text-3xl font-semibold text-[#1a1a1a] sm:text-4xl">
              We help you think clearly, decide faster, and communicate with
              conviction.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col gap-4 rounded-2xl border border-[#d6d0c4] bg-white/70 p-6 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.45)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#224b8f]">
                  {service.title}
                </p>
                <p className="text-base text-[#3d3631]">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how-we-work" className="grid gap-12 rounded-3xl border border-[#d6d0c4] bg-white/90 p-8 md:p-12">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.3em] text-[#a48c5c]">
              How we work
            </p>
            <h2 className="text-serif text-3xl font-semibold text-[#1a1a1a] sm:text-4xl">
              Modern consulting built for operators who value discretion and
              velocity.
            </h2>
          </div>
          <ol className="space-y-6">
            {methods.map((method, index) => (
              <li key={method.label} className="flex flex-col gap-2 md:flex-row md:gap-6">
                <span className="text-lg font-semibold text-[#c4a46a] md:w-12">
                  0{index + 1}
                </span>
                <div className="flex-1 border-t border-[#d6d0c4] pt-4 md:border-t-0 md:pt-0">
                  <p className="text-lg font-semibold text-[#224b8f]">
                    {method.label}
                  </p>
                  <p className="text-base text-[#3d3631]">{method.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="focus-areas" className="space-y-10">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.3em] text-[#a48c5c]">
              Focus areas
            </p>
            <h2 className="text-serif text-3xl font-semibold text-[#1a1a1a] sm:text-4xl">
              Problems we know deeply.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {focusAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-[#d6d0c4] bg-white px-6 py-5 text-base text-[#3d3631]"
              >
                {area}
              </div>
            ))}
          </div>
        </section>

        <section
          id="danielle"
          className="grid gap-10 rounded-3xl border border-[#d6d0c4] bg-white/80 p-8 md:grid-cols-[1.1fr,0.9fr] md:p-12"
        >
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-[#a48c5c]">
              Danielle M. Coleman
            </p>
            <h2 className="text-serif text-3xl font-semibold text-[#1a1a1a] sm:text-4xl">
              Operator, writer, and strategist trusted by investors, mayors, and
              philanthropists.
            </h2>
            <p className="text-base text-[#3d3631]">
              Danielle leads Alpha Mind Strategies after an executive career
              spanning venture-backed startups, national philanthropy, and
              government innovation labs. She helps principals sharpen their
              instincts, build coalitions, and deliver credible results.
            </p>
            <ul className="space-y-3 text-sm text-[#4a4337]">
              <li>• Former head of strategy and communications for multiple Series B–D teams</li>
              <li>• Architect of multi-state education initiatives reaching 4M learners</li>
              <li>• Advisor to national nonprofits and inclusive capital collaboratives</li>
            </ul>
            <Link
              href="https://www.linkedin.com/in/daniellemcoleman/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#224b8f] hover:text-[#152f5b]"
            >
              View Danielle&apos;s LinkedIn →
            </Link>
          </div>
          <div className="space-y-6 rounded-2xl border border-[#d6d0c4] bg-[#f8f4ee] p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-[#7f745c]">
              Credo
            </p>
            <blockquote className="text-serif text-2xl leading-snug text-[#1a1a1a]">
              “Strategy is not a deck. It’s the discipline of aligning people,
              resources, and words so the future becomes unavoidable.”
            </blockquote>
            <p className="text-sm text-[#4a4337]">
              — Danielle Coleman
            </p>
          </div>
        </section>

        <section id="contact" className="rounded-3xl border border-[#d6d0c4] bg-[#1a1a1a] p-8 text-white md:p-12">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.3em] text-[#c4a46a]">
              Contact
            </p>
            <h2 className="text-serif text-3xl font-semibold text-white sm:text-4xl">
              Ready to pressure-test your next move?
            </h2>
            <p className="text-base text-[#d6d0c4]">
              Tell us about the decision, audience, or moment ahead. We respond
              within two business days with availability for a 45-minute working
              session.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="mailto:hello@alphamindstrategies.com"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-wide text-[#1a1a1a] transition hover:bg-[#f8f4ee]"
            >
              hello@alphamindstrategies.com
            </Link>
            <Link
              href="https://www.linkedin.com/in/daniellemcoleman/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/40 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/10"
            >
              Connect on LinkedIn
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
