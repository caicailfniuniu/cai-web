// 整合组件 导出组件
import _Icon from './src/icon.vue'
import { withInstall } from '@re/utils/with-install';


const Icon = withInstall(_Icon)

export default Icon;

export * from './src/icon'

// 添加类型 可以在模板中被解析
declare module 'vue' {
    export interface GlobalComponents { // 接口自动合并
        ReIcon: typeof Icon
    }
}