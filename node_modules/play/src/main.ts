import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@re/theme/src/index.scss'

import Icon from '@re/components/icon'

const plugins = [
    Icon
]
const app = createApp(App)
plugins.forEach(plugin=>app.use(plugin)) // 组件注册为全局组件，可以使用

app.mount('#app')
