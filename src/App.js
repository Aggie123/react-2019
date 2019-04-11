import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import 'css/index.css'
import 'css/app.css'
import style from 'css/test.css'

import img1 from 'imgs/12.jpg'

export default class App extends PureComponent {
	render (){
		return (
			<div className='container'>
				<Link to='/home'>Home</Link>
				<Link to='/user'>User</Link>
				<div className='box'>
				test
					<img src={img1}/>
				</div>
				<div className={style['box2']}>test</div>
				{this.props.children}
			</div>
		)
	}
}