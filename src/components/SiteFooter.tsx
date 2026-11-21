import Link from "next/link";
import { LEGAL_LINKS, SITE } from "@/lib";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <nav className="legal-links" aria-label="Legal">
          {LEGAL_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
          <a href={`mailto:${SITE.supportEmail}`}>Contact</a>
        </nav>
        <p className="muted small">© {new Date().getFullYear()} {SITE.company}. Ndoto is for adults 18 and over.</p>
      </div>
    </footer>
  );
}
