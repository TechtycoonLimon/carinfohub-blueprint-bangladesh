
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Latest Lovable template for vite.config.ts
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",            // Ensures proper dev server access
    port: 8080,            // Keep your custom port if desired
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(), // Only enable tagger in dev
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
}));
