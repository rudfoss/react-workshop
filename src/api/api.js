import axios from "axios"
import { API_BASE_URL } from "../constants"

const request = async (method, path, data) => {
	return axios({
		url: API_BASE_URL+"/"+path,
		timeout: 5000,
		method,
		data
	})
}

export const login = async (username, password) => {
	const loginResult = await request("post", "login", {
		username, password
	})
	return loginResult
}