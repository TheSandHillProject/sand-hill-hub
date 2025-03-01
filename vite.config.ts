import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/sand-hill-hub",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
