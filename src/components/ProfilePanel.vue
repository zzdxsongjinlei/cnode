<template>
	<div class="panel">
		<router-link class="user" :to="{path:'/user/'+user.loginname}">
			<img :src="user.avatar_url"/>
			<span>{{user.loginname}}</span>
		</router-link>	
		<div>积分：{{user.score}}</div>
		<div>Github:<a :href='"https://github.com/"+user.userhubUsername'>{{user.githubUsername}}</a>
		</div>
		<div>注册时间:{{$moment(user.create_at,'YYYY-MM-DD').startOf('day').fromNow()}}</div>
	</div>
	
</template>
<script>
	import {getUserByName} from'../untils/api.js';
	import eventProxy from '../untils/eventProxy.js';
	export default{
		name:'ProfilePanel',
		data(){
			return{
				user:{}
			}
		},
		props:['loginname'],
		methods:{
			fetchData(loginname){
				var _this=this;
				getUserByName(loginname).then(function(response){
					_this.user=response.data;
					eventProxy.trigger("user",response.data);
				});

			}
		},
		created(){
			if(!this.loginname){
				return ;
			}
			this.fetchData(this.loginname);
			
		},
		watch:{
			loginname:function(loginname){
				if(!loginname){
					return;
				}
				this.fetchData(loginname);
			}
		}

	}
</script>
<style scoped>
.panel{
	display: flex;
	flex-direction: column;
	color:black;
	padding:20px;
	box-shadow: 0 2px 12px rgba(0,0,0,0.1);
}
.panel>a{
	display: flex;
	align-items: center;
}
.panel>a>img{
	width: 48px;
	height:48px;
	border-radius: 5px;
	margin-right:20px;
}
.user{
	margin-bottom: 10px;
}

</style>







