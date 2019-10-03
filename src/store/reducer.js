export const reducer = (state, action) => {
	if (action.type === "CHANGE_PROP"){
		return {
			...state,
			[action.payload.prop]: action.payload.newValue
		}
	}
	
	return state
}