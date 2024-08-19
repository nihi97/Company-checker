import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Company-checker/",  // Adjust this to match your GitHub Pages subdirectory
  build: {
    rollupOptions: {
      // Output settings will be handled by Vite; no need to manually specify these.
    },
  },
});
