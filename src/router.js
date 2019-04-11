import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import loadable from 'react-loadable';

import Loading from 'components/Loading';

/*function genLoadablePage(url){
	console.log('aaa',url,import(url));
	return loadable({
		loader:()=>import(url),
		loading:Loading,
		timeout:10000, 
	})
}

const App = genLoadablePage('./App')
const Home = genLoadablePage('pages/Home')
const User = genLoadablePage('pages/User')*/

const App = loadable({
	loader:()=>import('./App'),
	loading:Loading,
	timeout:10000, 
})
const Home = loadable({
	loader:()=>import('pages/Home'),
	loading:Loading,
	timeout:10000,
})
const User = loadable({
	loader:()=>import('pages/User'),
	loading:Loading,
	timeout:10000,
})
const NotFound = loadable({
	loader:()=>import('pages/NotFound'),
	loading:Loading,
	timeout:10000,
})

export default class RootRouter extends PureComponent {
	render (){
		return (
			<Router>
				<Switch>
					<Route exact path='/' component={App}/>
					<Route path='/home' component={Home}/>
					<Route path='/user' component={User}/>
					<Route component={NotFound}/>
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