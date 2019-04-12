import React , { PureComponent } from 'react';

import img1 from 'imgs/12.jpg'
import { getUserInfo } from 'api/user.js'

export default class Page extends PureComponent {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	data:{}
	  };
	}

  async componentDidMount(){
		let data= await getUserInfo()
		console.log('didm',data);
		this.setState({data})
	}

	render (){
		console.log('render',this.state.data)
		const { name, intro } =this.state.data;
		return (
			<div>Page
				<p>用户信息：</p>
        <p>用户名：{name}</p>
        <p>介绍：{intro}</p>
        <img src={img1} className='img-s'/>
			</div>

		)
	}
}