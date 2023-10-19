<!-- //此页面展示与后端交互的功能实现 -->
<script lang = "ts" setup>
// 写了promise对象之后才可以保证对象的异步操作，使用await来等待resolve来运行结束。运行结束后就可以将返回值赋值给resp对象。
const count = 1
console.log(count)
try{
    const resp = await new Promise ((resolve, reject)=>{
    const xhr = new XMLHttpRequest()
    // console.log(count)
    xhr.onload = function(){
        resolve(xhr.response)
        //为了验证程序是否正常运行，即xhr的reject对象，需要写如下判断
        if(xhr.status == 200){ resolve(xhr.response)
            console.log(count)}
        else if(xhr.status === 404){reject(xhr.response)
            console.log(count)}
        else{reject(xhr.response)
            console.log(count)}
    }
    xhr.open("GET", "https://...")
    xhr.responseType = 'json'
    xhr.send
    })
    console.log(resp)
}catch(e){
    console.error(e)
}
</script>
<template>
<h1>nihao</h1>
</template>