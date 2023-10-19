<script setup lang = 'ts'>
import { createApp, ref } from 'vue'
import App from './App.vue'
import { provide, inject } from 'vue'
import type { InjectionKey } from 'vue'
import { reactive } from 'vue'



const key = Symbol() as InjectionKey<string>

provide(key, 'foo') // 若提供的是非字符串值会导致错误

// const foo = inject(key) // foo 的类型：string | undefined
const foo = inject<string>('foo', 'bar')
// const foo = inject('foo') as string
const count  = ref(0)
const msg = ref('helloVue')
// const foo = inject<string>('foo') 


interface Book {
  title: string
  year?: number
}

const book: Book = reactive({ title: 'Vue 3 指引' })
console.log(book.year)
console.log(msg.value)
console.log(count.value)
console.log(foo)
// const app = createApp(App)
// const app = createApp({
//   // count = 0
//   data() {
//     return {
//       count : 0 
//     }
//   }
// })
// app.mount('#app')
function change(){
  switch(msg.value){
    case 'helloVue': msg.value = 'helloworld';break
    case 'helloworld': msg.value = 'helloVue';book.year = 1;console.log(book.year);break
  }
}
  function change2(){
    msg.value = 'helloworld'
  }
</script>


<template>
  <span>Message: {{ msg }}</span>
    <div id="app">
        <button @click="count++">{{ count }}</button>
    </div>
    <button @click="change">{{  'changeButton '+count }}</button>
    <button @click="change2">{{  'changeButton '+count }}</button>
</template>