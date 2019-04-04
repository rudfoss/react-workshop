export const rootReducer = (state = {}, action) => {
	if (action.type === "INCREMENT_COUNTER") {
		return {
			...state,
			counter: (state.counter || 0) + 1
		}
	}
	return state
}