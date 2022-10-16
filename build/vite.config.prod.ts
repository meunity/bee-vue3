import { defineConfig, loadEnv, mergeConfig } from 'vite';
import type { UserConfig } from 'vite';
import baseConfig from './vite.config.base';
import configCompressPlugin from './plugin/compress';
import configVisualizerPlugin from './plugin/visualizer';
import configImageminPlugin from './plugin/imagemin';
import banner from './plugin/banner';
import pwa from './plugin/pwa';
import { wrapperEnv } from './utils';
import importCDNResource from './plugin/cdn';
import validateEnv from './plugin/validateEnv';

export default defineConfig(({ mode }) => {
  const originEnv = loadEnv(mode, process.cwd());
  const env = wrapperEnv(originEnv);

  return mergeConfig(baseConfig, {
    mode: mode,
    plugins: [
      configCompressPlugin('gzip'),
      configVisualizerPlugin(),
      configImageminPlugin(),
      pwa(),
      banner(),
      env?.VITE_USE_CDN === true && importCDNResource(),
      validateEnv(false),
    ],
    esbuild: {
      pure: ['console.log'],
    },
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
          // https://router.vuejs.org/guide/advanced/lazy-loading.html#with-vite
          // https://rollupjs.org/guide/en/#outputmanualchunks
          manualChunks: {
            arco: ['@arco-design/web-vue'],
            chart: ['echarts', 'vue-echarts'],
            vue: [
              'vue',
              'vue-router',
              'pinia',
              '@vueuse/core',
              'vue-i18n',
              '@vue/runtime-core',
              '@vue/shared',
              '@vue/runtime-core',
              '@vue/compiler-core',
              '@vue/compiler-dom',
              '@vue/runtime-dom',
            ],
            // lodash: ['lodash'],
          },
        },
      },
      reportCompressedSize: true,
      chunkSizeWarningLimit: 2000,
    },
  } as UserConfig);
});
