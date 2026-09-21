import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { transformSync } from "rolldown/utils";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function jsxInJsFiles() {
  return {
    name: "jsx-in-js-files",
    enforce: "pre",
    async transform(code, id) {
      const cleanId = id.split("?")[0];
      if (!cleanId.endsWith(".js") || cleanId.includes("node_modules")) return;
      if (!code.includes("<")) return;
      const result = transformSync(cleanId, code, {
        lang: "jsx",
        sourcemap: true,
        jsx: { runtime: "automatic", importSource: "react" },
      });
      if (result.errors.length > 0) {
        throw new Error(result.errors[0].message);
      }
      return { code: result.code, map: result.map };
    },
  };
}

export default defineConfig({
  plugins: [react(), jsxInJsFiles()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.js"],
    include: ["src/**/*.test.{js,jsx}"],
    css: false,
  },
});
