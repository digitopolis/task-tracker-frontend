import React from 'react'
import styled from 'styled-components'

class NewUserForm extends React.Component {
	render () {
		return (
			<OuterDiv >
				<InnerDiv>
					<h1>New User Form</h1>
					<form>
						Name: <input type='text'/><br/>
						Username: <input type='text'/><br/>
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
