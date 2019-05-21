import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import img1 from 'imgs/12.jpg'
import 'css/wechat.css'

const style={
	container:{
		display:'flex',
		padding:10,
		borderBottom:'1px solid #eee',
	},
	avatar:{
		width: 50,
		height: 50,
	},
	content:{
		marginLeft:10,
	},
	title:{
		color: '#666c8e',
		fontSize: 16,
		fontWeight: 'bold',
	},
	text:{
		fontSize: 16,
	},
	subText:{
		color:'#b7b7b7',
		fontSize:14,
	}
}
export default class Moment extends PureComponent{
	static propTypes = {
	  data: PropTypes.object
	}

	static defaultProps = {
	  data: []
	}

	render(){
		let {nickname,text,imgs,location,timestamp}=this.props.data;
		return (
			<div style={style.container}>
				<img src={img1} style={style.avatar}/>
				<div style={style.content}>
					<div style={style.title}>{nickname}</div>
					<div style={style.text}>{text}</div>
					<div>{location}</div>
					<div>
						<div style={style.subText}>{timestamp}</div>
						
					</div>
				</div>
			</div>
			)
	}
}