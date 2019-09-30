import axios from "axios"
import { API_BASE_URL } from "../constants"

const request = async (path, data) => {
	return axios({
		url: API_BASE_URL+"/"+path,
		timeout: 5000,
		data
	})
}

export const login = async (username, password) => {
	const loginResult = await request("login", {
		username, password
	})
	return loginResult
}