<template>
    <div>
        <input type="button" value="获取远程数据" @click="sendReq">
        <!-- <input type="button" value="获取远程数据" @click="getvalue2"> -->
    </div>   
</template>

<script setup lang = "ts">
import axios from 'axios'
import { onMounted } from 'vue';
const number = 1
console.log(number)
async function sendReq() {
    // const resp = await axios.get("/api");
    const resp = await axios.get("http://localhost:8080");
    console.log(number);
    console.log(resp.data)
}
onMounted(()=>{
    sendReq()
}) 

// export default options;
</script>

