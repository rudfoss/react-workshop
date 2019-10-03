export const changeProp = (prop, newValue) => {
	return {
		type: "CHANGE_PROP",
		payload: {
			prop, newValue
		}
	}
}