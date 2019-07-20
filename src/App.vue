<template>
  <div id="app">
    <Header/>
    <div class="main-section">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/header.vue'
export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
}
*{
  padding:0px;
  margin:0px;
}
.main-section{

  width:1200px;
  margin:auto;
  margin-top:40px;
}
ul li{
  list-style: none;
}
a{
  text-decoration: none;
  font-size:16px;
  color:#44da65;
}
</style>
