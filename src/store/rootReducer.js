export default (state, action) => {
	if (action.type === "INCREMENT_COUNT"){
		return {
			...state,
			count: state.count + 1
		}
	}
	return state
}