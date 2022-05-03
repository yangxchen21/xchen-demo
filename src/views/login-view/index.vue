<template>
<div class="login-page">
  <el-card class="login-box">
    <div class="container">
      <h1 class="title">用户登录</h1>
      <div class="login-input-group">
        <div class="login-input-item">
          <el-input placeholder="登陆邮箱/用户名" v-model="userInfo.username"></el-input>
        </div>
        <div class="login-input-item">
          <el-input placeholder="密码" v-model="userInfo.password"></el-input>
          <a href="" class="forget_passwd" >忘记登录密码</a>
        </div>
      </div>
      <div class="button-group" >
        <div>
          <el-checkbox  label="记住密码" size="large" />
        </div>
        <el-button type="primary" @click="handleClickLogin">登录</el-button>
      </div>
      <div class="login-footer">
        <div>没有账户，<a href="">立即注册</a></div>
      </div>
    </div>
  </el-card>
</div>
</template>

<script>

export default {
  name: "LoginView",
  data(){
    return{
      userInfo:{
        username:'',
        password:''
      }
    }
  },
  methods:{
    handleClickLogin(){
      this.$store.dispatch('userModule/login',this.userInfo)
      .then(()=>{

        this.$router.push({path:'/'})
      })
    },

  }
}
</script>

<style scoped>
.login-page{
  background-color: lightslategrey;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-box{
  width: 400px;
}
.container{
  font-size: 14px;
  line-height: 20px;
  padding: 16px 32px;
}

.title {
  color: #393b3d;

  font-size: 24px;
  font-weight: 300;
  line-height: 32px;
  margin: 8px 0px 24px;
  text-align: center;
}

.login-input-group{
  display: flex;
  flex-direction: column;
}
.login-input-item{
  display: inline-flex;
  flex-direction: column;
  margin: 10px 0;
}
a{
  color: #3494fc;

  font-size: 12px;
  line-height: 16px;
  text-align: left;
  align-self: flex-end;
  text-decoration: none;
}
.button-group{
  display: flex;
  flex-direction: column;
  margin: 5px 0;
}
.login-footer{
  margin: 10px 0;
  font-size: 12px;
}
</style>