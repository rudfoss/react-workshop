export const initialState = {
	users: {
		order: ["test"],
		byId: {
			"test": {
				id: "test",
				name: "test",
				email: "test@test.com",
				type: "test",
				password: "secret",
				disabled: false,
				comments: "",
				created: new Date(),
				modified: new Date()
			}
		}
	}
}