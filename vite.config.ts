import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Force nitro on with Vercel preset for standard Vercel deployments.
  // Inside a Lovable sandbox build, the plugin still forces Cloudflare;
  // this override applies when you deploy from your own CI (Vercel).
  nitro: {
    preset: "vercel",
  },
});
