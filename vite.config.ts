import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Company-checker/",  // Base URL for GitHub Pages deployment
  build: {
    outDir: 'dist',  // Output to a dist folder at the root level
    rollupOptions: {
      input: {
        main: './index.html'  // Entry point is the root index.html
      },
    },
  },
});
