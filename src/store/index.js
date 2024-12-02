
import { createPinia } from "pinia"
import piniaPluginPersist from "pinia-plugin-persist" // 数据持久化
const store = createPinia().use(piniaPluginPersist)
export default store
