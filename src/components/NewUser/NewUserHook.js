import React, {useEffect} from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import Sidebar from "../Sidebar"
import Field from "../Field"
import DescriptionField from "../DescriptionField"
import SelectField from "../SelectField"
import Controls from "../Controls"
import Avatar from "../Avatar"
import Textbox from "../Textbox"

import classes from "./NewUser.scss"

export const NewUserHook = (props) => {
	useEffect(() => {
		props.onReset()
	}, []) // Empty array means it will only run on mount and not dispatch

	const onChangeProp = (name) => (newValue) => props.onPropChange(name, newValue)
	const onSubmit = (e) => {
		e.preventDefault()
		props.onCreate()
	}

	return (
		<Sidebar>
			<form onSubmit={onSubmit} className={classes.form}>
				<Avatar canChange value={props.avatar} onChange={onChangeProp("avatar")}/>
				<Field label="User name" id="new-user-name">
					<Textbox autoFocus value={props.name} onChange={onChangeProp("name")}/>
				</Field>
				<Field label="Type" id="new-user-type">
					<SelectField
						value={props.type}
						options={props.types}
						onChange={onChangeProp("type")}/>
				</Field>
				<Field label="Description" id="new-user-description">
					<DescriptionField
						value={props.description}
						maxLength={500}
						onChange={onChangeProp("description")}/>
				</Field>
				<Controls>
					<Link to="/">Back</Link>
					<button className="right" type="submit" onClick={onSubmit}>Create user</button>
				</Controls>
			</form>
		</Sidebar>
	)
}
NewUserHook.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string,
	type: PropTypes.string,
	description: PropTypes.string,
	types: PropTypes.arrayOf(PropTypes.string),

	onReset: PropTypes.func,
	onPropChange: PropTypes.func,
	onCreate: PropTypes.func
}

export default NewUserHook