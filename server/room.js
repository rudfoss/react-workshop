const nanoid = require("nanoid")

const rooms = new Map()

const createRoom = (name, description = "", hidden = false) => {
	if (rooms.has(name)) return rooms.get(name)
	const newRoom = {
		name,
		description,
		participants: [],
		messages: [],
		hidden
	}
	rooms.set(name, newRoom)
	return newRoom
}
const getRooms = () => {
	return Array.from(rooms.values())
}
const getRoom = (name) => {
	return rooms.get(name)
}
const getMessages = (name) => {
	const room = getRoom(name)
	return room ? room.messages : []
}
const deleteRoom = (name) => {
	rooms.delete(name)
}

const addParticipant = (roomName, participantId) => {
	const room = getRoom(roomName)
	if (!room) return
	if (room.participants.indexOf(participantId) >= 0) return
	room.participants.push(participantId)
}
const removeParticipant = (roomName, participantId) => {
	const room = getRoom(roomName)
	if (!room) return
	room.participants = room.participants.filter((currentParticipant) => currentParticipant !== participantId)
}

const sendMessage = (roomName, participantId, message, sentTime) => {
	sentTime = sentTime || Date.now()
	const room = getRoom(roomName)
	if (!room) return
	room.messages.push({
		id: nanoid(),
		sent: sentTime,
		author: participantId,
		message
	})
}

createRoom("general", "General chat")
createRoom("hidden", "Sssshhh! Don't tell anyone", true)

module.exports = {
	createRoom,
	getRooms,
	getRoom,
	getMessages,
	deleteRoom,

	addParticipant,
	removeParticipant,
	sendMessage
}