<template>
  <div class="home">
    <top-nav></top-nav>
    <div class="main">
      <el-card class="card" :="article">
        <div class="arti-title">
          {{article.title}}
        </div>
        <div class="arti-content">
          {{article.content}}
        </div>
        <span>编辑于{{article.date}}</span>
        <hr>
        <div class="arti-footer">
            <a title=""><span class="iconfont icon-dianzan"></span><span style="margin-left: 5px">{{article.favorite}}</span></a>
            <a title=""><span class="iconfont icon-pinglun"></span><span style="margin-left: 5px"> {{article.comment}}</span></a>
            <a title=""><span class="iconfont icon-icon-"></span><span style="margin-left: 5px">{{article.view }}</span></a>
        </div>
      </el-card>
      <el-card class="card"> 评论区
        <ul>
          <li>qwqe
          </li>
          <li>qwqe
          </li>
        </ul>
      </el-card>
    </div>
  </div>

</template>

<script>
import TopNav from "@/views/home-view/components/TopNav";
import {getArticleDetail} from "@/apis/article";

export default {
  name: "ArticleView",
  created(){
    getArticleDetail(this.id).then(response=>{
      this.article=response.data
      console.log(this.article)
    })
  },
  data(){
    return{
      article:{}
    }
  },

  components: {
    TopNav
  },
  props:['id']

}
</script>

<style scoped>
ul{
  list-style-type: none;
}
.main{

  padding: 15px;
  display: flex;
  width: 1350px;
  margin:0 auto;
  align-items: center;
  flex-direction: column;
}
.card{
  width: 1000px;
  margin: 5px;
}
.arti-title{
  font-size: 18px;
  font-weight: bolder;
  text-align: center;
  margin: 5px 16px;
}
.arti-content{
  margin: 5px 16px;
}
.arti-footer{
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px 16px;

}
.arti-footer a{
  margin: 0 15px;
  cursor: pointer;
}
.arti-footer a:nth-child(1):hover{
  color: #DD4A68;
}
.arti-footer a:nth-child(2):hover{
  color: cornflowerblue;
}
.arti-footer a:nth-child(3):hover{
  color: mediumseagreen;
}
@font-face {
  font-family: "iconfont"; /* Project id 3375458 */
  src: url('../../../public/iconfont/iconfont.woff2?t=1651655047155') format('woff2'),
  url('../../../public/iconfont/iconfont.woff?t=1651655047155') format('woff'),
  url('../../../public/iconfont/iconfont.ttf?t=1651655047155') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>