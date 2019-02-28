import {createAction, handleActions} from "redux-actions"

const _ns = "users/"
export const getState = (state) => state.users || {}
const createNsAction = (action, payload) => createAction(_ns+action, payload)

export const getUsers = (state) => {
	const {order = [], byId = {}} = getState(state)
	return order.map((id) => byId[id])
}
export const getUser = (state, id) => (getState(state).byId || {})[id]

export const addNewUser = createNsAction("ADD_USER")

export const reducer = handleActions({
	[addNewUser]: (state, {payload}) => {
		return {
			...state,
			order: [...(state.order || []), payload.id],
			byId: {
				...(state.byId || {}),
				[payload.id]: payload
			}
		}
	}
}, {})
export default reducer