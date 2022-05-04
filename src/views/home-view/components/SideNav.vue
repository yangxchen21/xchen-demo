<template>
  <ul class="side-nav">
    <li><a href="">分类</a></li>
    <li><a href="">精华</a></li>
    <li><a href="">候选</a></li>
    <hr>
    <li><a href="">订阅</a></li>
    <li><a href="">关注</a></li>
    <li><a href="">我评</a></li>
    <li><a href="">我赞</a></li>
    <li><a href="">更多</a></li>
  </ul>
</template>

<script>
export default {
  name: "SideNav"
}
</script>

<style scoped>
.side-nav{
  list-style-type: none;
  display: flex;
  flex-direction: column;
  line-height: 22.5px;
  color: #555555;
  font-size: 14px;
}
.side-nav li{
  line-height: 22.5px;
  margin: 10px 0;
}
.side-nav li a{
  text-decoration: none;
  color: #555555;
}
.side-nav li a:hover{
  color:dodgerblue;
}
</style>