import { createRouter, createWebHashHistory } from "vue-router";
import A51 from '../views/A51.vue'
import A52 from '../views/A52.vue'
import { useStorage } from "@vueuse/core";
const routes = [
    { 
        path: '/a1',
        name: 'login',
        component: A51
    },
    {
        path: '/a2',
        component: A52
    },
    {
        path: '/a3',
        name: 'main',
        component: ()=>import("../views/A53.vue"),
        children: [
            {
                path: 'student',
                name: 'student',
                component: ()=>import("../views/A531.vue")
            },
            {
                path: 'teacher',
                component: ()=>import("../views/A532.vue")
            }
        ] 
    },
    {
        path: '/a4',
        name: 'menu',
        component: ()=>import("../views/A54.vue"),
        children: [
            {
                path: 'order',
                name: 'order',
                component: ()=>import("../views/A541.vue")
            },
            {
                path: 'nothing',
                component: ()=>import("../views/A542.vue")
            }
        ] 
    },
    {
        path:'/:pathMatcher(.*)*',
        redirect:'/a1'
    }
]

const router = createRouter({
    history: createWebHashHistory(), //路径格式
    routes: routes  //路由数组
})

export function resetRoutes(){
    serverToken.value = null
    serverUsername.value = null
}

//每次路由跳转之前执行箭头函数
router.beforeEach((to, from)=>{
    if(to.name === 'main' && !serverToken.value){
        return '/login'
    }
    if(to.name === 'student' && !serverToken.value){ return '/login'}
})

//每次跳转之后执行，为了解决vue中所有的都用一个html文件的弊端。
router.afterEach((to, from)=>{
    document.title = to.name?.toString() || ''
})


export const serverUsername = useStorage<string>('serverUsername','')
export const serverToken = useStorage<string>('serverToken','')

export default router
