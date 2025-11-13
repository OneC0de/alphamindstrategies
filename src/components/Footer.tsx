export function Footer() {
  return (
    <footer className="border-t border-[rgba(119,118,110,0.3)] bg-[var(--color-ivory)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-6 text-sm text-[var(--color-slate-soft)] md:flex-row md:items-center md:justify-between md:px-6">
        <p>
          © {new Date().getFullYear()} Alpha Mind Strategies. All rights
          reserved.
        </p>
        <p className="text-xs">
          Legal &amp; AI Governance · Compliance · Privacy
        </p>
      </div>
    </footer>
  );
}
