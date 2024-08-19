import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Company-checker/",  // Base URL for GitHub Pages deployment
  root: 'src',  // Set the root to the src directory
  build: {
    outDir: '../dist',  // Output to a dist folder outside of src
    rollupOptions: {
      input: {
        main: './index.html'  // Ensure Vite knows where the entry HTML file is
      },
    },
  },
});
