import { createAction, handleActions } from "redux-actions"

const LANGUAGES = [
	{
		value: "c/c++",
		label: "C/C++"
	},
	{
		value: "javascript",
		label: "JavaScript"
	},
	{
		value: "javascript2",
		label: "JavaScript"
	}
]
const EXPERIENCE = [
	{
		value: "0-3",
		label: "0-3 years"
	},
	{
		value: "3-5",
		label: "3-5 years"
	}
]

export const ns = "developerForm"
export const getState = state => state[ns] || {}

export const getName = (state) => getState(state).name || ""
export const getPhoneNumber = (state) => getState(state).phoneNumber || ""
export const getLanguage = (state) => getState(state).language || LANGUAGES[0]
export const getLanguages = (state) => LANGUAGES

export const getExperience = (state) => getState(state).experience || EXPERIENCE[0]
export const getExperiences = (state) => EXPERIENCE

export const getComments = (state) => getState(state).comments || ""

export const setName = createAction(ns+"/SET_NAME")
export const setPhoneNumber = createAction(ns+"/SET_PHONE_NUMBER")
export const setLanguage = createAction(ns+"/SET_LANGUAGE")
export const setExperience = createAction(ns+"/SET_EXPERIENCE")
export const setComments = createAction(ns+"/SET_COMMENTS")

export const reducer = handleActions({
	[setName]: (state, action) => {
		return {
			...state,
			name: action.payload
		}
	},
	[setPhoneNumber]: (state, action) => {
		return {
			...state,
			phoneNumber: action.payload
		}
	},
	[setLanguage]: (state, action) => {
		return {
			...state,
			language: action.payload
		}
	},
	[setExperience]: (state, action) => {
		return {
			...state,
			experience: action.payload
		}
	},
	[setComments]: (state, action) => {
		return {
			...state,
			comments: action.payload
		}
	},
}, {})