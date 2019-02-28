import {createAction, handleActions} from "redux-actions"

export const getTypes = (state) => state.types || ["Admin", "Elevated", "User", "Guest"]

export const getPropValue = (state, propName) => state[propName] || ""
export const setPropValue = createAction("SET_PROP_VALUE", (propName, propValue) => ({
	propName, propValue
}))

const reducer = handleActions({
	[setPropValue]: (state, {payload: {propName, propValue}}) => ({
		...state,
		[propName]: propValue
	})
}, {})

export default reducer