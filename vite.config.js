import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/Vue_treasure/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // 确保根目录文件被正确处理
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
})
