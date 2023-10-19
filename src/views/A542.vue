<!-- <template>
    <a-alert :message="`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`" />
    <a-calendar :value="date" @select="onSelect" @panelChange="onPanelChange" />
</template>


<script lang="ts" setup>
  import { ref } from 'vue';
  import dayjs, { Dayjs } from 'dayjs';
  const date = ref(dayjs('2017-01-25'));
  const selectedValue = ref(dayjs('2017-01-25'));
  
  const onSelect = (value: Dayjs) => {
    date.value = value;
    selectedValue.value = value;
  };
  const onPanelChange = (value: Dayjs) => {
    date.value = value;
  };
</script> -->
  

<template>
    <a-alert :message="`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`" />
     <!-- <a-calendar :value="date" @select="onSelect" @panelChange="onPanelChange" /> -->
    <a-calendar v-model:value="value"  @select="onSelect" @panelChange="onPanelChange" @click="showDrawer" >
      <template #dateCellRender="{ current }">
        <ul class="events">
          <li v-for="item in getListData(current)" :key="item.content">
            <a-badge :status="item.type" :text="item.content" />
          </li>
        </ul>
      </template>
      <template #monthCellRender="{ current }">
        <div v-if="getMonthData(current)" class="notes-month">
          <section>{{ getMonthData(current) }}</section>
          <span>Backlog number</span>
        </div>
      </template>
    </a-calendar>

<!--================================ a-drawer =================================== -->
    
    <a-drawer
    title="Create a new account"
    :width="720"
    :open="open"
    :body-style="{ paddingBottom: '80px' }"
    :footer-style="{ textAlign: 'right' }"
    @close="onClose"
  >
    <a-form :model="form" :rules="rules" layout="vertical">
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="Name" name="name">
            <a-input v-model:value="form.name" placeholder="Please enter user name" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Url" name="url">
            <a-input
              v-model:value="form.url"
              style="width: 100%"
              addon-before="http://"
              addon-after=".com"
              placeholder="please enter url"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="Owner" name="owner">
            <a-select v-model:value="form.owner" placeholder="Please a-s an owner">
              <a-select-option value="xiao">Xiaoxiao Fu</a-select-option>
              <a-select-option value="mao">Maomao Zhou</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Type" name="type">
            <a-select v-model:value="form.type" placeholder="Please choose the type">
              <a-select-option value="private">Private</a-select-option>
              <a-select-option value="public">Public</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="Approver" name="approver">
            <a-select v-model:value="form.approver" placeholder="Please choose the approver">
              <a-select-option value="jack">Jack Ma</a-select-option>
              <a-select-option value="tom">Tom Liu</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="DateTime" name="dateTime">
            <a-date-picker
              v-model:value="form.dateTime"
              style="width: 100%"
              :get-popup-container="trigger => trigger.parentElement"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="24">
          <a-form-item label="Description" name="description">
            <a-textarea
              v-model:value="form.description"
              :rows="4"
              placeholder="please enter url description"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <template #extra>
      <a-space>
        <a-button @click="onClose">Cancel</a-button>
        <a-button type="primary" @click="onClose">Submit</a-button>
      </a-space>
    </template>
  </a-drawer>
</template>


<script lang="ts" setup>

import { reactive, ref } from 'vue';
import type { Rule } from 'ant-design-vue/es/form';
const form = reactive({
  name: '',
  url: '',
  owner: '',
  type: '',
  approver: '',
  dateTime: null,
  description: '',
});

const rules: Record<string, Rule[]> = {
  name: [{ required: true, message: 'Please enter user name' }],
  url: [{ required: true, message: 'please enter url' }],
  owner: [{ required: true, message: 'Please select an owner' }],
  type: [{ required: true, message: 'Please choose the type' }],
  approver: [{ required: true, message: 'Please choose the approver' }],
  dateTime: [{ required: true, message: 'Please choose the dateTime', type: 'object' }],
  description: [{ required: true, message: 'Please enter url description' }],
};

const open = ref<boolean>(false);

const showDrawer = () => {
  open.value = true;
};

const onClose = () => {
  open.value = false;
};


  import { ref } from 'vue';
  import dayjs, { Dayjs } from 'dayjs';
  const value = ref<Dayjs>();
  
  const getListData = (value: Dayjs) => {
    let listData;
    // switch (value.date()) {
    //   case 8:
    //     listData = [
    //       { type: 'warning', content: 'This is warning event.' },
    //       { type: 'success', content: 'This is usual event.' },
    //     ];
    //     break;
    //   case 10:
    //     listData = [
    //       { type: 'warning', content: 'This is warning event.' },
    //       { type: 'success', content: 'This is usual event.' },
    //       { type: 'error', content: 'This is error event.' },
    //     ];
    //     break;
    //   case 15:
    //     listData = [
    //       { type: 'warning', content: 'This is warning event' },
    //       { type: 'success', content: 'This is very long usual event。。....' },
    //       { type: 'error', content: 'This is error event 1.' },
    //       { type: 'error', content: 'This is error event 2.' },
    //       { type: 'error', content: 'This is error event 3.' },
    //       { type: 'error', content: 'This is error event 4.' },
    //     ];
    //     break;
    //   default:
    // }
    return listData || [];
  };
  
  const getMonthData = (value: Dayjs) => {
    if (value.month() === 8) {
      return 1394;
    }
  };



    const date = ref(dayjs());
    const selectedValue = ref(dayjs());
    const onSelect = (value: Dayjs) => {
        date.value = value;
        selectedValue.value = value;
    };
    const onPanelChange = (value: Dayjs) => {
        date.value = value;
    };


</script>


<style scoped>
  .events {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .events .ant-badge-status {
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    text-overflow: ellipsis;
    font-size: 12px;
  }
  .notes-month {
    text-align: center;
    font-size: 28px;
  }
  .notes-month section {
    font-size: 28px;
  }
</style>
  