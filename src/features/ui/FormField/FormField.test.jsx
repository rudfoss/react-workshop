import React from "react"
import { create } from "react-test-renderer"

import { FormField } from "./FormField"

describe("FormField", () => {
	it("should be defined", () => {
		expect(FormField).toBeDefined()
	})
	it("should be a function", () => {
		expect(typeof FormField).toEqual("function")
	})
	describe(".propTypes", () => {
		it("should define prop types", () => {
			expect(FormField.propTypes).toBeDefined()
		})
	})
	describe("rendering", () => {
		/*		it("fails when not given children", () => {
			expect(
				() => {
					create(<FormField label="test"/>)
				}
			).toThrow()
		})*/
		it("renders a div with className = form-group", () => {
			const result = create((
				<FormField label="test">
					<input type="text"/>
				</FormField>
			))
			const div = result.root.findAllByProps({ "className": "form-group" })
			expect(div.length).toBe(1)
			expect(div[0].type).toBe("div")
		})
	})
})