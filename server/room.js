const rooms = new Map()

const createRoom = (name, description = "", hidden = false) => {
	if (rooms.has(name)) return rooms.get(name)
	const newRoom = {
		name,
		description,
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

createRoom("general", "General chat")
createRoom("hidden", "Sssshhh! Don't tell anyone", true)

module.exports = {
	createRoom,
	getRooms,
	getRoom,
	getMessages,
	deleteRoom
}