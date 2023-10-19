<!-- <script>

</script>
<template>
    <div class = "outer">
        <div class="title">学生列表</div>
        <div class = "thead">
            <div class = "row bold">
                <div class = 'col'>编号</div>
                <div class = 'col'>姓名</div>
                <div class = 'col'>性别</div>
                <div class = 'col'>年龄</div>
            </div>
        </div>
    </div>
</template> -->



<template>
    <input type="text" v-model="name"/>
    <h1>x:{{x}}</h1>
    <h1>y:{{y}}</h1>
    <h3>计数器：{{count}}</h3>
    <button @click="inc">+</button>
    <button @click="dec()">-</button>
    <input type="button" @click = 'inc()' value="+">
    <li v-for='index in 10' :key = 'index'>
        <span>index</span>
        <span>{{index}}</span>
        <span>klklkl</span>
        <span>ptsd{{count }}</span>
    </li>
</template>

<script setup lang = 'ts'>
    import{ref, watch} from "vue"
    import { useMouse } from "@vueuse/core";
    import { useCounter } from "@vueuse/core";
    const {count, inc, dec} = useCounter()
    const {x,y} = useMouse()
    const name  = ref("")
    watch(name, (newValue)=>{
        console.log("这是新的")
        sessionStorage.setItem("n", newValue)
    })
// localstorage 浏览器关闭数据还在
// sessionStorge 工作在浏览器活动区间
// 二者区别
</script>

