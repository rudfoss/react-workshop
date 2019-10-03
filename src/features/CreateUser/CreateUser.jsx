import React from "react"
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

import classes from "./CreateUser.scss"
import RadioInput from "ui/RadioInput"
import Button from "ui/Button"

// (newValue) => onPropChange("name", newValue)
const change = (onPropChange, prop) => (newValue) => {
	onPropChange(prop, newValue)
}

export const CreateUser = ({
	history,
	// eslint-disable-next-line react/prop-types
	name, email, password, retypePassword, nickname, age, level,
	// eslint-disable-next-line react/prop-types
	onPropChange
}) => {
	return (
		<div className={classes.form}>
			<form>
				<TextInput
					label="Name"
					required
					value={name}
					onChange={change(onPropChange, "name")}/>
				<TextInput
					label="Email"
					required
					value={email}
					onChange={change(onPropChange, "email")}/>
				<hr/>
				<TextInput
					label="Password"
					type="password"
					required
					value={password}
					onChange={change(onPropChange, "password")}/>
				<TextInput
					label="Repeat password"
					type="password"
					required
					value={retypePassword}
					onChange={change(onPropChange, "retypePassword")}/>
				<hr/>
				<TextInput
					label="Nickname"
					value={nickname}
					onChange={change(onPropChange, "nickname")}/>
				<NumericInput
					label="Age"
					value={age}
					onChange={change(onPropChange, "age")}/>
				<RadioInput
					label="Level"
					value={level}
					choices={CHOICES}
					onChange={change(onPropChange, "level")}/>
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