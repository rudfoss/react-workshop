import React from "react"

import { PasswordFormField } from "./PasswordFormField"
import TestRenderer from "react-test-renderer"

describe("PasswordFormField", () => {
	it("is defined", () => {
		expect(PasswordFormField).toBeDefined()
	})
	it('renders an input field of type "password"', () => {
		const result = TestRenderer.create(<PasswordFormField canShowPassword={false} label="bork" value="" onChange={() => 0}/>)
		const root = result.root
		const passwordInput = root.findByType("input")
		expect(passwordInput.props.type).toEqual("password")
	})
})