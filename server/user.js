const users = new Map()

const createUser = (name, password, properties) => {
	const newUser = {
		name, password,
		...properties,
		_created: Date.now()
	}
	users.set(name, newUser)
	return newUser
}
const getUser = (name) => {
	const user = users.get(name)
	if (!user) return
	return user
}
const updateUser = (name, properties) => {
	const user = getUser(name)
	Object.assign(user, properties)
}
const deleteUser = (name) => users.delete(name)

const tryPassword = (name, password) => {
	const user = getUser(name)
	if (!user) return false
	return user.password === password
}

createUser("test", "test", {
	email: "test@test.com"
})

module.exports = {
	createUser,
	getUser,
	updateUser,
	deleteUser,

	tryPassword
}