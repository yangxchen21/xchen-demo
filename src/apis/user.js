
import request from "@/utils/request";
import {getToken} from "@/utils/auth";
export function login(data){
    return request({
        url:'/user/login',
        method:'post',
        data
    })
}
export function getInfo(token){

    return request({
        url:'/user/info',
        method:'get',
        params:{token}
    })
}
export function logout(){
    return request({
        url:'/user/logout',
        method:'post',
    })
}
//发表评论
export function doComment(data){
    return request({
        url:'/user/comment',
        headers:{
            "token":getToken()
        },
        method:'post',
        data
    })
}
//发表回复
export function doReply(data){
    return request({
        url:'/user/reply',
        header:{
            "token":getToken()
        },
        method:'post',
        data
    })
}