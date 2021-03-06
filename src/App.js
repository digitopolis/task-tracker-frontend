import React from 'react';
import FormContainer from './containers/FormContainer'
import LoginForm from './components/LoginForm'
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends React.Component {
	render () {
		return (
	    <div className="Main">
				<Router>
					<Navbar bg='dark' variant='dark'>
						<Navbar.Brand href='/'>TaskTracker</Navbar.Brand>
						<Nav>
							<Nav.Link
								as={ Link }
								to='/login'>Login</Nav.Link>
							<Nav.Link>Something</Nav.Link>
							<Nav.Link>Something Else</Nav.Link>
						</Nav>
					</Navbar>
					<div>
						<Route exact path='/' render={() => <FormContainer />}/>
						<Route path='/login' render={() => <LoginForm />}/>
					</div>
				</Router>
	    </div>
	  );
	}
}

export default App;
