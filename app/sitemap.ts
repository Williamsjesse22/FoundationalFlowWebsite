import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * Only the pages that carry the current positioning.
 *
 * /about and /how-we-work are deliberately left out: they are still written for the
 * earlier general-AI positioning and are not linked from the site, so submitting them
 * would invite search traffic onto copy that contradicts the home page. Add them back
 * here once they are rewritten for remodelers, or delete the pages outright.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/contact"].map((path) => ({ url: `${site.url}${path}` }));
}
