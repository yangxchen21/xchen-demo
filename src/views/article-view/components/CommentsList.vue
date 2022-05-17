<template>
  <div class="comment-input-area">
    <el-input
      v-model="textarea"
      :autosize="{minRows:3}"
      type="textarea"
      placeholder="发表评论"
      class="comment-input-box"
  />
    <el-button type="primary" style="width: 100px" @click="handleClickCommentBtn">发表评论</el-button>
  </div>

  <article v-for="(item,index) in commentsList" :key="item.id">
    <div class="comment-item-body">
      <div class="comment-avatar"><img :src="item.avatar"></div>
      <div class="comment-author">{{item.author}}</div>
      <div class="comment-content">{{item.content}}</div>
    </div>
    <div class="comment-footer"><a>点赞</a> <a @click="handleClickReplyText(item)">回复</a></div>
    <div class="comment-reply-area" v-if="item.isReplid">
      <el-input v-model="replyText" placeholder="回复" :autosize="{minRows:1}" type="textarea" class="comment-reply-input"/>
      <el-button type="primary" style="width: 100px" @click="handleClickReplyButton(item,index)">回复</el-button>
    </div>
    <child-comments :commentId="item.id" ref="childComments" :index="index"></child-comments>
  </article>
</template>

<script>
import {getArticleComments, } from "@/apis/article";
import {doComment, doReply} from "@/apis/user";

import ChildComments from "@/views/article-view/components/ChildComments";
import {checkLogin} from "@/utils/check";

export default {
  name: "CommentsList",
  components: {
    ChildComments
  },

  props:[
      'articleId'
  ],
  data(){
    return{
      commentsList:[],
      textarea:"",
      replyText:"",
    }
  },
  methods:{
    //回复一级评论
    handleClickReplyButton(e,index){
      if(!checkLogin()){
        return;
      }
      let data={
        asker: e.author,
        date:new Date(),
        replyText:this.replyText
      }
      doReply(data).then(()=>{
        e.isReplid=false
        this.replyText=''
       this.$refs.childComments[index].getComments(e.commentId)
      })
    },
    handleClickReplyText(e){
      if(e.isReplid==true)  e.isReplid=false
      else
        e.isReplid=true
    },
    //评论
    handleClickCommentBtn(){
      if(!checkLogin()){
        return;
      }
      let data={
        "comment":this.textarea,
        "date":new Date()
      }
      console.log(data)
      doComment(data).then(getArticleComments(this.articleId)
          .then(response=>{
        this.commentsList=response.data.list
      }))
    }
  },
  created() {
    //获取文章列表
    getArticleComments(this.articleId).then(response=>{
      console.log(response.data)
      this.commentsList=response.data.list
    })
  }
}
</script>

<style scoped>
.comment-reply-area{
  display: flex;
}
.comment-reply-input{
  width: 700px;
  margin-right: 10px;
}
.comment-input-area{
  display: flex;
}
.comment-input-box{
  width: 800px;
  margin:0 15px
}
.comment-item-body{
  display: grid;
  grid-template-columns: 1fr 12fr;
  grid-template-areas:
      "image  author"
      "image content";
  margin:20px 10px 5px 10px;
  padding: 5px 10px;
  border-top: 1px solid grey;

}
.comment-footer{
  text-align: right;
}
img{
  border-radius: 50%;
}
.comment-author{
  grid-area: author;
}
.comment-avatar{
  grid-area: image;

}
.comment-content{
  grid-area: content;
}
a{
  cursor: pointer;
}
</style>