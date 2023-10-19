<!-- 此代码有一个问题未解决，为什么在下边无法获取到数据。 -->


<template>
    <a-table :columns="columms" :dataSource="users">
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'">{{text.title}}.{{ text.first }} {{ text.last }}</template>
      <template v-if="column.dataIndex === 'location'">{{text.street}}.{{ text.state }}</template>
      <template v-if="column.dataIndex === 'location'">{{text.city}}.{{ text.state }}</template>
    </template>
    </a-table>
    <div v-for="i in users">{{i.name.first}}</div>
    <div v-for="i in users">{{i}}</div>
</template>
<script setup lang = 'ts'>
import { ref, computed} from  "vue"
import { AxiosRespResults } from '../model/ModelRandomUser'
import { useRequest } from "vue-request";
import axios from "axios";


const{data} = useRequest<AxiosRespResults>(
    ()=>axios.get('https://randomuser.me/api/')
)

data
const users = computed(()=>{
    return data.value?.data.results || []
})

// console.log(data.value?.data)
// console.log(data.value?.data.results.name.first)
// console.log(users)
// console.log(users.value)
// console.log(data.value?.data.info.results)


const columms = ref([
    {
        title: "性别",
        dataIndex:"gender"
    },
    {
        title: "姓名",
        dataIndex:"name"
    },
    {
        title: "国家地区",
        dataIndex:"location"
    }
])


// async function getdata(){
//     const resp = await axios.get<Back<results>>('https://randomuser.me/api/')
// }
</script>