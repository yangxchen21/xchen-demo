import Mock from 'mockjs'
const Random=require('mockjs').Random


Mock.mock('/user/login','post',{
    token:'@natural'
})
Mock.mock(RegExp("/user/info"+".*"),'get',{
    username:'@cname'
})
Mock.mock("/user/logout",'post',{
    res:'ok'
})
Mock.mock("/article/list","post",{
    "list|7-25":[
        {
            'id':'@increment(1)',
            'date':'@date("yyyy-MM-dd")',
            'author':'@cname',
            'title':'@ctitle',
            'content':'@cparagraph',
            'favorite':'@integer(0,1000)',
            'comment':'@integer(0,1000)',
            'view':'@integer(0,1000)',
            'avatar':Random.image('52x52','#80a2f1','avatar')
        }
    ]
})