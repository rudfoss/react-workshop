import axios from "axios"

export const callSearchAPI = async (query) => {
	const result = await axios.request({
		url: "http://localhost:3000/users?q="+query
	})
	return result.data
}