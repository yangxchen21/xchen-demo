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

  <article v-for="item in commentsList" :key="item.id">
    <div class="comment-item-body">
      <div class="comment-avatar"><img :src="item.avatar"></div>
      <div class="comment-author">{{item.author}}</div>
      <div class="comment-content">{{item.content}}</div>

    </div>
  </article>
</template>

<script>
import {getArticleComments} from "@/apis/article";
import {doComment} from "@/apis/user";
import {getToken} from "@/utils/auth";
import {ElMessage} from "element-plus";

export default {
  name: "CommentsList",
  props:[
      'articleId'
  ],
  data(){
    return{
      commentsList:[],
      textarea:""
    }
  },
  methods:{
    handleClickCommentBtn(){
      if(!getToken()){
        ElMessage.error('请先登录')
        return
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
    getArticleComments(this.articleId).then(response=>{
      console.log(response.data)
      this.commentsList=response.data.list
    })
  }
}
</script>

<style scoped>
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
  margin:20px 10px;
  padding: 5px 10px;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
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
</style>