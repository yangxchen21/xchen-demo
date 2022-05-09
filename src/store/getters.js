
const getters={
    name:state=>state.userModule.username,
    token:state=> state.userModule.token,
    avatar:state=> state.userModule.avatar
}
export default getters