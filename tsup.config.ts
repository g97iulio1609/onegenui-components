import { defineConfig } from "tsup";

const isWatch = process.argv.includes("--watch");

export default defineConfig({
  entry: ["src/index.ts", "src/definitions.ts", "src/skills.ts"],
  format: ["cjs", "esm"],
  // Skip DTS in watch mode - declarations are generated during build
  // This avoids race conditions with workspace dependencies
  dts: isWatch ? false : { resolve: false },
  sourcemap: true,
  clean: false,
  external: [
    "react",
    "react-dom",
    "@onegenui/core",
    "@onegenui/react",
    "@onegenui/ui",
    "@onegenui/utils",
    "@onegenui/schemas",
    "zod",
    "lightweight-charts",
    "lucide-react",
    "recharts",
    "clsx",
    "tailwind-merge",
  ],
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});
