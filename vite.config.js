import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/treasure-adventure/',  // ← 添加这一行，替换为你的仓库名
  build: {
    outDir: 'dist',              // ← 添加构建配置
    assetsDir: 'assets'
  }
})
