<script setup lang="ts">
import { ref } from 'vue';

const date = ref('');
const show = ref(false);

const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;
const onConfirm = (value) => {
  show.value = false;
  date.value = formatDate(value);
};
</script>