import request from './request.js'

export async function getUserInfo(){
	try{
		let res=await request('/api/user');
		console.log('api res:',res)
		return res;
	}catch(err){
		console.log('api err:',err);
	}
	
}