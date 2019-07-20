<template>
	<div class="reply">
		<div>
			<span>{{data.length}}</span>&nbsp;回复
		</div>
		<div v-for="(reply,index) in data " :key='reply.id'>
			<router-link :to="{path:'/user/'+reply.author.loginname}">
				<img :src="reply.author&&reply.author.avatar_url"/>
			</router-link>
			<div>
				<div class="info">
					<p>
						<span>{{index+1}}楼&nbsp;</span>
						<router-link :to="{path:'/user/'+reply.author.loginname}">
							{{reply.author.loginname}}
						</router-link>
						<span>&nbsp;{{$moment(reply.create_at, 'YYYY-MM-DD').startOf('day').fromNow()}}</span>
					</p>
					<span class="thumbs">
						{{reply.ups.length!==0 ? reply.ups.length :''}}
					</span>
				</div>
				 <p v-html='reply.content' />
			</div>
			
		</div>
	</div>
</template>
<script >
	export default{
		name:'reply',
		props:{
			data:{
				type:Array,
				default(){
					return [];
				}
			}
		}

	}
</script>
<style scoped>
.reply{
	width:100%;
}
img{
	width:50px;
	height:50px;
	border-radius:5px;
	margin-right:15px;
}
.reply >div{
	padding:10px 20px;
	display:flex;
	border:1px solid #ebedf0;
	color: rgba(0, 0, 0, 0.65);
	width:100%;
}
.reply >div>div{
	display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

}
.reply >div p{
	margin:0;
	width:100%;
}
.info{
	width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.thumbs{
	 font-size: 15px;
     display: flex;
     align-items: center;
     

}
.reply> div:first-child {
	
    color: rgba(0, 0, 0, 0.85);
    font-weight: bold;
  }
.reply> div:last-child {
    border-bottom: 1px solid #ebedf0;
  }

</style>









