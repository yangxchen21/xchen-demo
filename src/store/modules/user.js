import {getToken, removeToken, setToken} from "@/utils/auth";
import {getInfo, login, logout} from "@/apis/user";


const user={
    state:{
        username:'',
        token:getToken()
    },
    getters:{

    },
    mutations:{
        SET_TOKEN:(state,token)=>{
            state.token=token
        },
        SET_NAME:(state,name)=>{
            state.username=name
        }
    },
    actions:{
        login({commit},userInfo){
            const {username,password}=userInfo
            return new Promise((resolve,reject)=>{
                login({username,password}).then(response=>{

                        const {data}=response
                        commit('SET_TOKEN',data.token)
                        setToken(data.token)
                        resolve()
                    }
                ).catch(error=>{
                    reject(error)
                })
            })
        },
        getInfo({commit,state}){
            return new Promise((resolve,reject)=>{
                getInfo(state.token).then(response=>{
                    console.log(response)
                    const {data}=response
                    const {username}=data
                    commit('SET_NAME',username)
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        logout({commit}){
            return new Promise((resolve,reject)=>{
                logout().then(()=>{
                    commit('SET_TOKEN','')
                    commit('SET_NAME','')
                    removeToken()
                    resolve()
                }).catch(err=>{
                    reject(err)
                })
            })
        }
    },
    namespaced:true
}
export default user