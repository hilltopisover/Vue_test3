<template>
    <div>
      <div v-for="student in students" :key="student.id">
        {{ student.name }} - {{ student.grade }} - {{ student.age }}
      </div>
    </div>
    <a-table :columms="columns"  :dataSource="students"></a-table>
</template>
  
<script lang="ts" setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';

    interface Student {
    id: number;
    name: string;
    grade: string;
    age: string;
    }

    const students = ref<Student[]>([]);

    onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/v1/students');
        students.value = response.data.students;
    } catch (error) {
        console.error(error);
    }
    });

    const columns = ref([
    {
        title:"姓名", 
        dataIndex:""
    },
    {
        title:"年级", 
        dataIndex:""
    },
    {
        title:"年龄", 
        dataIndex:""
    }
    ])
</script>
  