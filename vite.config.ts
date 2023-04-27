import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4444,
  },
  plugins: [
    react(),
    checker({
      // e.g. use TypeScript check
      typescript: true,
      //      eslint: {
      // for example, lint .ts and .tsx
      //        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      //      },
    }),
  ],
});
