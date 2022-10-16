import AutoImport from 'unplugin-auto-import/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';

export default function autoImport() {
  return AutoImport({
    imports: [
      'vue',
      'vue-router',
      // 包含实验性的语法糖,暂不建议开启
      // https://vuejs.org/guide/extras/reactivity-transform.html
      // 'vue/macros',
      // '@vueuse/core',
      // {
      //   '@vueuse/core': [
      //     // named imports
      //     'useMouse', // import { useMouse } from '@vueuse/core',
      //     // alias
      //     ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
      //   ],
      //   axios: [
      //     // default imports
      //     ['default', 'axios'], // import { default as axios } from 'axios',
      //   ],
      //   '[package-name]': [
      //     '[import-names]',
      //     // alias
      //     ['[from]', '[alias]'],
      //   ],
      // },
    ], // 自动导入vue和vue-router相关函数
    // 指定生成的声明文件位置及文件名称, 默认为根目录 auto-imports.d.ts 文件
    // dts: './src/auto-imports.d.ts',
    resolvers: [ArcoResolver({ importStyle: false, sideEffect: true })],
  });
}
