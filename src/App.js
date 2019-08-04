import React from 'react';
import FormContainer from './containers/FormContainer'
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class App extends React.Component {
	render () {
		return (
	    <div className="Main">
				<Navbar bg='dark' variant='dark'>
					<Navbar.Brand href='/'>TaskTracker</Navbar.Brand>
					<Nav>
						<Nav.Link>Login</Nav.Link>
						<Nav.Link>Something</Nav.Link>
						<Nav.Link>Something Else</Nav.Link>
					</Nav>
				</Navbar>
				<FormContainer />
	    </div>
	  );
	}
}

export default App;
