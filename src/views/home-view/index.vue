<template>
  <div class="home">
    <top-nav></top-nav>
    <div class="main">
      <side-nav></side-nav>
      <div class="card">
       <post-list></post-list>
      </div>
    </div>
  </div>
</template>

<script>

import TopNav from "@/views/home-view/components/TopNav";
import SideNav from "@/views/home-view/components/SideNav";
import PostList from "@/views/home-view/components/PostList";

export default {
  name: "HomeView",
  components:{
    TopNav,SideNav,PostList
  },
  data(){
    return{
    }
  },
}
</script>

<style scoped>
.home{
  background-color: #f1f1f1;
}
.main{
  display: flex;
  width: 1350px;
  margin:0 auto;
}
.card{
  width: 1000px;

  margin: 0 auto;
  background-color: white;
}
</style>