import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="foot">
      <span>
        © {new Date().getFullYear()} {site.legalName}
      </span>
      <span>{site.location}</span>
    </footer>
  );
}
