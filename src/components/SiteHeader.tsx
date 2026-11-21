import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap row between">
        <Link href="/" aria-label="Ndoto home">
          <img src="/wordmark.png" alt="Ndoto" className="wordmark" />
        </Link>
        <nav className="row gap">
          <Link href="/#how">How it works</Link>
          <Link href="/#safety">Safety</Link>
        </nav>
      </div>
    </header>
  );
}
