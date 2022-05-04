import { createApp } from 'vue'
import App from './App.vue'
import index from "@/router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './permission'
import store from "@/store";
import '../public/iconfont/iconfont.css'
import '../public/iconfont/iconfont'
require('../mock/index')
createApp(App)
    .use(index)
    .use(ElementPlus)
    .use(store)

    .mount('#app')
