
import {createRouter, createWebHashHistory} from "vue-router";

const routes=[
    {path:'/',component:()=>import("@/views/home-view")},
    {path: '/login',component:()=>import("@/views/login-view")}
]
const router=createRouter({
    history:createWebHashHistory(),
    routes
})

export default router