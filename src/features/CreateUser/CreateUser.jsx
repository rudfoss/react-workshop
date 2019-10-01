import React from "react"
import PropTypes from "prop-types"

import Button from "ui/Button"
import TextInput from "ui/TextInput"
import NumericInput from "ui/NumericInput"
import RadioInput from "ui/RadioInput"

import classes from "./CreateUser.scss"

const CHOICES = [
	{
		label: "Peon",
		value: "peon"
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

const change = (onPropChange, prop) => (value) => {
	onPropChange(prop, value)
}

export const CreateUser = ({
	history,
	name, email, password, repeatPassword, nickname, age, level,
	canCreate,
	onPropChange, onCreate
}) => (
	<div className={classes.form}>
		<form>
			<TextInput label="Name" value={name} onChange={change(onPropChange, "name")}/>
			<TextInput label="Email" value={email} onChange={change(onPropChange, "email")}/>
			<hr/>
			<TextInput label="Password" type="password" value={password} onChange={change(onPropChange, "password")}/>
			<TextInput label="Repeat Password" type="password" value={repeatPassword} onChange={change(onPropChange, "repeatPassword")}/>
			<hr/>
			<TextInput label="Nickname" value={nickname} onChange={change(onPropChange, "nickname")}/>
			<NumericInput label="Age" value={age} onChange={change(onPropChange, "age")}/>
			<RadioInput label="Level" value={level} onChange={change(onPropChange, "level")} choices={CHOICES}/>
			<div className={classes.controls}>
				<Button type="button" mode="secondary" onClick={() => history.push("/")}>Cancel</Button>
				<Button disabled={!canCreate} onClick={onCreate}>Create user</Button>
			</div>
		</form>
	</div>
)
CreateUser.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,

	name: PropTypes.string,
	email: PropTypes.string,
	password: PropTypes.string,
	repeatPassword: PropTypes.string,

	nickname: PropTypes.string,
	age: PropTypes.number,
	level: PropTypes.shape({
		value: PropTypes.string.isRequired,
		label: PropTypes.string
	}),

	canCreate: PropTypes.bool,

	onPropChange: PropTypes.func,
	onCreate: PropTypes.func
}
CreateUser.defaultProps = {
	name: "",
	email: "",
	password: "",
	repeatPassword: "",

	nickname: "",
	age: 0,
	level: CHOICES[0]
}

export default CreateUser