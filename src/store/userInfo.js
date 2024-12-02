
import { defineStore } from "pinia"
export const userStore = defineStore({
    id: "userInfo",
    state: () => {
        return {
            userInfo: {
                name: "测试"
            }
        }
    },
    actions: {
        setUserInfo(data) {
            this.userInfo.name = data
        }
    },
    // 开启数据缓存
    // persist: {
    //     enabled: true,
    //     strategies: [
    //         {
    //             storage: localStorage, // 默认存储在sessionStorage里
    //             paths: ['userInfo'],  // 指定存储state，不写则存储所有
    //         },
    //     ],
    // },
})
