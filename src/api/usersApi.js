export const fetchUsers = async () => {
	const data = await fetch("http://localhost:1338")
	return data.json()
}

export const storeUsers = async (users) => {
	return fetch("http://localhost:1338", {
		method: "POST",
		body: JSON.stringify(users),
		headers: {
			"Content-Type": "application/json"
		}
	})
}