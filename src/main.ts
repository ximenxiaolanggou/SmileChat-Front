import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:svg-icons-register'
import gloablComponent from './components/index';
import '@/styles/index.scss'

import pinia from '@/store'

//引入路由
import router from './router'

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn
})
app.use(gloablComponent);
//注册模板路由
app.use(router)
//安装仓库
app.use(pinia)
app.mount('#app')

