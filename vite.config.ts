import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";

const pagesEnabled = process.env.GITHUB_PAGES === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const pagesBasePath = repositoryName ? `/${repositoryName}/` : "/";

export default defineConfig({
  base: pagesEnabled ? pagesBasePath : "/",
  plugins: [
    tailwindcss(),
    tanstackStart({
      spa: { enabled: true },
      prerender: { enabled: true, crawlLinks: true },
    }),
    viteReact(),
  ],
  resolve: {
    tsconfigPaths: true
  }
});
