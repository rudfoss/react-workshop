import { reducer } from "./Redux"

describe("Redux", () => {
	it("Returns original state if action is unknown", () => {
		const mockState = {}
		const mockAction = {
			type: "UNKNOWN_ACTION"
		}
		expect(reducer(mockState, mockAction)).toBe(mockState)
	})
	describe("NewUserForm reducer", () => {
		it("responds to SET_DESCRIPTION action", () => {
			const mockState = {
				description: "test",
			}
			const mockAction = {
				type: "SET_DESCRIPTION",
				payload: "new description"
			}

			const resultState = reducer(mockState, mockAction)
			expect(resultState).not.toBe(mockState)
			expect(resultState).toMatchObject({
				description: mockAction.payload
			})
		})
	})
})