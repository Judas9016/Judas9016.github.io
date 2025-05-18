// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import "dotenv/config";
import { animate } from "animejs";
// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://Judas9016.github.io",
});
