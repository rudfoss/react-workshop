import * as userFormDuck from "./userForm.duck"

describe("userForm.duck", () => {
	it("is defined", () => {
		expect(userFormDuck).toBeDefined()
	})
	describe("getName", () => {
		it("should return the name given a proper state", () => {
			const dummyState = {
				userForm: {
					name: "incognito"
				}
			}

			expect(userFormDuck.getName(dummyState)).toEqual("incognito")
		})
		it("should return empty string if state is empty", () => {
			expect(userFormDuck.getName({})).toEqual("")
		})
	})
})