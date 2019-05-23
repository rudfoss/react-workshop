export default (state, action) => {
	if (action.type === "INCREMENT_COUNT"){
		return {
			...state,
			count: state.count + 1
		}
	}
	if (action.type === "SAVE_USER_FORM") {
		const newUser = {
			...state.userForm,
			id: action.payload
		}

		return {
			...state,
			users: [
				...state.users,
				newUser
			]
		}
	}
	if (action.type === "SET_USER_FORM_PROP") {
		const { prop, newValue } = action.payload
		return {
			...state,
			userForm: {
				...state.userForm,
				[prop]: newValue
			}
		}
	}
	return state
}