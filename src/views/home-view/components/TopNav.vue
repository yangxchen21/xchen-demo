<template>
  <div class="top_nav">
    <div class="nav_main">
      <ul class="nav_left">
        <li> <div class="img_place"></div></li>
        <li v-for="item in this.navBarList" :key="item" class="nav_list"><a href="">{{item}}</a></li>
        <li ><a href="">发现</a></li>
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
          欢迎，{{username}}，
          <a @click="handleClickLogout">退出</a>
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
    }
  },
  computed:{
    isLogin(){
      return this.$store.getters.token?true:false
    },
    username(){
      return this.$store.getters.name
    }
  },
  methods:{
    handleClickLogin(){
      this.$router.push({path:'/login'})
    },
    handleClickLogout(){
      this.$store.dispatch('userModule/logout')
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
</style>