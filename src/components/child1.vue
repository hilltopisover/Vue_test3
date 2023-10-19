<template>
    <div>
        <h1>小海</h1>
        <p>{{name}}</p>
        <p>{{country}}</p>
        <img :src="picture">
    </div>
</template>

<script setup lang = 'ts'>
defineProps<{name:string,country:string,picture:string}>()
</script>