import { createAction } from "redux-actions"

export const changeProp = createAction("CHANGE_NEW_USER_PROP", (prop, newValue) => {
	return {
		prop, newValue
	}
})

export const changeName = createAction("CHANGE_NAME")


export const CHANGE_PROP = "CHANGE_PROP"

// export const changeProp = (prop, newValue) => {
// 	return {
// 		type: CHANGE_PROP,
// 		payload: {
// 			prop, newValue
// 		}
// 	}
// }