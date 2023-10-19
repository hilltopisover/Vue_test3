<template>
    <img src="../assets/wallhaven-2y2y29.jpg" class="picture-background">
    <!-- <div>自己的小测试</div> -->
    <router-view></router-view>
</template>
<script setup lang = 'ts'>
</script>
<style>
.picture-background{
  background: no-repeat;
  position: fixed;
  overflow: auto;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index:-1;
}
</style>