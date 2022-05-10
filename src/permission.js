import router from "@/router";
import {getToken} from "@/utils/auth";
import store from "@/store";
const whiteList=['/']
router.beforeEach((to,from,next)=>{
    const hasToken=getToken()


    if(to.path==='/login'){
        if(hasToken){
            store.dispatch('userModule/getInfo').then(()=>{
                    next()
                }
            )
        }else{
            next()
        }
    }else{

        if(hasToken){
            store.dispatch('userModule/getInfo').then(
                ()=>{
                    next()}
            )
        }else{
            if (whiteList.indexOf(to.path) !== -1||to.path.includes('/article')) {
                // in the free login whitelist, go directly
                next()
            } else {
                // other pages that do not have permission to access are redirected to the login page.
                next('/login')
            }
        }
    }
})