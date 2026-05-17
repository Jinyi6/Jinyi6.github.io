import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://liu.jinyi.space",
  output: "static",
  integrations: [sitemap()],
});
