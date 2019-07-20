<template>
	<div class="panel">
		<header>最近参与的话题</header>
		<Divider/>
		<template v-for="item in user.recent_replies">
			<div :key="item.id">
				<router-link v-if="simple" :to="{path:'/topic/'+item.id}">{{item.title}}</router-link>
				<div v-else>
					<div class="main">
						<router-link class="avatar" :to="{path:'/user/'+item.author.loginname}">
							<img :src="item.author&& item.author.avatar_url" />
						</router-link>
						<router-link key={item.id} :to="{path:'/topic/'+item.id}">
							{{item.title}}
						</router-link>
					</div>
					<span class="time">
		                {{$moment(item.last_reply_at, 'YYYY-MM-DD').startOf('day').fromNow()}}
			        </span>	
				</div>
				<Divider class="inside-divider" />
			</div>
		</template>
		
	</div>
	
</template>
<script>
	import eventProxy from '../untils/eventProxy.js';
	import Divider from '../components/Divider.vue';
	export default{
		name:'recentreply',
		data(){
			return{
				user:{}

			}
		},
		props:{
			simple:{
				default:true,
				type:Boolean
			}

		},
		created(){
			this.isUnmounted=false;
			var _this=this;
			eventProxy.on('user',function(data){
				if(!_this.isUnmounted){
					_this.user=data;
					console.log(_this.user);
				}
			});
		},
		destroyed(){
			this.isUnmounted=true;
		},
		components:{
			Divider
		}


	}
</script>
<style scoped>
.panel{
	display: flex;
	flex-direction: column;
	color:black;
	padding:20px;
	margin:20px 0;
	box-shadow: 0 2px 12px rgba(0,0,0,0.1);
}
header{
	font-weight:bold;
	color:black;
}
.panel>div{
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
img{
	width:30px;
	height:30px;
	border-radius: 3px;
	margin-right: 5px;
}
.main{
	display: flex;
	
	align-items: center;
}
.main>div{
	display: flex;
	align-items: center;
}
.avatar{
	margin-left:10px;
}
.time{
	float:right;
	color:#777;
	font-size:11px;
}
.inside-divider{
	margin:10px 0;
}
.divider{
	margin:12px 0;
}

</style>








