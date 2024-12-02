<template>
  <span @click="change">{{ store.userInfo.name }}</span>
</template>
<script setup>
import { userStore } from "@/store/userInfo.js";

const store = userStore();
const change = () => {
  store.setUserInfo("修改后的Hellow");
};
</script>



<style scoped lang="scss">
span {
  color: #42b983;
  cursor: pointer;
}
</style>
