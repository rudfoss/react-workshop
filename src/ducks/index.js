import * as users from "./users.duck"

export const duckMap = {
	[users.duck.ns]: users
}

export const ducks = [
	users.duck
]