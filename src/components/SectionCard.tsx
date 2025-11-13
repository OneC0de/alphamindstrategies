import type { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  children: ReactNode;
}

export function SectionCard({ title, children }: SectionCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-[rgba(119,118,110,0.35)] bg-white/80 p-4 shadow-sm">
      <h3 className="text-sm font-semibold tracking-wide text-[var(--color-navy)]">
        {title}
      </h3>
      <div className="text-sm text-[var(--color-slate-soft)]">{children}</div>
    </div>
  );
}
