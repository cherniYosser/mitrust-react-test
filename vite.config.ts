import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //@ts-ignore
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/tests/setup.ts",
  },
  server: {
    proxy: {
      "/api": {
        target: "https://app.m-itrust.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
