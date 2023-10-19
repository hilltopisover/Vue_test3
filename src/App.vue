<!-- <script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->
<!-- =========================================================================================================================================================== -->
<script setup lang ="ts">
import { computed } from "vue";
import { ref } from "vue";
//ref 的作用是什么，将数据变成响应型数据。在程序中更改时，数据快速变更。
let msg = ref("hello")
const path = ref(" /src/assets/vue.svg ")
const count = ref(0)


// .map() 是 JavaScript 数组的一个高阶函数（Higher-Order Function），用于遍历数组的每个元素，并根据给定的回调函数对每个元素进行处理，最终返回一个新的数组。
const firstname = ref("han")
const lastname = ref("Zhang")
const fullname = computed (()=>{
  return lastname.value + firstname.value.length
})

function dec()
{
  count.value--
}

function add()
{
  count.value++
}

function change(){
  msg.value = "world"
}
</script>


<template>
  <h1>{{ msg }}</h1>
  <img :src = "path"> 
  <input type = "button" value = "change message" @click="change" />
  <input type = "button" value = "+" @click="add" />
  <h2>{{ count }}</h2>
  <input type = "button" value = "-" @click="dec" />
  <h2>{{ fullname }}</h2>
</template>

<style>
html, body{
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
<!-- =========================================================================================================================================================== -->
<!-- <template>
  
</template>

<script>

</script> -->