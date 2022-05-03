<template>
  <top-nav></top-nav>
  <div class="main"></div>
</template>

<script>

import TopNav from "@/views/home-view/components/TopNav";

export default {
  name: "HomeView",
  components:{
    TopNav
  },
  data(){
    return{

    }
  },
}
</script>

<style scoped>

.main{
  width: 1000px;
  margin:0 auto;
  height: 800px;
  background-color: darkgrey;
}
</style>