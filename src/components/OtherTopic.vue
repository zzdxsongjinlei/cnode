<template>
	<div class="panel">
		<header>最近创建的话题</header>
		<Divider class="inside-divider"/>
		<template v-for="item in user.recent_topics">
			<div :key="item.id">
				<router-link v-if="simple" :to="{path:'/topic/'+item.id}">{{item.title}}</router-link>
				<div v-else>
					<div class="mian">
						<div>
							<router-link class="avatar" :to="{path:'/user/'+item.author.loginname}">
								<img :src="item.author&&item.author.avatar_url" />
							</router-link>
							<router-link key={item.id} :to="{path:'/topic/'+item.id}">
								{{item.title}}
							</router-link>
						</div>
						<span class="time">
							{{$moment(item.last_reply_at,'YYYY-MM-DD').startOf('day').fromNow()}}
						</span>
					</div>
					<Divider class="inside-divider" />
				</div>
			</div>
		</template>
	</div>
</template>
<script>
	import Divider from './Divider.vue';
	import eventProxy from '../untils/eventProxy.js';
	export default{
		name:'othertopic',
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
		components:{
			Divider
		},
		created(){
			this.isUnmounted=false;
			var _this=this;
			eventProxy.on("user",function(data){
				if(!_this.isUnmounted){
					_this.user=data;
				}				
			});
		},
		destroyed(){
			this.isUnmounted=true;
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
	color:black;
	font-weight:bold;
}
.panel>div{
	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

}
.main{
	display: flex;
	justify-content: space-between;
	align-items:center;
}
.mian>div{
	display:flex;
	align-items:center;

}
.time{
	float:right;
	color:#777;
	font-size:11px;
}
.inside-divider{
	margin:10px 0;
}
.avatar{
	margin-left:10px;
}

img{
	width:30px;
	height:30px;
	border-radius: 3px;
	margin-right: 5px;
}
</style>