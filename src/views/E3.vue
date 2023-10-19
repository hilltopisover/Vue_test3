<!-- <script setup lang = "ts">
// import { onMounted } from 'vue'

// onMounted(() => {
//   console.log(`the component is now mounted.`)
// })

</script> -->


<script setup>
import { ref, onMounted } from 'vue'

const el = ref()
    // <div id="app">
    //         <input type="text" value="HelloWorld" alt="captcha"  ref="text">
    //         <button @click="changeText">change word</button>
    // </div>
onMounted(() => {
  el.value // <div>

})
</script>

<template>
  <div ref="el"></div>
</template>
