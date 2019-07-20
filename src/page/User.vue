<template>
	<div class="user">
		<profile-panel :loginname='loginname'/>
		<other-topic :simple='false'/>
		<recent-reply :simple='false'/>		
	</div>
	
</template>
<script>
	import ProfilePanel from '../components/ProfilePanel.vue';
	import OtherTopic from '../components/OtherTopic.vue';
	import RecentReply from '../components/RecentReply.vue';
	export default{
		name:'user',
		components:{
			ProfilePanel,
			OtherTopic,
			RecentReply
		},
		data(){
			return{
				loginname:''
			}
		},
		created(){
			this.loginname=this.$route.params.id;		
		},
		beforeRouteUpdate(to,from,next){
			this.loginname=to.params.id;
			next();
		}
	}
</script>
<style scoped>
	.user{
		width:75%;
		margin:auto;
	}
</style>