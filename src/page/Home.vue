<template>
  <div class="home">
    <el-tabs @tab-click="tabChanged" v-model="tab">
      <el-tab-pane label="全部" name="all">
        <content-div :list='list' />
      </el-tab-pane>
      <el-tab-pane label="精华" name="good">
         <content-div :list='list' />
      </el-tab-pane>
      <el-tab-pane label="分享" name="share">
         <content-div :list='list' />
      </el-tab-pane>
      <el-tab-pane label="问答" name="ask">
         <content-div :list='list' />
      </el-tab-pane>
      <el-tab-pane label="招聘" name="job">
         <content-div :list='list' />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import {getTopics} from '@/untils/api.js';
  import ContentDiv from '../components/Content.vue'
  export default{
    name:'home',
    data(){
      return{
        page:1,
        limit:20,
        tab:'all',
        list:[],
        store:{}
      }
    },
    components:{
      ContentDiv

    },
    methods:{
      getTopics(){
        var _this=this;
        getTopics({
          page:this.page,
          limit:this.limit,
          tab:this.tab
        })
        .then(function(response){
          _this.list=response.data;
          _this.limit=_this.limit+10;
          const store =_this.store;
          store[_this.tab]={
            limit:_this.limit,
            data:response.data
          };
        });
      },
      scrollMethod(){
        const sumH=document.body.scrollHeight||document.documentElement.scrollHeight;
        const viewH=document.documentElement.clientHeight;
        const scrollH=document.body.scrollTop||document.documentElement.scrollTop;
        if(viewH+scrollH>=sumH){
          this.getTopics();
        }

      },
      tabChanged(){
        const store=this.store;
        if(!store[this.tab]){
          this.limit=20;
          this.list=[];
          this.getTopics();
          return;
        }
        this.list=store[this.tab].data;
        this.limit=store[this.tab].limit;
      }
    },
    created(){
      this.getTopics();
      window.addEventListener("scroll",this.scrollMethod);
    },
    destoryed(){
      window.removeEventListener("scroll",this.scrollMethod);
    }


  }
</script>
<style>
.home{
  margin:auto;
  width: 75%;
  padding:20px 30px;
  box-sizing: border-box;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
}

</style>