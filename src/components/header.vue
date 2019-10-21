<template>
  <div class="header">
    <div class="info">
      <a href="/"><img src=""></a>
      <span @click="dialogTableVisible=true">关于</span>
    </div>
    <el-dialog title="关于本项目" :visible.sync="dialogTableVisible" width="35%">
       <div class="inside-dialog">
        <p>作者:<a href="https://github.com/zzdxsongjinlei">宋金磊</a></p>
        <p>
          源码: <i class="el-icon-star-off" ></i><a href=" https://github.com/zzdxsongjinlei">&nbsp;cnode&nbsp;</a> <i class="el-icon-star-off" ></i>方便的话可以star一下！<i class="el-icon-star-off" ></i>
        </p>
        <div>
          <p>技术栈：</p>
          <ul>
            <li>Vue</li>
            <li>Vue Router</li>
            <li>ElementUI</li>
            <li>Axios</li>
          </ul>
        </div>  
       </div>
    </el-dialog>     
  </div>
</template>
<script>
  export default{
    data(){
      return{
        dialogTableVisible:false
      }
    }
    
  }
</script>
<style scoped>
  .header{
    line-height: 50px;
    height: 50px;
    width:100%;
    background:#444;
    color:#fff;
  }
  div.info{
    width: 1200px;
    margin:auto;
    height: 100%;
  }
  .info span{
    float:right;
    font-size: 15px;
    font-weight: bold;
  }
  .el-dislog_body{
    padding-top:10px;
    padding-bottom:0px;
  }
  .inside-dialog p{
    margin:auto;
  }
  .el-icon-star-off::before {
    color: #eb2f96;
 }
 div ul{
  margin-left:40px;
 }
 ul li{
  list-style: none;
  line-height: 28px;
 }
</style>










