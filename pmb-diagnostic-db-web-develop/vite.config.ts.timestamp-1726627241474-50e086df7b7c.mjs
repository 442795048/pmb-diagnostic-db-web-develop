// vite.config.ts
import vue from "file:///C:/Users/yang/Desktop/%E9%98%BF%E6%96%AF%E5%88%A9%E5%BA%B7/%E4%BB%A3%E7%A0%81/pmb-diagnostic-db-web-develop/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/Users/yang/Desktop/%E9%98%BF%E6%96%AF%E5%88%A9%E5%BA%B7/%E4%BB%A3%E7%A0%81/pmb-diagnostic-db-web-develop/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { loadEnv, defineConfig } from "file:///C:/Users/yang/Desktop/%E9%98%BF%E6%96%AF%E5%88%A9%E5%BA%B7/%E4%BB%A3%E7%A0%81/pmb-diagnostic-db-web-develop/node_modules/vite/dist/node/index.js";
import AutoImport from "file:///C:/Users/yang/Desktop/%E9%98%BF%E6%96%AF%E5%88%A9%E5%BA%B7/%E4%BB%A3%E7%A0%81/pmb-diagnostic-db-web-develop/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/yang/Desktop/%E9%98%BF%E6%96%AF%E5%88%A9%E5%BA%B7/%E4%BB%A3%E7%A0%81/pmb-diagnostic-db-web-develop/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///C:/Users/yang/Desktop/%E9%98%BF%E6%96%AF%E5%88%A9%E5%BA%B7/%E4%BB%A3%E7%A0%81/pmb-diagnostic-db-web-develop/node_modules/unplugin-vue-components/dist/resolvers.js";
import Icons from "file:///C:/Users/yang/Desktop/%E9%98%BF%E6%96%AF%E5%88%A9%E5%BA%B7/%E4%BB%A3%E7%A0%81/pmb-diagnostic-db-web-develop/node_modules/unplugin-icons/dist/vite.js";
import IconsResolver from "file:///C:/Users/yang/Desktop/%E9%98%BF%E6%96%AF%E5%88%A9%E5%BA%B7/%E4%BB%A3%E7%A0%81/pmb-diagnostic-db-web-develop/node_modules/unplugin-icons/dist/resolver.js";
import { createSvgIconsPlugin } from "file:///C:/Users/yang/Desktop/%E9%98%BF%E6%96%AF%E5%88%A9%E5%BA%B7/%E4%BB%A3%E7%A0%81/pmb-diagnostic-db-web-develop/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import mockDevServerPlugin from "file:///C:/Users/yang/Desktop/%E9%98%BF%E6%96%AF%E5%88%A9%E5%BA%B7/%E4%BB%A3%E7%A0%81/pmb-diagnostic-db-web-develop/node_modules/vite-plugin-mock-dev-server/dist/index.js";
import UnoCSS from "file:///C:/Users/yang/Desktop/%E9%98%BF%E6%96%AF%E5%88%A9%E5%BA%B7/%E4%BB%A3%E7%A0%81/pmb-diagnostic-db-web-develop/node_modules/unocss/dist/vite.mjs";
import { resolve } from "path";

// package.json
var name = "pmb-diagnostic-db";
var version = "0.0.1";
var dependencies = {
  "@element-plus/icons-vue": "^2.3.1",
  "@vueuse/core": "^10.11.0",
  "@wangeditor/editor": "^5.1.23",
  "@wangeditor/editor-for-vue": "5.1.10",
  "animate.css": "^4.1.1",
  axios: "^1.7.2",
  color: "^4.2.3",
  echarts: "^5.5.1",
  "element-plus": "^2.7.6",
  exceljs: "^4.4.0",
  lodash: "^4.17.21",
  "lodash-es": "^4.17.21",
  net: "^1.0.2",
  nprogress: "^0.2.0",
  "path-browserify": "^1.0.1",
  "path-to-regexp": "^6.2.2",
  pinia: "^2.1.7",
  screenfull: "^6.0.2",
  "sockjs-client": "1.6.1",
  sortablejs: "^1.15.2",
  stompjs: "^2.3.3",
  vue: "^3.4.31",
  "vue-i18n": "9.9.1",
  "vue-router": "^4.4.0"
};
var devDependencies = {
  "@commitlint/cli": "^18.6.1",
  "@commitlint/config-conventional": "^18.6.3",
  "@iconify-json/ep": "^1.1.15",
  "@types/color": "^3.0.6",
  "@types/lodash": "^4.17.6",
  "@types/node": "^20.14.10",
  "@types/nprogress": "^0.2.3",
  "@types/path-browserify": "^1.0.2",
  "@types/sockjs-client": "^1.5.4",
  "@types/sortablejs": "^1.15.8",
  "@types/stompjs": "^2.3.9",
  "@typescript-eslint/eslint-plugin": "^7.15.0",
  "@typescript-eslint/parser": "^7.15.0",
  "@vitejs/plugin-vue": "^5.0.5",
  "@vitejs/plugin-vue-jsx": "^3.1.0",
  autoprefixer: "^10.4.19",
  commitizen: "^4.3.0",
  "cz-git": "^1.9.3",
  eslint: "^8.57.0",
  "eslint-config-prettier": "^9.1.0",
  "eslint-plugin-import": "^2.29.1",
  "eslint-plugin-prettier": "^5.1.3",
  "eslint-plugin-vue": "^9.27.0",
  "fast-glob": "^3.3.2",
  husky: "^9.0.11",
  "lint-staged": "^15.2.7",
  postcss: "^8.4.39",
  "postcss-html": "^1.7.0",
  "postcss-scss": "^4.0.9",
  prettier: "^3.3.2",
  sass: "^1.77.6",
  stylelint: "^16.6.1",
  "stylelint-config-html": "^1.1.0",
  "stylelint-config-recess-order": "^4.6.0",
  "stylelint-config-recommended-scss": "^14.0.0",
  "stylelint-config-recommended-vue": "^1.5.0",
  "stylelint-config-standard": "^36.0.1",
  terser: "^5.31.1",
  typescript: "^5.5.3",
  unocss: "^0.58.9",
  "unplugin-auto-import": "^0.17.6",
  "unplugin-icons": "^0.18.5",
  "unplugin-vue-components": "^0.26.0",
  vite: "^5.4.2",
  "vite-plugin-mock-dev-server": "^1.5.1",
  "vite-plugin-svg-icons": "^2.0.1",
  "vite-plugin-vue-devtools": "^7.3.5",
  "vue-tsc": "^2.0.26"
};
var engines = {
  node: ">=18.0.0"
};

