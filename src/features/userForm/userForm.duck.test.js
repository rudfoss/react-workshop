import * as userFormDuck from "./userForm.duck"

describe("userForm.duck", () => {
	it("should be defined", () => {
		expect(userFormDuck).toBeDefined()
	})
	it("should return the edited user", () => {
		const mockState = {
			userForm: {
				editingUser: {
					id: "id"
				}
			}
		}
		const editedUser = userFormDuck.getEditingUser(mockState)
		expect(editedUser.id).toBe("id")
	})
})