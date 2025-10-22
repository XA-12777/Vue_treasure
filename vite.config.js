import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/Vue_treasure/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  resolve: {
    alias: {
      // 确保 Vue 能被正确解析
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  }
})
