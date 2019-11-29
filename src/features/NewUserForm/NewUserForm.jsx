import React from "react"
import PropTypes from "prop-types"

import TextFormField from "ui/TextFormField"
import SelectFormField from "ui/SelectFormField"

const userEntity = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string,
	role: PropTypes.shape({
		value: PropTypes.string.isRequired,
		label: PropTypes.string
	})
}

const preventDefault = (onEvent) => (evt) => {
	evt.preventDefault()
	onEvent()
}

export const NewUserForm = ({
	name, description, role, roles,
	onNameChange, onDescriptionChange, onRoleChange,
	onSubmit, onReset
}) => {
	const submitData = () => {
		onSubmit({
			name, description, role
		})
	}
	return (
		<form onSubmit={preventDefault(submitData)}>
			<TextFormField label="Name" value={name} onChange={onNameChange}/>
			<TextFormField label="Description" value={description} onChange={onDescriptionChange}/>
			<SelectFormField
				label="Role"
				value={role}
				options={roles}
				onChange={onRoleChange}/>
			<button>Submit</button>
			<button type="button" onClick={onReset}>Reset</button>
		</form>
	)
}
NewUserForm.propTypes = {
	...userEntity,

	roles: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.string.isRequired,
		label: PropTypes.string
	})).isRequired,

	onNameChange: PropTypes.func.isRequired,
	onDescriptionChange: PropTypes.func.isRequired,
	onRoleChange: PropTypes.func.isRequired,

	onSubmit: PropTypes.func.isRequired,
	onReset: PropTypes.func.isRequired
}

export default NewUserForm