<template>
	<div class="topic">
		<div class="left">
			
				<div class="title" v-html='topic.title'/>
				<div class="info">
					<span>发布于&nbsp;{{$moment(topic.create_at, 'YYYY-MM-DD').startOf('day').fromNow()}}&nbsp;•&nbsp;</span>
					作者:<router-link :to="{path:'/user/'+topic.loginname}">{{topic.loginname}}</router-link>&nbsp;•&nbsp;
					<span>{{topic.visit_count}}次浏览&nbsp;•&nbsp;</span>
					<span>来自：{{$tab[topic.tab]&&$tab[topic.tab].name}}</span>
				</div>
				<Divider/>
				<div class="content" v-html='topic.content'/>
				<Reyle :data='topic.replies' />
			
			
		</div>
		<div class="right">
			<ProfilePanel :loginname='topic.loginname'/>
			<OtherTopic/>
			<RecentReply/>
		</div>
		
	</div>
	
</template>
<script>
	import {getTopicById} from '../untils/api.js';
	import ProfilePanel from '../components/ProfilePanel.vue';
	import Divider from '../components/Divider.vue';
	import Reyle from '../components/Reply.vue';
	import OtherTopic from '../components/OtherTopic.vue';
	import RecentReply from '../components/RecentReply.vue';
	export default{
		name:'topic',
		components:{
			OtherTopic,
			RecentReply,
			ProfilePanel,
			Divider,
			Reyle
		},
		data(){
			return{
				topic:{}
			}
		},
		methods:{
			fetchData(id){
				var _this=this;
				getTopicById(id)
				.then(function(response){
					_this.topic={...response.data,...response.data.author};
				})
			}

		},
		created(){
			this.fetchData(this.$route.params.id);

		},
		beforeRouteUpdate(to,from,next){
			this.fetchData(to.params.id);
			next();
		}
	}
</script>
<style scoped>
.topic{
	display: flex;
	margin-bottom: 100px;
}
.title{
	color:black;
	font-weight: bold;
	font-size:25px;
	margin-bottom: 8px;
}
.content{
	color:#333;
	line-height: 1.6;
	margin-bottom:50px;
}
/deep/ img{
	width:100%;

}
.left{
	width:72%;
	float:left;
	padding:20px;
	box-shadow: 0 2px 12px 0px rgba(0,0,0,0.1);
}
.info{
	display: flex;
	align-items:center;
	color:#838383;
	font-size:12px;
}
.right{
	float:right;
	width: 25%;
	height:100%;
	margin-left:2%;
}
</style>