import { createApp } from 'vue'
import './style.css'
import 'ant-design-vue/dist/reset.css'
import antdv from 'ant-design-vue'
import router from './router/a5router'
import Button from 'vant'
import Cell from 'vant'
import CellGroup from 'vant'
import Calendar from 'vant'
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import App from './App.vue';


// =============================================================================================================================================
// import App from './App.vue'
// createApp(App).mount('#app')
// =============================================================================================================================================
// import E0 from './views/E0.vue'
// createApp(E0).mount('#app')
// =============================================================================================================================================
// import E1 from './views/E1.vue'
// createApp(E1).mount('#app')
// =============================================================================================================================================
// import E2 from './views/E2.vue'
// createApp(E2).mount('#app')
// =============================================================================================================================================
// import E8 from './views/E8.vue'
// createApp(E8).mount('#app')
// =============================================================================================================================================
// console.log(import.meta.env.VITE_BACKEND_API_BASE_URL)
// console.log()
// =============================================================================================================================================


import A5 from './views/A5.vue' 
createApp(A5).use(antdv).use(router).use(Button).use(Cell).use(CellGroup).use(Calendar).mount('#app')


// createApp(A5).use(antdv).use(router).mount('#app')

// import A54 from './views/A54.vue' 
// createApp(A54).use(antdv).use(router).use(Button).use(Cell).use(CellGroup).use(Calendar).mount('#app')
