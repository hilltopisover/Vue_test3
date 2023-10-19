<template>
    <Child1 v-for = "u of users"
    :name = "u.name.first" :country="u.location.country" :picture="u.picture.medium"></Child1>
</template>
<script lang = 'ts' setup>
import axios from 'axios';
import { useRequest } from 'vue-request';
import { computed } from 'vue';
import { AxiosRespResults } from '../model/ModelRandomUser'
import Child1 from '../components/child1.vue';


const{data} = useRequest<AxiosRespResults>(
    ()=>axios.get('https://randomuser.me/api/')
)
console.log(data) 
console.log(data.value)
// console.log(data.value?.data.results)
// console.log(data.value?.data)
const users = computed(()=>{
    return data.value?.data.results || []
})
console.log(users)
</script>