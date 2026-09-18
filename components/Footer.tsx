import Link from "next/link";
import { site } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo />
          <p>{site.supportingLine}</p>
        </div>
        <nav aria-label="Footer" className="footer-nav">
          <Link href="/">Home</Link>
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        {site.contactEmail && (
          <div className="footer-contact">
            <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
          </div>
        )}
      </div>
      <div className="container footer-legal">
        <p>
          © {year} {site.legalName}, operating as {site.name}.
        </p>
      </div>
    </footer>
  );
}
