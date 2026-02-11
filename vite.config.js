import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    // ⬇️ This converts modern '?' syntax into code the old crawler understands
    target: "es2015",
    // ⬇️ Increases limit to help with those 2MB+ hero image warnings
    chunkSizeWarningLimit: 2000,
  },
});
