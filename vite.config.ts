import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2015', // يضمن كود متوافق ونظيف
    sourcemap: false, // يمنع توليد خرائط المصدر اللي أحياناً تستخدم eval
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
