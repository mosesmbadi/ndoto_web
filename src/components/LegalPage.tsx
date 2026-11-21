import { SITE } from "@/lib";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="wrap legal">
      <h1>{title}</h1>
      <p className="muted small">Last updated {SITE.legalUpdated}</p>
      {children}
    </main>
  );
}
