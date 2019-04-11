import React , { PureComponent } from 'react';

import img1 from 'imgs/12.jpg'

export default class Page extends PureComponent {
	render (){
		return (
			<div>Page
				<img src={img1}/>
			</div>

		)
	}
}