import * as newUser from "./newUser.duck"
import * as users from "./users.duck"

export const ducks = {
	newUser,
	users
}

const rootReducer = {
	newUser: newUser.reducer,
	users: users.reducer
}

export default rootReducer