import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      all: true,
      clean: true,
      exclude: [
        "**/.cache",
        "**/.temp",
        "**/node_modules",
        "dist",
        "public",
        "coverage/**",
        "**/Router/*",
        "packages/*/test{,s}/**",
        "**/*.d.ts",
        "test{,s}*{.,-}test.{js,cjs,mjs,ts,tsx,jsx}",
        "**/*.{test,spec}.*",
        "**/{ava,babel,nyc}.config.{js,cjs,mjs}",
        "**/{jest}.config.{js,cjs,mjs,ts}",
        "**/**?(.)config.{js,cjs,mjs,ts}",
        "**/{{A,a}pp,main}.?(module.){js,cjs,mjs,ts,vue}",
        "**/{karma,rollup,webpack}.config.js",
        "**/.{eslint,mocha}rc.{js,cjs}",
        /** custom files */
        "**/interfaces.ts",
      ],
    },
  },
  resolve: {
    alias: {
      "@client": path.resolve(__dirname, "src", "client"),
      "@world": path.resolve(__dirname, "src", "world"),
    },
    extensions: [".js", ".json", ".mjs", ".ts", ".tsx"], // must not contain .vue
  },
});
