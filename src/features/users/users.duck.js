import {createAction, handleActions} from "redux-actions"
import omit from "lodash/omit"

const _ns = "users/"
export const getState = (globalState) => globalState.users || {}
const action = (actionName, payload) => createAction(_ns+actionName, payload)

export const getUserIds = (globalState) => getState(globalState).order || []
export const getUserById = (globalState, id) => (getState(globalState).byId || {})[id]
export const getUsers = (globalState) => {
	return getUserIds(globalState).map(id => getUserById(globalState, id))
}

export const removeUserById = action("REMOVE_USER_BY_ID")

export const reducer = handleActions({
	[removeUserById]: (state, {payload}) => ({
		...state,
		order: state.order.filter(orderId => orderId !== payload),
		byId: omit(state.byId, payload)
	})
}, {})