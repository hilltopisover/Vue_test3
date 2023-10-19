<script setup lang ="ts">
import { ref } from 'vue';
const user = ref({
  name: "jackYang",
  age: 21
})
function try1(){
  console.log(user.value)
}
</script>


<template>
  <div>
    <div>
      <label for="">请输入姓名</label>
      <input type="text" v-model="user.name">
    </div>
    <div>
      <label for="">请输入年龄</label>
      <input type="text" v-model="user.age">
    </div>
    <div>
      <input type="button" value="try" @click="try1">
    </div>
  </div>
</template>