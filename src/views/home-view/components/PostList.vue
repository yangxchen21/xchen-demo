<template>
  <div class="post-list">
    <article v-for="item in postList" :key="item.id" class="post-item">
      <div class="post-item-body">
        <a class="post-item-title" @click="handleClickTitle(item.id)">{{item.title}}</a>
        <p class="post-item-summary"><img :src="item.avatar" class="post-item-avatar">{{item.content}}</p>
        <footer class="post-item-footer">
          <a href=""><span style="color:#0053a1;">{{item.author}}</span></a>
          <span>{{item.date}}</span>
          <span class="post-item-info">
            <a><span class="iconfont icon-dianzan"></span><span>{{item.favorite}}</span></a>
            <a><span class="iconfont icon-pinglun"></span><span>{{item.comment}}</span></a>
            <a><span class="iconfont icon-icon-"></span><span>{{ item.view }}</span></a>
          </span>

        </footer>
      </div>
    </article>
  </div>
</template>

<script>
import {getArticleList} from "@/apis/article";

export default {
  name: "PostList",
  data(){
    return{
      postList:[]
    }
  },
  methods:{
    handleClickTitle(id){
      console.log(id)
      this.$router.push(`/article/${id}`)
    }
  },
  components:[

  ],
  created() {
    getArticleList().then(response=>{
      this.postList=response.data.list
    })
  }
}
</script>

<style scoped>
.post-item-body{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid silver;
}
.post-item-title{
  color: #005da6;
  font-size: 15px;
}
.post-item-title:hover{
  color: #ff6600;
  font-size: 15px;
}
.post-item-summary{
  font-size: 12px;
  color: #555555;
  line-height: 20px;
}
.post-item-footer{
  display: flex;
  width: 400px;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  color: #555555;
}
.post-item-avatar{
  vertical-align: top;
  float: left;
  margin:0 6px;
  border: 1px solid black;
}
.post-item-info a{
  margin: 0 15px;
  cursor: pointer;
}
.post-item-info a:nth-child(1):hover{
  color: #DD4A68;
}
.post-item-info a:nth-child(2):hover{
  color: cornflowerblue;
}
.post-item-info a:nth-child(3):hover{
  color: mediumseagreen;
}
.post-item-info a span{
  margin: 0 3px;
}
@font-face {
  font-family: "iconfont"; /* Project id 3375458 */
  src: url('../../../../public/iconfont/iconfont.woff2?t=1651655047155') format('woff2'),
  url('../../../../public/iconfont/iconfont.woff?t=1651655047155') format('woff'),
  url('../../../../public/iconfont/iconfont.ttf?t=1651655047155') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>