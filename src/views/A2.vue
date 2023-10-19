<template>
  <a-table :columns="columms" :dataSource="users"></a-table>
</template>
<script setup lang = 'ts'>
import { ref, computed} from  "vue"
// import { AxiosRespResults } from '../model/ModelRandomUser'
import { useRequest } from "vue-request";
import axios from "axios";


const{data} = useRequest(
  ()=>axios.get('http://localhost:5000/api/v1/students')
)
console.log(data)
data
const users = computed(()=>{
  return data.value?.data.students || []
})

// console.log(data.value?.data)
// console.log(data.value?.data.results.name.first)
// console.log(users)
// console.log(users.value)
// console.log(data.value?.data.info.results)


const columms = ref([
  {
      title: "id",
      dataIndex:"id"
  },
  {
      title: "姓名",
      dataIndex:"name"
  },
  {
      title: "年级",
      dataIndex:"grade"
  },
  {
      title: "年龄",
      dataIndex:"age"
  }
])


// async function getdata(){
//     const resp = await axios.get<Back<results>>('https://randomuser.me/api/')
// }
</script>