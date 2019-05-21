import React, { PureComponent } from 'react';

import Moment from 'components/Moment';
import img1 from 'imgs/12.jpg'
import img2 from 'imgs/img2.jpg'


let data=[
	{
		// img:
		id:1,
		nickname:'Tom',
		text:'hello there',
		imgs:[],
		location:'Beijing',
		timestamp:11111111,
	},{
		// img:
		id:2,
		nickname:'Tom',
		text:'hello there',
		imgs:[],
		location:'Beijing',
		timestamp:11111111,
	},{
		// img:
		id:3,
		nickname:'Tom',
		text:'hello there',
		imgs:[],
		location:'Beijing',
		timestamp:11111111,
	},
]

export default class Moments extends PureComponent {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render(){
		return (
			<div>
				<div style={{position:'relative',marginBottom:30}}>
					<img src={img1} style={{width:'100%',height:250}}/>
					<div style={{display:'flex'}}>
						<div style={{position:'absolute',right:80,top:220,color:'#fff',fontSize:18}}>辣辣</div>
						<img src={img2} style={{width:60,height:60,position:'absolute',right:10,top:206}}/>
					</div>
				</div>

				{
					data.map(item=><Moment data={item} key={item.id}/>)
				}
			</div>
			)
	}
}
