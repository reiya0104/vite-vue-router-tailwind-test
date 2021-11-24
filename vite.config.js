import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // 本番時はgithubリポジトリをルートパスにする
  base: process.env.NODE_ENV === 'production' ? '/vite-vue-router-tailwind-test/' : './',
  // resolve: {
  //   // @/ によるimportをできるようにする。
  //   alias: {
  //     '@': path.resolve('__dirname', '/src')
  //   }
  // },
  build: {
    outDir: 'docs'
  },
  plugins: [vue()]
});
