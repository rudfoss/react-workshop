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
	return loginResult.data
}

export const createUser = async (properties) => {
	const newUser = await request("post", "users", properties)
	return newUser.data
}

export const getRooms = async () => {
	const rooms = await request("get", "rooms")
	return rooms.data
}

export const getRoom = async (name) => {
	const room = await request("get", "rooms/"+name)
	return room.data
}

export const getMessagesByRoom = async (name) => {
	const messages = await request("get", "rooms/"+name+"/messages")
	return messages.data
}
export const getParticipantsByRoom = async (name) => {
	const participants = await request("get", "rooms/"+name+"/participants")
	return participants.data
}
export const sendMessageToRoom = async (name, message) => {
	await request("post", `rooms/${name}/messages`, message)
}