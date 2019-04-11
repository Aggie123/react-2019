import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from './App'
import Home from './pages/Home'
import User from './pages/User'

export default class RootRouter extends PureComponent {
	render (){
		return (
			<Router>
				<Switch>
					<Route path='/' component={App}/>
					<Route path='/home' component={Home}/>
					<Route path='/user' component={User}/>
				</Switch>
			</Router>
		)
	}
}

export class RootRouterNested extends PureComponent {
	render (){
		return (
			<Router>
				<Route component={App}>
					<Route path='user' component={User}/>
					<Route path='home' component={Home}/>
				</Route>
			</Router>
		)
	}
}

/*export class RootRouterNested extends PureComponent {
	render (){
		console.log('RootRouterNested');
		return (
			<Router>
				<Switch>
					<Route exact path='/' component={App}>
						<Route exact path='/user' component={User}/>
					</Route>
				</Switch>
			</Router>
		)
	}
}*/