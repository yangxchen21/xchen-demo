import Mock from 'mockjs'


Mock.mock('/user/login','post',{
    token:'@natural'
})
Mock.mock(RegExp("/user/info"+".*"),'get',{
    username:'@cname'
})
Mock.mock("/user/logout",'post',{
    res:'ok'
})