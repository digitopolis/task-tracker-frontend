import React from 'react'
import styled from 'styled-components'
import { USERS } from '../apiEndpoints'

class NewUserForm extends React.Component {

	state = {
		name: '',
		username: '',
		password: '',
		confirmPassword: ''
	}

	handleSubmit = (event) => {
		event.preventDefault()
		console.log(this.state);
	}

	handleChange = (event) => {
		const name = event.target.name
		const value = event.target.value

		this.setState({ [name]: value })
	}

	render () {
		return (
			<OuterDiv >
				<InnerDiv>
					<h1>New User Form</h1>
					<form onSubmit={this.handleSubmit}>
						<label>Name: </label>
						<input
							type='text'
							name='name'
							placeholder='Name'
							onChange={this.handleChange}/><br/>
						<label>Username: </label>
						<input
							type='text'
							name='username'
							placeholder='Username'
							onChange={this.handleChange}/><br/>
						<label>Password: </label>
						<input
							type='password'
							name='password'
							placeholder='Password'
							onChange={this.handleChange}/><br/>
						<label>Confirm Password: </label>
						<input
							type='password'
							name='confirmPassword'
							placeholder='Confirm Password'
							onChange={this.handleChange}/><br/>
					<input type='submit'/>
					</form>
				</InnerDiv>
			</OuterDiv>
		)
	}
}

export default NewUserForm;

const InnerDiv = styled.div`
	margin: auto;
	width: 40%;
	padding: 20px;
	border-style: solid;
	border-width: 1px;
	box-shadow: 10px 10px;
`

const OuterDiv = styled.div`
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
`
