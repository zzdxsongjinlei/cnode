import axios from 'axios';
import { Message, Loading } from 'element-ui';

const error=function(){
	Message({
		type:'error',
		message:'遇见错误，请刷新重试',
		duration:2*1000
	});
}
let loading;
const startLoading=function(){
	loading=Loading.service({
		lock:true,
		text:'加载中......',
		background:'rgba(0,0,0,0.7)'
	});
}
const endLoading=function(){
	loading.close();
}

const service =axios.create({
	baseURL:'https://cnodejs.org/api/v1',
	timeout:5000
});
service.interceptors.request.use(
	function(config){
		startLoading();
		return config;
	},
	function(error){
		endLoading();
		error();
		Promise.reject(err);
	}
);
service.interceptors.response.use(
	function(response){
		endLoading();
		return response.data;
	},
	function(error){
		endLoading();
		error();
		return Promise.reject(err);
	}
);
export default service;
