// vite.config.ts
var __vite_injected_original_dirname = "C:\\Users\\yang\\Desktop\\\u963F\u65AF\u5229\u5EB7\\\u4EE3\u7801\\pmb-diagnostic-db-web-develop";
var __APP_INFO__ = {
  pkg: { name, version, engines, dependencies, devDependencies },
  buildTimestamp: Date.now()
};
var pathSrc = resolve(__vite_injected_original_dirname, "src");
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    resolve: {
      alias: {
        "@": pathSrc
      }
    },
    css: {
      // CSS 预处理器
      preprocessorOptions: {
        // 定义全局 SCSS 变量
        scss: {
          javascriptEnabled: true,
          additionalData: `
            @use "@/styles/variables.scss" as *;
          `
        }
      }
    },
    server: {
      // 允许IP访问
      host: "0.0.0.0",
      // 应用端口 (默认:3000)
      port: Number(env.VITE_APP_PORT),
      // 运行是否自动打开浏览器
      open: true,
      proxy: {
        /** 代理前缀为 /dev-api 的请求  */
        [env.VITE_APP_BASE_API]: {
          changeOrigin: true,
          // 接口地址
          target: env.VITE_APP_API_URL,
          secure: false,
          rewrite: (path) => path.replace(new RegExp("^" + env.VITE_APP_BASE_API), "")
        }
      }
    },
    plugins: [
      vue(),
      // jsx、tsx语法支持
      vueJsx(),
      // MOCK 服务
      env.VITE_MOCK_DEV_SERVER === "true" ? mockDevServerPlugin() : null,
      UnoCSS({
        hmrTopLevelAwait: false
      }),
      // 自动导入参考： https://github.com/sxzz/element-plus-best-practices/blob/main/vite.config.ts
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ["vue", "@vueuse/core", "pinia", "vue-router", "vue-i18n"],
        resolvers: [
          // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({})
        ],
        eslintrc: {
          // 是否自动生成 eslint 规则，建议生成之后设置 false
          enabled: false,
          // 指定自动导入函数 eslint 规则的文件
          filepath: "./.eslintrc-auto-import.json",
          globalsPropValue: true
        },
        // 是否在 vue 模板中自动导入
        vueTemplate: true,
        // 指定自动导入函数TS类型声明文件路径 (false:关闭自动生成)
        dts: false
        // dts: "src/types/auto-imports.d.ts",
      }),
      Components({
        resolvers: [
          // 自动导入 Element Plus 组件
          ElementPlusResolver(),
          // 自动注册图标组件
          IconsResolver({
            // element-plus图标库，其他图标库 https://icon-sets.iconify.design/
            enabledCollections: ["ep"]
          })
        ],
        // 指定自定义组件位置(默认:src/components)
        dirs: ["src/components", "src/**/components"],
        // 指定自动导入组件TS类型声明文件路径 (false:关闭自动生成)
        dts: false
        // dts: "src/types/components.d.ts",
      }),
      Icons({
        // 自动安装图标库
        autoInstall: true
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(pathSrc, "assets/icons")],
        // 指定symbolId格式
        symbolId: "icon-[dir]-[name]"
      })
      /* VueDevTools({
        openInEditorHost: `http://localhost:${env.VITE_APP_PORT}`,
      }), */
    ],
    // 预加载项目必需的组件
    optimizeDeps: {
      include: [
        "vue",
        "vue-router",
        "pinia",
        "axios",
        "@vueuse/core",
        "sortablejs",
        "path-to-regexp",
        "echarts",
        "@wangeditor/editor",
        "@wangeditor/editor-for-vue",
        "vue-i18n",
        "path-browserify",
        "element-plus/es/components/form/style/css",
        "element-plus/es/components/form-item/style/css",
        "element-plus/es/components/button/style/css",
        "element-plus/es/components/input/style/css",
        "element-plus/es/components/input-number/style/css",
        "element-plus/es/components/switch/style/css",
        "element-plus/es/components/upload/style/css",
        "element-plus/es/components/menu/style/css",
        "element-plus/es/components/col/style/css",
        "element-plus/es/components/icon/style/css",
        "element-plus/es/components/row/style/css",
        "element-plus/es/components/tag/style/css",
        "element-plus/es/components/dialog/style/css",
        "element-plus/es/components/loading/style/css",
        "element-plus/es/components/radio/style/css",
        "element-plus/es/components/radio-group/style/css",
        "element-plus/es/components/popover/style/css",
        "element-plus/es/components/scrollbar/style/css",
        "element-plus/es/components/tooltip/style/css",
        "element-plus/es/components/dropdown/style/css",
        "element-plus/es/components/dropdown-menu/style/css",
        "element-plus/es/components/dropdown-item/style/css",
        "element-plus/es/components/sub-menu/style/css",
        "element-plus/es/components/menu-item/style/css",
        "element-plus/es/components/divider/style/css",
        "element-plus/es/components/card/style/css",
        "element-plus/es/components/link/style/css",
        "element-plus/es/components/breadcrumb/style/css",
        "element-plus/es/components/breadcrumb-item/style/css",
        "element-plus/es/components/table/style/css",
        "element-plus/es/components/tree-select/style/css",
        "element-plus/es/components/table-column/style/css",
        "element-plus/es/components/select/style/css",
        "element-plus/es/components/option/style/css",
        "element-plus/es/components/pagination/style/css",
        "element-plus/es/components/tree/style/css",
        "element-plus/es/components/alert/style/css",
        "element-plus/es/components/radio-button/style/css",
        "element-plus/es/components/checkbox-group/style/css",
        "element-plus/es/components/checkbox/style/css",
        "element-plus/es/components/tabs/style/css",
        "element-plus/es/components/tab-pane/style/css",
        "element-plus/es/components/rate/style/css",
        "element-plus/es/components/date-picker/style/css",
        "element-plus/es/components/notification/style/css",
        "element-plus/es/components/image/style/css",
        "element-plus/es/components/statistic/style/css",
        "element-plus/es/components/watermark/style/css",
        "element-plus/es/components/config-provider/style/css",
        "element-plus/es/components/text/style/css",
        "element-plus/es/components/drawer/style/css",
        "element-plus/es/components/color-picker/style/css",
        "element-plus/es/components/backtop/style/css",
        "element-plus/es/components/message-box/style/css",
        "element-plus/es/components/skeleton/style/css",
        "element-plus/es/components/skeleton/style/css",
        "element-plus/es/components/skeleton-item/style/css",
        "element-plus/es/components/badge/style/css"
      ]
    },
    // 构建配置
    build: {
      chunkSizeWarningLimit: 2e3,
      // 消除打包大小超过500kb警告
      minify: "terser",
      // Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效
      terserOptions: {
        compress: {
          keep_infinity: true,
          // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
          drop_console: true,
          // 生产环境去除 console
          drop_debugger: true
          // 生产环境去除 debugger
        },
        format: {
          comments: false
          // 删除注释
        }
      },
      rollupOptions: {
        output: {
          // manualChunks: {
          //   "vue-i18n": ["vue-i18n"],
          // },
          // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
          entryFileNames: "js/[name].[hash].js",
          // 用于命名代码拆分时创建的共享块的输出命名
          chunkFileNames: "js/[name].[hash].js",
          // 用于输出静态资源的命名，[ext]表示文件扩展名
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split(".");
            let extType = info[info.length - 1];
            if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
              extType = "media";
            } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
              extType = "img";
            } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
              extType = "fonts";
            }
            return `${extType}/[name].[hash].[ext]`;
          }
        }
      }
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxceWFuZ1xcXFxEZXNrdG9wXFxcXFx1OTYzRlx1NjVBRlx1NTIyOVx1NUVCN1xcXFxcdTRFRTNcdTc4MDFcXFxccG1iLWRpYWdub3N0aWMtZGItd2ViLWRldmVsb3BcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHlhbmdcXFxcRGVza3RvcFxcXFxcdTk2M0ZcdTY1QUZcdTUyMjlcdTVFQjdcXFxcXHU0RUUzXHU3ODAxXFxcXHBtYi1kaWFnbm9zdGljLWRiLXdlYi1kZXZlbG9wXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy95YW5nL0Rlc2t0b3AvJUU5JTk4JUJGJUU2JTk2JUFGJUU1JTg4JUE5JUU1JUJBJUI3LyVFNCVCQiVBMyVFNyVBMCU4MS9wbWItZGlhZ25vc3RpYy1kYi13ZWItZGV2ZWxvcC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuaW1wb3J0IHZ1ZUpzeCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlLWpzeFwiO1xuaW1wb3J0IHsgVXNlckNvbmZpZywgQ29uZmlnRW52LCBsb2FkRW52LCBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tIFwidW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZVwiO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGVcIjtcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzXCI7XG5pbXBvcnQgSWNvbnMgZnJvbSBcInVucGx1Z2luLWljb25zL3ZpdGVcIjtcbmltcG9ydCBJY29uc1Jlc29sdmVyIGZyb20gXCJ1bnBsdWdpbi1pY29ucy9yZXNvbHZlclwiO1xuXG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gXCJ2aXRlLXBsdWdpbi1zdmctaWNvbnNcIjtcbmltcG9ydCBtb2NrRGV2U2VydmVyUGx1Z2luIGZyb20gXCJ2aXRlLXBsdWdpbi1tb2NrLWRldi1zZXJ2ZXJcIjtcblxuaW1wb3J0IFVub0NTUyBmcm9tIFwidW5vY3NzL3ZpdGVcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHtcbiAgbmFtZSxcbiAgdmVyc2lvbixcbiAgZW5naW5lcyxcbiAgZGVwZW5kZW5jaWVzLFxuICBkZXZEZXBlbmRlbmNpZXMsXG59IGZyb20gXCIuL3BhY2thZ2UuanNvblwiO1xuXG4vLyBodHRwczovL2RldnRvb2xzLW5leHQudnVlanMub3JnL1xuaW1wb3J0IFZ1ZURldlRvb2xzIGZyb20gXCJ2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHNcIjtcblxuLyoqIFx1NUU3M1x1NTNGMFx1NzY4NFx1NTQwRFx1NzlGMFx1MzAwMVx1NzI0OFx1NjcyQ1x1MzAwMVx1OEZEMFx1ODg0Q1x1NjI0MFx1OTcwMFx1NzY4NGBub2RlYFx1NzI0OFx1NjcyQ1x1MzAwMVx1NEY5RFx1OEQ1Nlx1MzAwMVx1Njc4NFx1NUVGQVx1NjVGNlx1OTVGNFx1NzY4NFx1N0M3Qlx1NTc4Qlx1NjNEMFx1NzkzQSAqL1xuY29uc3QgX19BUFBfSU5GT19fID0ge1xuICBwa2c6IHsgbmFtZSwgdmVyc2lvbiwgZW5naW5lcywgZGVwZW5kZW5jaWVzLCBkZXZEZXBlbmRlbmNpZXMgfSxcbiAgYnVpbGRUaW1lc3RhbXA6IERhdGUubm93KCksXG59O1xuXG5jb25zdCBwYXRoU3JjID0gcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpO1xuLy8gIGh0dHBzOi8vY24udml0ZWpzLmRldi9jb25maWdcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH06IENvbmZpZ0Vudik6IFVzZXJDb25maWcgPT4ge1xuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCkpO1xuICByZXR1cm4ge1xuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgIFwiQFwiOiBwYXRoU3JjLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNzczoge1xuICAgICAgLy8gQ1NTIFx1OTg4NFx1NTkwNFx1NzQwNlx1NTY2OFxuICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgICAvLyBcdTVCOUFcdTRFNDlcdTUxNjhcdTVDNDAgU0NTUyBcdTUzRDhcdTkxQ0ZcbiAgICAgICAgc2Nzczoge1xuICAgICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlLFxuICAgICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgXG4gICAgICAgICAgICBAdXNlIFwiQC9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIiBhcyAqO1xuICAgICAgICAgIGAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgc2VydmVyOiB7XG4gICAgICAvLyBcdTUxNDFcdThCQjhJUFx1OEJCRlx1OTVFRVxuICAgICAgaG9zdDogXCIwLjAuMC4wXCIsXG4gICAgICAvLyBcdTVFOTRcdTc1MjhcdTdBRUZcdTUzRTMgKFx1OUVEOFx1OEJBNDozMDAwKVxuICAgICAgcG9ydDogTnVtYmVyKGVudi5WSVRFX0FQUF9QT1JUKSxcbiAgICAgIC8vIFx1OEZEMFx1ODg0Q1x1NjYyRlx1NTQyNlx1ODFFQVx1NTJBOFx1NjI1M1x1NUYwMFx1NkQ0Rlx1ODlDOFx1NTY2OFxuICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgIHByb3h5OiB7XG4gICAgICAgIC8qKiBcdTRFRTNcdTc0MDZcdTUyNERcdTdGMDBcdTRFM0EgL2Rldi1hcGkgXHU3Njg0XHU4QkY3XHU2QzQyICAqL1xuICAgICAgICBbZW52LlZJVEVfQVBQX0JBU0VfQVBJXToge1xuICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgICAvLyBcdTYzQTVcdTUzRTNcdTU3MzBcdTU3NDBcbiAgICAgICAgICB0YXJnZXQ6IGVudi5WSVRFX0FQUF9BUElfVVJMLFxuICAgICAgICAgIHNlY3VyZTogZmFsc2UsXG4gICAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+XG4gICAgICAgICAgICBwYXRoLnJlcGxhY2UobmV3IFJlZ0V4cChcIl5cIiArIGVudi5WSVRFX0FQUF9CQVNFX0FQSSksIFwiXCIpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIHZ1ZSgpLFxuICAgICAgLy8ganN4XHUzMDAxdHN4XHU4QkVEXHU2Q0Q1XHU2NTJGXHU2MzAxXG4gICAgICB2dWVKc3goKSxcbiAgICAgIC8vIE1PQ0sgXHU2NzBEXHU1MkExXG4gICAgICBlbnYuVklURV9NT0NLX0RFVl9TRVJWRVIgPT09IFwidHJ1ZVwiID8gbW9ja0RldlNlcnZlclBsdWdpbigpIDogbnVsbCxcbiAgICAgIFVub0NTUyh7XG4gICAgICAgIGhtclRvcExldmVsQXdhaXQ6IGZhbHNlLFxuICAgICAgfSksXG4gICAgICAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjVcdTUzQzJcdTgwMDNcdUZGMUEgaHR0cHM6Ly9naXRodWIuY29tL3N4enovZWxlbWVudC1wbHVzLWJlc3QtcHJhY3RpY2VzL2Jsb2IvbWFpbi92aXRlLmNvbmZpZy50c1xuICAgICAgQXV0b0ltcG9ydCh7XG4gICAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NSBWdWUgXHU3NkY4XHU1MTczXHU1MUZEXHU2NTcwXHVGRjBDXHU1OTgyXHVGRjFBcmVmLCByZWFjdGl2ZSwgdG9SZWYgXHU3QjQ5XG4gICAgICAgIGltcG9ydHM6IFtcInZ1ZVwiLCBcIkB2dWV1c2UvY29yZVwiLCBcInBpbmlhXCIsIFwidnVlLXJvdXRlclwiLCBcInZ1ZS1pMThuXCJdLFxuICAgICAgICByZXNvbHZlcnM6IFtcbiAgICAgICAgICAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjUgRWxlbWVudCBQbHVzIFx1NzZGOFx1NTE3M1x1NTFGRFx1NjU3MFx1RkYwQ1x1NTk4Mlx1RkYxQUVsTWVzc2FnZSwgRWxNZXNzYWdlQm94Li4uIChcdTVFMjZcdTY4MzdcdTVGMEYpXG4gICAgICAgICAgRWxlbWVudFBsdXNSZXNvbHZlcigpLFxuICAgICAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NVx1NTZGRVx1NjgwN1x1N0VDNFx1NEVGNlxuICAgICAgICAgIEljb25zUmVzb2x2ZXIoe30pLFxuICAgICAgICBdLFxuICAgICAgICBlc2xpbnRyYzoge1xuICAgICAgICAgIC8vIFx1NjYyRlx1NTQyNlx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMCBlc2xpbnQgXHU4OUM0XHU1MjE5XHVGRjBDXHU1RUZBXHU4QkFFXHU3NTFGXHU2MjEwXHU0RTRCXHU1NDBFXHU4QkJFXHU3RjZFIGZhbHNlXG4gICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgLy8gXHU2MzA3XHU1QjlBXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1XHU1MUZEXHU2NTcwIGVzbGludCBcdTg5QzRcdTUyMTlcdTc2ODRcdTY1ODdcdTRFRjZcbiAgICAgICAgICBmaWxlcGF0aDogXCIuLy5lc2xpbnRyYy1hdXRvLWltcG9ydC5qc29uXCIsXG4gICAgICAgICAgZ2xvYmFsc1Byb3BWYWx1ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gXHU2NjJGXHU1NDI2XHU1NzI4IHZ1ZSBcdTZBMjFcdTY3N0ZcdTRFMkRcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjVcbiAgICAgICAgdnVlVGVtcGxhdGU6IHRydWUsXG4gICAgICAgIC8vIFx1NjMwN1x1NUI5QVx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NVx1NTFGRFx1NjU3MFRTXHU3QzdCXHU1NzhCXHU1OEYwXHU2NjBFXHU2NTg3XHU0RUY2XHU4REVGXHU1Rjg0IChmYWxzZTpcdTUxNzNcdTk1RURcdTgxRUFcdTUyQThcdTc1MUZcdTYyMTApXG4gICAgICAgIGR0czogZmFsc2UsXG4gICAgICAgIC8vIGR0czogXCJzcmMvdHlwZXMvYXV0by1pbXBvcnRzLmQudHNcIixcbiAgICAgIH0pLFxuICAgICAgQ29tcG9uZW50cyh7XG4gICAgICAgIHJlc29sdmVyczogW1xuICAgICAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NSBFbGVtZW50IFBsdXMgXHU3RUM0XHU0RUY2XG4gICAgICAgICAgRWxlbWVudFBsdXNSZXNvbHZlcigpLFxuICAgICAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NkNFOFx1NTE4Q1x1NTZGRVx1NjgwN1x1N0VDNFx1NEVGNlxuICAgICAgICAgIEljb25zUmVzb2x2ZXIoe1xuICAgICAgICAgICAgLy8gZWxlbWVudC1wbHVzXHU1NkZFXHU2ODA3XHU1RTkzXHVGRjBDXHU1MTc2XHU0RUQ2XHU1NkZFXHU2ODA3XHU1RTkzIGh0dHBzOi8vaWNvbi1zZXRzLmljb25pZnkuZGVzaWduL1xuICAgICAgICAgICAgZW5hYmxlZENvbGxlY3Rpb25zOiBbXCJlcFwiXSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgLy8gXHU2MzA3XHU1QjlBXHU4MUVBXHU1QjlBXHU0RTQ5XHU3RUM0XHU0RUY2XHU0RjREXHU3RjZFKFx1OUVEOFx1OEJBNDpzcmMvY29tcG9uZW50cylcbiAgICAgICAgZGlyczogW1wic3JjL2NvbXBvbmVudHNcIiwgXCJzcmMvKiovY29tcG9uZW50c1wiXSxcbiAgICAgICAgLy8gXHU2MzA3XHU1QjlBXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1XHU3RUM0XHU0RUY2VFNcdTdDN0JcdTU3OEJcdTU4RjBcdTY2MEVcdTY1ODdcdTRFRjZcdThERUZcdTVGODQgKGZhbHNlOlx1NTE3M1x1OTVFRFx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMClcbiAgICAgICAgZHRzOiBmYWxzZSxcbiAgICAgICAgLy8gZHRzOiBcInNyYy90eXBlcy9jb21wb25lbnRzLmQudHNcIixcbiAgICAgIH0pLFxuICAgICAgSWNvbnMoe1xuICAgICAgICAvLyBcdTgxRUFcdTUyQThcdTVCODlcdTg4QzVcdTU2RkVcdTY4MDdcdTVFOTNcbiAgICAgICAgYXV0b0luc3RhbGw6IHRydWUsXG4gICAgICB9KSxcbiAgICAgIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcbiAgICAgICAgLy8gXHU2MzA3XHU1QjlBXHU5NzAwXHU4OTgxXHU3RjEzXHU1QjU4XHU3Njg0XHU1NkZFXHU2ODA3XHU2NTg3XHU0RUY2XHU1OTM5XG4gICAgICAgIGljb25EaXJzOiBbcmVzb2x2ZShwYXRoU3JjLCBcImFzc2V0cy9pY29uc1wiKV0sXG4gICAgICAgIC8vIFx1NjMwN1x1NUI5QXN5bWJvbElkXHU2ODNDXHU1RjBGXG4gICAgICAgIHN5bWJvbElkOiBcImljb24tW2Rpcl0tW25hbWVdXCIsXG4gICAgICB9KSxcbiAgICAgIC8qIFZ1ZURldlRvb2xzKHtcbiAgICAgICAgb3BlbkluRWRpdG9ySG9zdDogYGh0dHA6Ly9sb2NhbGhvc3Q6JHtlbnYuVklURV9BUFBfUE9SVH1gLFxuICAgICAgfSksICovXG4gICAgXSxcbiAgICAvLyBcdTk4ODRcdTUyQTBcdThGN0RcdTk4NzlcdTc2RUVcdTVGQzVcdTk3MDBcdTc2ODRcdTdFQzRcdTRFRjZcbiAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgXCJ2dWVcIixcbiAgICAgICAgXCJ2dWUtcm91dGVyXCIsXG4gICAgICAgIFwicGluaWFcIixcbiAgICAgICAgXCJheGlvc1wiLFxuICAgICAgICBcIkB2dWV1c2UvY29yZVwiLFxuICAgICAgICBcInNvcnRhYmxlanNcIixcbiAgICAgICAgXCJwYXRoLXRvLXJlZ2V4cFwiLFxuICAgICAgICBcImVjaGFydHNcIixcbiAgICAgICAgXCJAd2FuZ2VkaXRvci9lZGl0b3JcIixcbiAgICAgICAgXCJAd2FuZ2VkaXRvci9lZGl0b3ItZm9yLXZ1ZVwiLFxuICAgICAgICBcInZ1ZS1pMThuXCIsXG4gICAgICAgIFwicGF0aC1icm93c2VyaWZ5XCIsXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvZm9ybS9zdHlsZS9jc3NcIixcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9mb3JtLWl0ZW0vc3R5bGUvY3NzXCIsXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvYnV0dG9uL3N0eWxlL2Nzc1wiLFxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2lucHV0L3N0eWxlL2Nzc1wiLFxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2lucHV0LW51bWJlci9zdHlsZS9jc3NcIixcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9zd2l0Y2gvc3R5bGUvY3NzXCIsXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvdXBsb2FkL3N0eWxlL2Nzc1wiLFxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL21lbnUvc3R5bGUvY3NzXCIsXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvY29sL3N0eWxlL2Nzc1wiLFxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2ljb24vc3R5bGUvY3NzXCIsXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvcm93L3N0eWxlL2Nzc1wiLFxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3RhZy9zdHlsZS9jc3NcIixcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9kaWFsb2cvc3R5bGUvY3NzXCIsXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvbG9hZGluZy9zdHlsZS9jc3NcIixcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9yYWRpby9zdHlsZS9jc3NcIixcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9yYWRpby1ncm91cC9zdHlsZS9jc3NcIixcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9wb3BvdmVyL3N0eWxlL2Nzc1wiLFxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3Njcm9sbGJhci9zdHlsZS9jc3NcIixcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy90b29sdGlwL3N0eWxlL2Nzc1wiLFxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2Ryb3Bkb3duL3N0eWxlL2Nzc1wiLFxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2Ryb3Bkb3duLW1lbnUvc3R5bGUvY3NzXCIsXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvZHJvcGRvd24taXRlbS9zdHlsZS9jc3NcIixcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9zdWItbWVudS9zdHlsZS9jc3NcIixcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9tZW51LWl0ZW0vc3R5bGUvY3NzXCIsXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvZGl2aWRlci9zdHlsZS9jc3NcIixcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9jYXJkL3N0eWxlL2Nzc1wiLFxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2xpbmsvc3R5bGUvY3NzXCIsXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9zdHlsZS9jc3NcIixcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9icmVhZGNydW1iLWl0ZW0vc3R5bGUvY3NzXCIsXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvdGFibGUvc3R5bGUvY3NzXCIsXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvdHJlZS1zZWxlY3Qvc3R5bGUvY3NzXCIsXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvdGFibGUtY29sdW1uL3N0eWxlL2Nzc1wiLFxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3NlbGVjdC9zdHlsZS9jc3NcIixcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9vcHRpb24vc3R5bGUvY3NzXCIsXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9zdHlsZS9jc3NcIixcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy90cmVlL3N0eWxlL2Nzc1wiLFxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2FsZXJ0L3N0eWxlL2Nzc1wiLFxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi9zdHlsZS9jc3NcIixcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9jaGVja2JveC1ncm91cC9zdHlsZS9jc3NcIixcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9jaGVja2JveC9zdHlsZS9jc3NcIixcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy90YWJzL3N0eWxlL2Nzc1wiLFxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3RhYi1wYW5lL3N0eWxlL2Nzc1wiLFxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3JhdGUvc3R5bGUvY3NzXCIsXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvc3R5bGUvY3NzXCIsXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL3N0eWxlL2Nzc1wiLFxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2ltYWdlL3N0eWxlL2Nzc1wiLFxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3N0YXRpc3RpYy9zdHlsZS9jc3NcIixcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy93YXRlcm1hcmsvc3R5bGUvY3NzXCIsXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvY29uZmlnLXByb3ZpZGVyL3N0eWxlL2Nzc1wiLFxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3RleHQvc3R5bGUvY3NzXCIsXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvZHJhd2VyL3N0eWxlL2Nzc1wiLFxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2NvbG9yLXBpY2tlci9zdHlsZS9jc3NcIixcbiAgICAgICAgXCJlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9iYWNrdG9wL3N0eWxlL2Nzc1wiLFxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL21lc3NhZ2UtYm94L3N0eWxlL2Nzc1wiLFxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3NrZWxldG9uL3N0eWxlL2Nzc1wiLFxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3NrZWxldG9uL3N0eWxlL2Nzc1wiLFxuICAgICAgICBcImVsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3NrZWxldG9uLWl0ZW0vc3R5bGUvY3NzXCIsXG4gICAgICAgIFwiZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvYmFkZ2Uvc3R5bGUvY3NzXCIsXG4gICAgICBdLFxuICAgIH0sXG4gICAgLy8gXHU2Nzg0XHU1RUZBXHU5MTREXHU3RjZFXG4gICAgYnVpbGQ6IHtcbiAgICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMjAwMCwgLy8gXHU2RDg4XHU5NjY0XHU2MjUzXHU1MzA1XHU1OTI3XHU1QzBGXHU4RDg1XHU4RkM3NTAwa2JcdThCNjZcdTU0NEFcbiAgICAgIG1pbmlmeTogXCJ0ZXJzZXJcIiwgLy8gVml0ZSAyLjYueCBcdTRFRTVcdTRFMEFcdTk3MDBcdTg5ODFcdTkxNERcdTdGNkUgbWluaWZ5OiBcInRlcnNlclwiLCB0ZXJzZXJPcHRpb25zIFx1NjI0RFx1ODBGRFx1NzUxRlx1NjU0OFxuICAgICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgICBjb21wcmVzczoge1xuICAgICAgICAgIGtlZXBfaW5maW5pdHk6IHRydWUsIC8vIFx1OTYzMlx1NkI2MiBJbmZpbml0eSBcdTg4QUJcdTUzOEJcdTdGMjlcdTYyMTAgMS8wXHVGRjBDXHU4RkQ5XHU1M0VGXHU4MEZEXHU0RjFBXHU1QkZDXHU4MUY0IENocm9tZSBcdTRFMEFcdTc2ODRcdTYwMjdcdTgwRkRcdTk1RUVcdTk4OThcbiAgICAgICAgICBkcm9wX2NvbnNvbGU6IHRydWUsIC8vIFx1NzUxRlx1NEVBN1x1NzNBRlx1NTg4M1x1NTNCQlx1OTY2NCBjb25zb2xlXG4gICAgICAgICAgZHJvcF9kZWJ1Z2dlcjogdHJ1ZSwgLy8gXHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU1M0JCXHU5NjY0IGRlYnVnZ2VyXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgIGNvbW1lbnRzOiBmYWxzZSwgLy8gXHU1MjIwXHU5NjY0XHU2Q0U4XHU5MUNBXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAvLyBtYW51YWxDaHVua3M6IHtcbiAgICAgICAgICAvLyAgIFwidnVlLWkxOG5cIjogW1widnVlLWkxOG5cIl0sXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgICAvLyBcdTc1MjhcdTRFOEVcdTRFQ0VcdTUxNjVcdTUzRTNcdTcwQjlcdTUyMUJcdTVFRkFcdTc2ODRcdTU3NTdcdTc2ODRcdTYyNTNcdTUzMDVcdThGOTNcdTUxRkFcdTY4M0NcdTVGMEZbbmFtZV1cdTg4NjhcdTc5M0FcdTY1ODdcdTRFRjZcdTU0MEQsW2hhc2hdXHU4ODY4XHU3OTNBXHU4QkU1XHU2NTg3XHU0RUY2XHU1MTg1XHU1QkI5aGFzaFx1NTAzQ1xuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiBcImpzL1tuYW1lXS5baGFzaF0uanNcIixcbiAgICAgICAgICAvLyBcdTc1MjhcdTRFOEVcdTU0N0RcdTU0MERcdTRFRTNcdTc4MDFcdTYyQzZcdTUyMDZcdTY1RjZcdTUyMUJcdTVFRkFcdTc2ODRcdTUxNzFcdTRFQUJcdTU3NTdcdTc2ODRcdThGOTNcdTUxRkFcdTU0N0RcdTU0MERcbiAgICAgICAgICBjaHVua0ZpbGVOYW1lczogXCJqcy9bbmFtZV0uW2hhc2hdLmpzXCIsXG4gICAgICAgICAgLy8gXHU3NTI4XHU0RThFXHU4RjkzXHU1MUZBXHU5NzU5XHU2MDAxXHU4RDQ0XHU2RTkwXHU3Njg0XHU1NDdEXHU1NDBEXHVGRjBDW2V4dF1cdTg4NjhcdTc5M0FcdTY1ODdcdTRFRjZcdTYyNjlcdTVDNTVcdTU0MERcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbzogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmZvID0gYXNzZXRJbmZvLm5hbWUuc3BsaXQoXCIuXCIpO1xuICAgICAgICAgICAgbGV0IGV4dFR5cGUgPSBpbmZvW2luZm8ubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnXHU2NTg3XHU0RUY2XHU0RkUxXHU2MDZGJywgYXNzZXRJbmZvLm5hbWUpXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIC9cXC4obXA0fHdlYm18b2dnfG1wM3x3YXZ8ZmxhY3xhYWMpKFxcPy4qKT8kL2kudGVzdChhc3NldEluZm8ubmFtZSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBleHRUeXBlID0gXCJtZWRpYVwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgvXFwuKHBuZ3xqcGU/Z3xnaWZ8c3ZnKShcXD8uKik/JC8udGVzdChhc3NldEluZm8ubmFtZSkpIHtcbiAgICAgICAgICAgICAgZXh0VHlwZSA9IFwiaW1nXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKC9cXC4od29mZjI/fGVvdHx0dGZ8b3RmKShcXD8uKik/JC9pLnRlc3QoYXNzZXRJbmZvLm5hbWUpKSB7XG4gICAgICAgICAgICAgIGV4dFR5cGUgPSBcImZvbnRzXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYCR7ZXh0VHlwZX0vW25hbWVdLltoYXNoXS5bZXh0XWA7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZWZpbmU6IHtcbiAgICAgIF9fQVBQX0lORk9fXzogSlNPTi5zdHJpbmdpZnkoX19BUFBfSU5GT19fKSxcbiAgICB9LFxuICB9O1xufSk7XG4iLCAie1xuICBcIm5hbWVcIjogXCJwbWItZGlhZ25vc3RpYy1kYlwiLFxuICBcInZlcnNpb25cIjogXCIwLjAuMVwiLFxuICBcInByaXZhdGVcIjogdHJ1ZSxcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJkZXZcIjogXCJ2aXRlXCIsXG4gICAgXCJidWlsZDpkZXZcIjogXCJ2dWUtdHNjIC0tbm9FbWl0ICYgdml0ZSBidWlsZCAtLW1vZGUgZGV2ZWxvcG1lbnRcIixcbiAgICBcImJ1aWxkOnByb2RcIjogXCJ2dWUtdHNjIC0tbm9FbWl0ICYgdml0ZSBidWlsZCAtLW1vZGUgcHJvZHVjdGlvblwiLFxuICAgIFwicHJldmlld1wiOiBcInZpdGUgcHJldmlld1wiLFxuICAgIFwiYnVpbGQtb25seVwiOiBcInZpdGUgYnVpbGRcIixcbiAgICBcInR5cGUtY2hlY2tcIjogXCJ2dWUtdHNjIC0tbm9FbWl0XCIsXG4gICAgXCJsaW50OmVzbGludFwiOiBcImVzbGludCAgLS1maXggLS1leHQgLnRzLC5qcywudnVlIC4vc3JjIFwiLFxuICAgIFwibGludDpwcmV0dGllclwiOiBcInByZXR0aWVyIC0td3JpdGUgXFxcIioqLyoue2pzLGNqcyx0cyxqc29uLHRzeCxjc3MsbGVzcyxzY3NzLHZ1ZSxodG1sLG1kfVxcXCJcIixcbiAgICBcImxpbnQ6c3R5bGVsaW50XCI6IFwic3R5bGVsaW50ICBcXFwiKiovKi57Y3NzLHNjc3MsdnVlfVxcXCIgLS1maXhcIixcbiAgICBcImxpbnQ6bGludC1zdGFnZWRcIjogXCJsaW50LXN0YWdlZFwiLFxuICAgIFwicHJlaW5zdGFsbFwiOiBcIm5weCBvbmx5LWFsbG93IHBucG1cIixcbiAgICBcInByZXBhcmVcIjogXCJodXNreVwiLFxuICAgIFwiY29tbWl0XCI6IFwiZ2l0LWN6XCJcbiAgfSxcbiAgXCJjb25maWdcIjoge1xuICAgIFwiY29tbWl0aXplblwiOiB7XG4gICAgICBcInBhdGhcIjogXCJub2RlX21vZHVsZXMvY3otZ2l0XCJcbiAgICB9XG4gIH0sXG4gIFwibGludC1zdGFnZWRcIjoge1xuICAgIFwiKi57anMsdHN9XCI6IFtcbiAgICAgIFwiZXNsaW50IC0tZml4XCIsXG4gICAgICBcInByZXR0aWVyIC0td3JpdGVcIlxuICAgIF0sXG4gICAgXCIqLntjanMsanNvbn1cIjogW1xuICAgICAgXCJwcmV0dGllciAtLXdyaXRlXCJcbiAgICBdLFxuICAgIFwiKi57dnVlLGh0bWx9XCI6IFtcbiAgICAgIFwiZXNsaW50IC0tZml4XCIsXG4gICAgICBcInByZXR0aWVyIC0td3JpdGVcIixcbiAgICAgIFwic3R5bGVsaW50IC0tZml4XCJcbiAgICBdLFxuICAgIFwiKi57c2Nzcyxjc3N9XCI6IFtcbiAgICAgIFwic3R5bGVsaW50IC0tZml4XCIsXG4gICAgICBcInByZXR0aWVyIC0td3JpdGVcIlxuICAgIF0sXG4gICAgXCIqLm1kXCI6IFtcbiAgICAgIFwicHJldHRpZXIgLS13cml0ZVwiXG4gICAgXVxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAZWxlbWVudC1wbHVzL2ljb25zLXZ1ZVwiOiBcIl4yLjMuMVwiLFxuICAgIFwiQHZ1ZXVzZS9jb3JlXCI6IFwiXjEwLjExLjBcIixcbiAgICBcIkB3YW5nZWRpdG9yL2VkaXRvclwiOiBcIl41LjEuMjNcIixcbiAgICBcIkB3YW5nZWRpdG9yL2VkaXRvci1mb3ItdnVlXCI6IFwiNS4xLjEwXCIsXG4gICAgXCJhbmltYXRlLmNzc1wiOiBcIl40LjEuMVwiLFxuICAgIFwiYXhpb3NcIjogXCJeMS43LjJcIixcbiAgICBcImNvbG9yXCI6IFwiXjQuMi4zXCIsXG4gICAgXCJlY2hhcnRzXCI6IFwiXjUuNS4xXCIsXG4gICAgXCJlbGVtZW50LXBsdXNcIjogXCJeMi43LjZcIixcbiAgICBcImV4Y2VsanNcIjogXCJeNC40LjBcIixcbiAgICBcImxvZGFzaFwiOiBcIl40LjE3LjIxXCIsXG4gICAgXCJsb2Rhc2gtZXNcIjogXCJeNC4xNy4yMVwiLFxuICAgIFwibmV0XCI6IFwiXjEuMC4yXCIsXG4gICAgXCJucHJvZ3Jlc3NcIjogXCJeMC4yLjBcIixcbiAgICBcInBhdGgtYnJvd3NlcmlmeVwiOiBcIl4xLjAuMVwiLFxuICAgIFwicGF0aC10by1yZWdleHBcIjogXCJeNi4yLjJcIixcbiAgICBcInBpbmlhXCI6IFwiXjIuMS43XCIsXG4gICAgXCJzY3JlZW5mdWxsXCI6IFwiXjYuMC4yXCIsXG4gICAgXCJzb2NranMtY2xpZW50XCI6IFwiMS42LjFcIixcbiAgICBcInNvcnRhYmxlanNcIjogXCJeMS4xNS4yXCIsXG4gICAgXCJzdG9tcGpzXCI6IFwiXjIuMy4zXCIsXG4gICAgXCJ2dWVcIjogXCJeMy40LjMxXCIsXG4gICAgXCJ2dWUtaTE4blwiOiBcIjkuOS4xXCIsXG4gICAgXCJ2dWUtcm91dGVyXCI6IFwiXjQuNC4wXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGNvbW1pdGxpbnQvY2xpXCI6IFwiXjE4LjYuMVwiLFxuICAgIFwiQGNvbW1pdGxpbnQvY29uZmlnLWNvbnZlbnRpb25hbFwiOiBcIl4xOC42LjNcIixcbiAgICBcIkBpY29uaWZ5LWpzb24vZXBcIjogXCJeMS4xLjE1XCIsXG4gICAgXCJAdHlwZXMvY29sb3JcIjogXCJeMy4wLjZcIixcbiAgICBcIkB0eXBlcy9sb2Rhc2hcIjogXCJeNC4xNy42XCIsXG4gICAgXCJAdHlwZXMvbm9kZVwiOiBcIl4yMC4xNC4xMFwiLFxuICAgIFwiQHR5cGVzL25wcm9ncmVzc1wiOiBcIl4wLjIuM1wiLFxuICAgIFwiQHR5cGVzL3BhdGgtYnJvd3NlcmlmeVwiOiBcIl4xLjAuMlwiLFxuICAgIFwiQHR5cGVzL3NvY2tqcy1jbGllbnRcIjogXCJeMS41LjRcIixcbiAgICBcIkB0eXBlcy9zb3J0YWJsZWpzXCI6IFwiXjEuMTUuOFwiLFxuICAgIFwiQHR5cGVzL3N0b21wanNcIjogXCJeMi4zLjlcIixcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9lc2xpbnQtcGx1Z2luXCI6IFwiXjcuMTUuMFwiLFxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L3BhcnNlclwiOiBcIl43LjE1LjBcIixcbiAgICBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiOiBcIl41LjAuNVwiLFxuICAgIFwiQHZpdGVqcy9wbHVnaW4tdnVlLWpzeFwiOiBcIl4zLjEuMFwiLFxuICAgIFwiYXV0b3ByZWZpeGVyXCI6IFwiXjEwLjQuMTlcIixcbiAgICBcImNvbW1pdGl6ZW5cIjogXCJeNC4zLjBcIixcbiAgICBcImN6LWdpdFwiOiBcIl4xLjkuM1wiLFxuICAgIFwiZXNsaW50XCI6IFwiXjguNTcuMFwiLFxuICAgIFwiZXNsaW50LWNvbmZpZy1wcmV0dGllclwiOiBcIl45LjEuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1pbXBvcnRcIjogXCJeMi4yOS4xXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXByZXR0aWVyXCI6IFwiXjUuMS4zXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXZ1ZVwiOiBcIl45LjI3LjBcIixcbiAgICBcImZhc3QtZ2xvYlwiOiBcIl4zLjMuMlwiLFxuICAgIFwiaHVza3lcIjogXCJeOS4wLjExXCIsXG4gICAgXCJsaW50LXN0YWdlZFwiOiBcIl4xNS4yLjdcIixcbiAgICBcInBvc3Rjc3NcIjogXCJeOC40LjM5XCIsXG4gICAgXCJwb3N0Y3NzLWh0bWxcIjogXCJeMS43LjBcIixcbiAgICBcInBvc3Rjc3Mtc2Nzc1wiOiBcIl40LjAuOVwiLFxuICAgIFwicHJldHRpZXJcIjogXCJeMy4zLjJcIixcbiAgICBcInNhc3NcIjogXCJeMS43Ny42XCIsXG4gICAgXCJzdHlsZWxpbnRcIjogXCJeMTYuNi4xXCIsXG4gICAgXCJzdHlsZWxpbnQtY29uZmlnLWh0bWxcIjogXCJeMS4xLjBcIixcbiAgICBcInN0eWxlbGludC1jb25maWctcmVjZXNzLW9yZGVyXCI6IFwiXjQuNi4wXCIsXG4gICAgXCJzdHlsZWxpbnQtY29uZmlnLXJlY29tbWVuZGVkLXNjc3NcIjogXCJeMTQuMC4wXCIsXG4gICAgXCJzdHlsZWxpbnQtY29uZmlnLXJlY29tbWVuZGVkLXZ1ZVwiOiBcIl4xLjUuMFwiLFxuICAgIFwic3R5bGVsaW50LWNvbmZpZy1zdGFuZGFyZFwiOiBcIl4zNi4wLjFcIixcbiAgICBcInRlcnNlclwiOiBcIl41LjMxLjFcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCJeNS41LjNcIixcbiAgICBcInVub2Nzc1wiOiBcIl4wLjU4LjlcIixcbiAgICBcInVucGx1Z2luLWF1dG8taW1wb3J0XCI6IFwiXjAuMTcuNlwiLFxuICAgIFwidW5wbHVnaW4taWNvbnNcIjogXCJeMC4xOC41XCIsXG4gICAgXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50c1wiOiBcIl4wLjI2LjBcIixcbiAgICBcInZpdGVcIjogXCJeNS40LjJcIixcbiAgICBcInZpdGUtcGx1Z2luLW1vY2stZGV2LXNlcnZlclwiOiBcIl4xLjUuMVwiLFxuICAgIFwidml0ZS1wbHVnaW4tc3ZnLWljb25zXCI6IFwiXjIuMC4xXCIsXG4gICAgXCJ2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHNcIjogXCJeNy4zLjVcIixcbiAgICBcInZ1ZS10c2NcIjogXCJeMi4wLjI2XCJcbiAgfSxcbiAgXCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0FaVS1SRElUL3BtYi1kaWFnbm9zdGljLWRiLXdlYi5naXRcIixcbiAgXCJhdXRob3JcIjogXCJBY2NlbnR1cmVcIixcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwiZW5naW5lc1wiOiB7XG4gICAgXCJub2RlXCI6IFwiPj0xOC4wLjBcIlxuICB9LFxuICBcInBhY2thZ2VNYW5hZ2VyXCI6IFwicG5wbUA5LjEuMytzaGE1MTIuN2MyZWEwODllMWE2YWYzMDY0MDljNGZjOGM0ZjA4OTdiZGFjMzJiNzcyMDE2MTk2YzQ2OWQ5NDI4ZjFmZTJkNWEyMWRhZjhhZDY1MTI3NjI2NTRhYzY0NWI1ZDkxMzZiYjIxMGVjOWEwMGFmYThkYmM0Njc3ODQzYmEzNjJlY2RcIlxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpYSxPQUFPLFNBQVM7QUFDamIsT0FBTyxZQUFZO0FBQ25CLFNBQWdDLFNBQVMsb0JBQW9CO0FBRTdELE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMkJBQTJCO0FBQ3BDLE9BQU8sV0FBVztBQUNsQixPQUFPLG1CQUFtQjtBQUUxQixTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLHlCQUF5QjtBQUVoQyxPQUFPLFlBQVk7QUFDbkIsU0FBUyxlQUFlOzs7QUNidEIsV0FBUTtBQUNSLGNBQVc7QUE0Q1gsbUJBQWdCO0FBQUEsRUFDZCwyQkFBMkI7QUFBQSxFQUMzQixnQkFBZ0I7QUFBQSxFQUNoQixzQkFBc0I7QUFBQSxFQUN0Qiw4QkFBOEI7QUFBQSxFQUM5QixlQUFlO0FBQUEsRUFDZixPQUFTO0FBQUEsRUFDVCxPQUFTO0FBQUEsRUFDVCxTQUFXO0FBQUEsRUFDWCxnQkFBZ0I7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Q1osU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBO0FBQUEsSUFFQSxPQUFPO0FBQUEsTUFDTCx1QkFBdUI7QUFBQTtBQUFBLE1BQ3ZCLFFBQVE7QUFBQTtBQUFBLE1BQ1IsZUFBZTtBQUFBLFFBQ2IsVUFBVTtBQUFBLFVBQ1IsZUFBZTtBQUFBO0FBQUEsVUFDZixjQUFjO0FBQUE7QUFBQSxVQUNkLGVBQWU7QUFBQTtBQUFBLFFBQ2pCO0FBQUEsUUFDQSxRQUFRO0FBQUEsVUFDTixVQUFVO0FBQUE7QUFBQSxRQUNaO0FBQUEsTUFDRjtBQUFBLE1BQ0EsZUFBZTtBQUFBLFFBQ2IsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFLTixnQkFBZ0I7QUFBQTtBQUFBLFVBRWhCLGdCQUFnQjtBQUFBO0FBQUEsVUFFaEIsZ0JBQWdCLENBQUMsY0FBbUI7QUFDbEMsa0JBQU0sT0FBTyxVQUFVLEtBQUssTUFBTSxHQUFHO0FBQ3JDLGdCQUFJLFVBQVUsS0FBSyxLQUFLLFNBQVMsQ0FBQztBQUVsQyxnQkFDRSw2Q0FBNkMsS0FBSyxVQUFVLElBQUksR0FDaEU7QUFDQSx3QkFBVTtBQUFBLFlBQ1osV0FBVyxnQ0FBZ0MsS0FBSyxVQUFVLElBQUksR0FBRztBQUMvRCx3QkFBVTtBQUFBLFlBQ1osV0FBVyxrQ0FBa0MsS0FBSyxVQUFVLElBQUksR0FBRztBQUNqRSx3QkFBVTtBQUFBLFlBQ1o7QUFDQSxtQkFBTyxHQUFHLE9BQU87QUFBQSxVQUNuQjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sY0FBYyxLQUFLLFVBQVUsWUFBWTtBQUFBLElBQzNDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==