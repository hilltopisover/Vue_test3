<template>
    <h1>无敌暴龙战士</h1>
    <h1>无敌暴龙战士</h1>
    <h1>无敌暴龙战士</h1>
    <h1>无敌暴龙战士</h1>
    <h1>无敌暴龙战士</h1>
    <h1>无敌暴龙战士</h1>
    <h1>无敌暴龙战士</h1>
    <h1>无敌暴龙战士</h1>
    <h1>无敌暴龙战士</h1>
    <h1>无敌暴龙战士</h1>
    <h1>无敌暴龙战士</h1>
    <h1>无敌暴龙战士</h1>
    <h1>无敌暴龙战士</h1>
    <h1>无敌暴龙战士</h1>
    <img src = ''>
    <div id="components-grid-demo-playground">
      <div style="margin-bottom: 16px">
        <!-- <span style="margin-right: 6px">Horizontal Gutter (px):</span>
        <div style="width: 50%">
          <a-slider
            v-model:value="state.gutterKey"
            :min="0"
            :max="Object.keys(state.gutters).length - 1"
            :marks="state.gutters"
            :step="null"
          />
        </div> -->
        <!-- <span style="margin-right: 6px">Vertical Gutter (px):</span>
        <div style="width: 50%">
          <a-slider
            v-model:value="state.vgutterKey"
            :min="0"
            :max="Object.keys(state.vgutters).length - 1"
            :marks="state.vgutters"
            :step="null"
          />
        </div> -->
        <span style="margin-right: 6px">Column Count:</span>
        <div style="width: 50%">
          <a-slider
            v-model:value="state.colCountKey"
            :min="0"
            :max="Object.keys(state.colCounts).length - 1"
            :marks="state.colCounts"
            :step="null"
          />
        </div>
      </div>
      <a-row >
        <a-col
          v-for="item in datastream"
          :key="item.toString()"
          :span="24 / state.colCounts[state.colCountKey]"
        >
          <div>Column</div>
          <div>{{item}}</div>
          <!-- <img src = "getIcon(img1)" class = 'img'> -->
          <!-- <img src = '/src/assets/cat2.jpg' class ='img'> -->
          <!-- <img class = 'img' :src="util.getAssetsFile('cat1.jpg')" alt=""/>
          <img :src="cat1"> --> 
          <img :src="item" class="img">
        </a-col>
        <!-- <a-col
          v-for="item in state.colCounts[state.colCountKey]"
          :key="item.toString()"
          :span="24 / state.colCounts[state.colCountKey]"
        >
          <div>Column</div>
        </a-col> -->
      </a-row>
      <!-- Another Row: -->
      <!-- <a-row :gutter="[state.gutters[state.gutterKey], state.vgutters[state.vgutterKey]]">
        <a-col
          v-for="item in state.colCounts[state.colCountKey]"
          :key="item.toString()"
          :span="24 / state.colCounts[state.colCountKey]"
        >
          <div>Column</div>
        </a-col>
      </a-row> -->
      <!-- <pre>{{ rowColHtml }}</pre> -->
      <br />
      <!-- <pre>{{ rowColHtml }}</pre> -->
    </div>
</template>



<script lang="ts" setup>
  import { computed, reactive, ref } from 'vue';
  const state = reactive<{
    gutterKey: number;
    vgutterKey: number;
    colCountKey: number;
    gutters: { [key: number]: number };
    colCounts: { [key: number]: number };
    vgutters: { [key: number]: number };
  }>({
    gutterKey: 1,
    vgutterKey: 1,
    colCountKey: 2,
    gutters: {},
    colCounts: {},
    vgutters: {},
  });
  // [8, 16, 24, 32, 40, 48].forEach((value: number, i: number) => {
  //   state.gutters[i] = value;
  // });
  // [8, 16, 24, 32, 40, 48].forEach((value, i) => {
  //   state.vgutters[i] = value;
  // });
  [2, 3, 4, 6].forEach((value, i) => {
    state.colCounts[i] = value;
  });
  import cat1 from '../assets/cat1.jpg'
  import cat2 from '../assets/cat2.jpg'
  import cat3 from '../assets/cat3.jpg'
  import cat4 from '../assets/cat4.jpg'
  import cat5 from '../assets/cat5.jpg'
  import cat6 from '../assets/cat6.jpg'
  const datastream = ref([cat1, cat2, cat3, cat4, cat5, cat6])

  const img1 = new URL('../assets/cat1.jpg', import.meta.url).href
  const img2 = new URL('../assets/cat2.jpg', import.meta.url).href
  const img3 = new URL('../assets/cat3.jpg', import.meta.url).href
  const img4 = new URL('../assets/cat4.jpg', import.meta.url).href
  const img5 = new URL('../assets/cat5.jpg', import.meta.url).href
  const img6 = new URL('../assets/cat6.jpg', import.meta.url).href
  const imgstream = ref([img1, img2, img3, img4, img5, img6])
  
  function getIcon(name: string) {
    return new URL(`../assets${name}`, import.meta.url).href;
  }

  const imgUrl = new URL('./img.png', import.meta.url).href


  import util from '../util/utils'
  // const rowColHtml = computed(() => {
  //   const colCount = state.colCounts[state.colCountKey];
  //   const getter = [state.gutters[state.gutterKey], state.vgutters[state.vgutterKey]];
  //   let colCode = '<a-row :gutter="[' + getter + ']">\n';
  //   for (let i = 0; i < colCount; i++) {
  //     const spanNum = 24 / colCount;
  //     colCode += '  <a-col :span="' + spanNum + '"/>\n';
  //   }
  //   colCode += '</a-row>';
  //   return colCode;
  // });
</script>



<style scoped>
  :deep(#components-grid-demo-playground) [class~='ant-col'] {
    background: transparent;
    border: 0;
  }
  :deep(#components-grid-demo-playground) [class~='ant-col'] > div {
    height: 120px;
    font-size: 14px;
    line-height: 120px;
    background: #0092ff;
    border-radius: 4px;
  }
  :deep(#components-grid-demo-playground) pre {
    padding: 8px 16px;
    font-size: 13px;
    background: #f9f9f9;
    border-radius: 6px;
  }
  :deep(#components-grid-demo-playground) pre.demo-code {
    direction: ltr;
  }
  :deep(#components-grid-demo-playground) .ant-col {
    padding: 0;
  }
  .img{
    width: 250px;
    height: 200px;
  }
</style>
  