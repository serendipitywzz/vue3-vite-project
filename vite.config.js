/*
 * @Author: 
 * @Date: 2022-06-29 14:10:21
 * @LastEditors: 
 * @LastEditTime: 2022-06-29 20:21:17
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite";
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
// import viteCompression from 'vite-plugin-compression'
import legacyPlugin from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  server: {
    host: "0.0.0.0",
    port: 8080,
    open: true,
    https: false,
    proxy: {
      "/api": {
        target: "http://http://39.106.114.130:90/",
        changeOrigin: true,
      }
    }
  },
  resolve: {
    alias: {
      "@": "/src",
      store: "/src/store",
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
      eslintrc: {
        enabled: false,
      },
    }),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
    // viteCompression({
    //   verbose: true,
    //   disable: false,
    //   threshold: 10,
    //   algorithm: 'gzip',
    //   ext: '.zip',
    //   deleteOriginFile: true
    // }),
    legacyPlugin({
      targets: ['chrome 52'], // 需要兼容的目标列表，可以设置多个
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'] // 面向IE11时需要此插件
    }),
  ],
  // css: {
  //   // css预处理器
  //   preprocessorOptions: {
  //     scss: {
  //       charset: false,
  //       /* .scss全局预定义变量，引入多个文件 以;(分号分割)*/
  //       additionalData: "@import './src/assets/style/global.scss'",
  //     },
  //   },
  // },
  build: {
    assetsDir: "./",
    outDir: "dist",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      }
    }
  }
})
