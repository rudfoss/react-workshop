import React, { useState } from "react"
import PropTypes from "prop-types"

import TextInput from "ui/TextInput"
import NumericInput from "ui/NumericInput"

const CHOICES = [
	{
		label: "Peon",
		value: "peon"
	},
	{
		label: "Worker",
		value: "worker"
	},
	{
		label: "Steward",
		value: "steward"
	},
	{
		label: "King",
		value: "king"
	}
]

const changeProp = (currentState, setter, prop) => (newValue) => {
	setter({
		...currentState,
		[prop]: newValue
	})
}

import classes from "./CreateUser.scss"
import RadioInput from "ui/RadioInput"
import Button from "ui/Button"

export const CreateUser = ({ history }) => {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		password: "",
		retypePassword: "",
		nickname: "",
		age: 0,
		level: CHOICES[0]
	})
	return (
		<div className={classes.form}>
			<form>
				<TextInput
					label="Name"
					required
					value={formState.name}
					onChange={changeProp(formState, setFormState, "name")}/>
				<TextInput
					label="Email"
					required
					value={formState.email}
					onChange={changeProp(formState, setFormState, "email")}/>
				<hr/>
				<TextInput
					label="Password"
					type="password"
					required
					value={formState.password}
					onChange={changeProp(formState, setFormState, "password")}/>
				<TextInput
					label="Repeat password"
					type="password"
					required
					value={formState.retypePassword}
					onChange={changeProp(formState, setFormState, "retypePassword")}/>
				<hr/>
				<TextInput
					label="Nickname"
					value={formState.nickname}
					onChange={changeProp(formState, setFormState, "nickname")}/>
				<NumericInput
					label="Age"
					value={formState.age}
					onChange={changeProp(formState, setFormState, "age")}/>
				<RadioInput
					label="Level"
					value={formState.level}
					choices={CHOICES}
					onChange={changeProp(formState, setFormState, "level")}/>
				<div className={classes.controls}>
					<Button type="button" mode="secondary" onClick={() => history.push("/")}>Cancel</Button>
					<Button disabled={false} onClick={() => 0}>Create user</Button>
				</div>
			</form>
		</div>
	)
}
CreateUser.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired
}

export default CreateUser