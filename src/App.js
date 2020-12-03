import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './dist/styles/styles.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';


class App extends React.Component {

	render() {
		return (
			<Router>
				<div className="container">
					<Navbar />
					<div className="container">					
						<Route path="/iansarker" exact component={Home} />
						<Route path="/ianportfolio" exact component={Portfolio} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
