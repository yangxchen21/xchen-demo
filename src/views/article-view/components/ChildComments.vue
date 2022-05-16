<template>
  <ul class="child-comment-body">
    <li v-for="item in commentsList" :key="item.id">
      <div class="child-comment-item">
        <div class="child-comment-title">
          <img :src="item.avatar">
          {{item.replier}}&nbsp;<span>回复</span>&nbsp;{{item.asker}}
        </div>
        <div class="child-comment-body">
          <div class="child-comment-content">{{item.content}}</div>
          <div class="child-comment-footer">点赞 <a @click="handleClickReplyText(item)">回复</a></div>
          <div class="comment-reply-area" v-if="item.isReplid">
            <el-input v-model="replyText" placeholder="回复" :autosize="{minRows:1}" type="textarea" />
            <el-button type="primary" style="width: 100px" @click="handleClickReplyButton(item)">回复</el-button>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import {getChildComments} from "@/apis/article";
import {doReply} from "@/apis/user";

import {checkLogin} from "@/utils/check";

export default {
  name: "ChildComments",
  props:['commentId','index'],
  data(){
    return{
      commentsList:[
        {id:1,author:'xxx',}
      ],
      replyText:''
    }
  },
  methods:{
    //多级评论
    handleClickReplyButton(e){
      if(!checkLogin()){
        return;
      }
      let data={
        asker:e.replier,
        replyText:this.replyText,
        date:new Date()
      }
      doReply(data).then(()=>{
        e.isReplid=false
        this.replyText=''
        getChildComments(this.commentId).then(response=>{
          this.commentsList=response.data.list
        })
      })

    },
    handleClickReplyText(e){
      if(e.isReplid==true)  e.isReplid=false
      else
        e.isReplid=true
    },
    getComments(id){
      getChildComments(id).then(
          response=>{
            this.commentsList=response.data.list
          }
      )
    }
  },
  created() {
    getChildComments(this.commentId).then(response=>{
      this.commentsList=response.data.list
    })
  }
}
</script>

<style scoped>
li{
  list-style-type: none;
}
.comment-reply-area{
  display: flex;
}
</style>