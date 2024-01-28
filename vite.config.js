import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const viteEnv = {};
Object.keys(process.env).forEach((key) => {
  if (key.startsWith('VITE_')) {
    viteEnv[`import.meta.env.${key}`] = process.env[key];
  }
});
export default {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  define: viteEnv,
  plugins: [react()],
};
