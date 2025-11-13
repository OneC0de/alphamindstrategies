import type { ReactNode } from "react";

interface SeoShellProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function SeoShell({ title, description, children }: SeoShellProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: title,
    description,
    url: "https://alphamindstrategies.com",
    areaServed: "Global",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="bg-[var(--color-ivory)] text-[var(--color-navy)]">
        {children}
      </div>
    </>
  );
}
