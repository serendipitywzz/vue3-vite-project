
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import store from "@/store/index.js"
import 'ant-design-vue/dist/antd.css';

const app = createApp(App)

app.use(store).use(router).mount('#app')
