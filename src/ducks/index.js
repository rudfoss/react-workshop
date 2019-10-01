import * as users from "./users.duck"
import * as createUser from "features/CreateUser"

export const duckMap = {
	[users.duck.ns]: users,
	[createUser.duck.ns]: createUser
}

export const ducks = [
	users.duck,
	createUser.duck
]