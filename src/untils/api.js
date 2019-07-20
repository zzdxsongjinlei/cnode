import request from'./request.js';
//获取首页帖子的列表数据
export const getTopics =function(data){
	return request({
		url:'/topics',
		method:'get',
		params:data
	});
}
//获取帖子的详情数据
export const getTopicById=function(id){
	return request({
		url:`/topic/${id}`,
		method:'get'
	});
}
export const getUserByName=function(loginname){
	return request({
		url:`/user/${loginname}`,
		method:'get'
	});
}