import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '~', replacement: '/src' }
    ]
  },
  build: {
    rollupOptions: {
      input: 'src/main.jsx', // hoặc 'src/main.ts' nếu sử dụng TypeScript
    },
  },
});