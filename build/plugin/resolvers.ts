import Components from 'unplugin-vue-components/vite';
import { ArcoResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers';

export default function configResolverPlugin() {
  return Components({
    dirs: [], // Avoid parsing src/components.  避免解析到src/components
    deep: false,
    // 指定声明文件生成位置和文件名称 默认为根目录下components.d.ts
    // dts: './src/components.d.ts',
    dts: true,
    resolvers: [
      // 字节Arco框架组件导入,不导入样式，配合@arco-plugins/vite-vue 插件使用
      // 以便使用风格化平台https://arco.design/themes配置的主题
      ArcoResolver({ importStyle: false, sideEffect: true }),
      // Vueuse
      VueUseComponentsResolver(),
    ],
  });
}
