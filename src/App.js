import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import 'css/index.css'
import 'css/app.css'

export default class App extends PureComponent {
	render (){
		return (
			<div className='container'>
				<Link to='/home'>Home</Link>
				<Link to='/user'>User</Link>
				<div className='box'>
				test
				</div>
				{this.props.children}
			</div>
		)
	}
}