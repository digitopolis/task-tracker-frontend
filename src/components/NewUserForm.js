import React from 'react'
import styled from 'styled-components'
import { USERS } from '../apiEndpoints'
import { Link } from 'react-router-dom'

class NewUserForm extends React.Component {

	state = {
		name: '',
		username: '',
		password: '',
		confirmPassword: ''
	}

	handleSubmit = (event) => {
		event.preventDefault()
		const { password, confirmPassword } = this.state
		if (password !== confirmPassword) {
			alert('passwords do not match');
		} else {
			this.sendNewUser()
		}
	}

	sendNewUser = () => {
		const { confirmPassword, ...data } = this.state
		fetch(USERS, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify(data)
		}).then(res => res.json())
		.then(this.handleResponse)
	}

	handleResponse = (res) => {
		console.log(res)
		if (res.user) {
			localStorage.setItem('jwt', res.jwt)
		}
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
					<p>Already have an account? <Link to='/login'>Login here</Link> instead.</p>
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
