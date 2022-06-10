import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import viteCompression from 'vite-plugin-compression'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression({
    verbose: true,
    disable: false,
    threshold: 10240,
    algorithm: 'gzip',
    ext: '.gz',
   }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    https: false,
    proxy: {}
},
build:{
    target: "es2020", //指定es版本,浏览器的兼容性
    outDir: "dist", //指定打包输出路径
    assetsDir: "assets", //指定静态资源存放路径
    cssCodeSplit: true, //css代码拆分,禁用则所有样式保存在一个css里面
    sourcemap: false, //是否构建source map 文件
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
  }
},
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:'@import "@/assets/style/mian.scss";'
      }
    }
  },
  
})
