import request from "@/utils/request";

export function getArticleList(){
    return request({
        url:'/article/list',
        method:'post',
    })
}
export function getArticleDetail(articleId){
    return request({
        url:'/article/detail',
        method:'get',
        params:{articleId}
    })
}
export function getArticleComments(articleId){
    return request({
        url:'/article/comments',
        methods:'get',
        params:{articleId},
    })
}
//获取子评论
export function getChildComments(commentId){
    return request({
        url:'/article/childcomment',
        methods:'get',
        params:{commentId}
    })
}