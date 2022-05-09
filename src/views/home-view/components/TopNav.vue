<template>
  <div class="top_nav">
    <div class="nav_main">
      <ul class="nav_left">
        <li> <div class="img_place"></div></li>
        <li v-for="item in this.navBarList" :key="item" class="nav_list"><a href="">{{item}}</a></li>
        <li ><a href="">发现<span class="sjx"></span></a></li>
      </ul>
      <ul class="nav_right" >
        <li>
          <form><input type="text"><button>搜索</button></form>
        </li>
        <li v-if="!isLogin">
          <a href="">注册</a>
          &nbsp;
          <a  @click="handleClickLogin"  >登录</a >
        </li>
        <li v-if="isLogin" class="login_bar">
          <span class="iconfont icon-bianji"></span>
          <span class="iconfont icon-jiluwenben"></span>
          <span class="iconfont icon-xiaoxi"></span>
          <div class="drop-down-button"  @mouseleave="cancelDisplayMenu">
            <span>
            <img :src="this.avatar" @mouseover="displayMenu">
          </span>
            <div class="drop-down-menu" v-show="isDisplayMenu" >
              <a>我的博客</a>
              <a>我的园子</a>
              <a>账号设置</a>
              <a @click="handleClickLogout">退出登录</a>
            </div>
          </div>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "TopNav",
  data(){
    return{
      navBarList:['首页','新闻','博问','专区','班级','怀旧'],
      isDisplayMenu:false
    }
  },
  computed:{
    isLogin(){
      return this.$store.getters.token?true:false
    },
    username(){
      return this.$store.getters.name
    },
    avatar(){
      return this.$store.getters.avatar
    }
  },
  methods:{
    handleClickLogin(){
      this.$router.push({path:'/login'})
    },
    handleClickLogout(){
      this.$store.dispatch('userModule/logout')
    },
    displayMenu(){
      this.isDisplayMenu=true
    },
    cancelDisplayMenu(){
      this.isDisplayMenu=false
    }
  }
}
</script>

<style scoped>
.top_nav{
  height: 54px;
  display: flex;
  align-items: center;
  padding: 8px 40px;
  background-color: white;
  border-bottom: 1px solid lightslategrey;
}
.nav_main{
  height: 36px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav_left{
  height: 36px;
  display: flex;
  align-items: center;
}
.nav_left li{
  list-style-type: none;
  padding: 0 15px;
  font-size: 16px;
}
.nav_left a{
  color: lightslategrey;
  text-decoration: none;
  font-size: 16px;
}
.nav_left a:hover{
  color: darkblue;
  text-decoration: none;
  font-size: 16px;
}
.nav_right{

  height: 36px;
  display: flex;
  align-items: center;
}
.nav_right li{
  list-style-type: none;
  padding: 0 15px;
  font-size: 16px;
}
.nav_right a{
  color: lightslategrey;
  text-decoration: none;
  font-size: 16px;
}
.nav_right a:hover{
  color: darkblue;
  text-decoration: none;
  font-size: 16px;
}
.img_place{
  width: 98px;
  background-color: lightgray;
  height: 36px;
}
.login_bar{
  display: flex;
  color: lightslategrey;
  font-size: 16px;
}
.login_bar span{
  margin: 0 8px;
  margin-top: 8px;
  vertical-align: center;
  cursor: pointer;
}
.login_bar img{

  vertical-align: center;
  border-radius: 50%;
}
.sjx{
  width: 0;
  height: 0;
  position: relative;
  top: 13px;
  border: 5px solid transparent;
  border-top: 5px solid lightslategrey;
  margin :0 5px
}
.drop-down-button{
  position: relative;
}
.drop-down-menu{
  padding: 5px 10px;
  width:70px;
  position: absolute;
  background-color:white;
  border-radius: 10%;
  border: 1px solid lightslategrey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.drop-down-menu a{
  font-size: 13px;
  line-height: 20px;
  cursor: pointer;
}
@font-face {
  font-family: "iconfont"; /* Project id 3375458 */
  src: url('../../../../public/iconfont/iconfont.woff2?t=1651822152086') format('woff2'),
  url('../../../../public/iconfont/iconfont.woff?t=1651822152086') format('woff'),
  url('../../../../public/iconfont/iconfont.ttf?t=1651822152086') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>