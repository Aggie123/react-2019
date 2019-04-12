import axios from 'axios'

// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default async function request(url){
	return axios.get(url)
	.then(res=>{
		console.log('request res:',res);
		return JSON.parse(res.request.responseText);
	})
	.catch(err=>{
		console.log('request err:',err)
	})
}