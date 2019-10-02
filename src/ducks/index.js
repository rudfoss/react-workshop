import * as users from "./users.duck"
import * as rooms from "./rooms.duck"

export const duckMap = {
	[users.duck.ns]: users,
	[rooms.duck.ns]: rooms
}

export const ducks = [
	users.duck,
	rooms.duck
]