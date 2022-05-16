import {getToken} from "@/utils/auth";
import {ElMessage} from "element-plus";

export function checkLogin(){
    if(!getToken()){
        ElMessage.error('请先登录')
        return false
    }
    return true
}