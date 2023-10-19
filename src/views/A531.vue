<template>
    <div>
      <div>{{serverUsername}}</div>
      <!-- <Button />
      <cell />
      <CellGroup /> -->
      <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
      </van-cell-group>
      <van-cell title="单元格" value="内容" label="描述信息" />
      <van-button class = "margin-right-button" type="primary">主要按钮</van-button>
      <van-button class = "margin-right-button" type="success">成功按钮</van-button>
      <van-button class = "margin-right-button" type="default">默认按钮</van-button>
      <van-button class = "margin-right-button" type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
      <van-cell title="选择单个日期" :value="date" @click="show = true" />
      <van-calendar v-model:show="show" @confirm="onConfirm" />
      <van-cell title="日期" :value = 'date'  label="v-bind" />
      <!-- <van-image width="100" height="100" src="../assets/cat2.jpg" /> -->
      <!-- <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" /> -->
      <img src="../assets/cat1.jpg">
      <img src="../assets/cat1.jpg">
      <img src="../assets/cat1.jpg">
      <img src="../assets/cat1.jpg">
    </div>
</template>


<script setup lang = 'ts'>
    console.log("守护好")
    // import { Button } from 'vant'
    // import { Cell, CellGroup } from 'vant';
    import { ref } from 'vue';
    import { serverUsername } from '../router/a5router';

    const date = ref('');
    const show = ref(false);
    const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;
    const onConfirm = (value) => {
    show.value = false;
    date.value = formatDate(value);
    };
</script>

<style>
  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }

  .margin-right-button{
    margin-right: 20px;
  }

  .rightPart{
    height: 100%;
    width: 100%;
    overflow-y: scroll;
  }

</style>