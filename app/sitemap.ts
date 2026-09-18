import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", ...site.nav.map((n) => n.href)].map((path) => ({ url: `${site.url}${path}` }));
}
