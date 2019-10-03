const nanoid = require("nanoid")
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const rooms = require("./room")
const users = require("./user")

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use((req, res, next) => {
	res.set("Cache-Control", "no-cache, no-store")
	next()
})

app.get("/", (req, res) => res.send({ now: Date.now() }))

app.post("/login", (req, res) => {
	const { username, password } = req.body
	if (!users.tryPassword(username, password)) {
		res.status(401).send("Unauthorized")
		return
	}
	res.send(users.getUser(username))
})

app.get("/users/:id", (req, res) => {
	const user = users.getUser(req.params.id)
	if (!user) {
		res.status(404).end()
		return
	}
	res.send(user)
})
app.post("/users", (req, res) => {
	const { name, ...rest } = req.body
	if (users.getUser(name)) {
		res.status(409).send("Duplicate resource")
		return
	}

	const user = users.createUser(name, req.body.password, {
		name, password: req.body.password, ...rest
	})
	res.send(user)
})

app.get("/rooms", (req, res) => res.send(rooms.getRooms()))
app.get("/rooms/:name", (req, res) => {
	const room = rooms.getRoom(req.params.name)
	if (!room) {
		res.status(404).end()
		return
	}
	res.send(room)
})
app.get("/rooms/:name/messages", (req, res) => {
	const room = rooms.getRoom(req.params.name)
	res.send(room ? room.messages : [])
})
app.post("/rooms/:name/messages", (req, res) => {
	const room = rooms.getRoom(req.params.name)
	if (!room) {
		res.status(404).send("Room not found")
		return
	}
	room.messages.push({
		id: nanoid(),
		sent: Date.now(),
		...req.body
	})
	res.send(204)
})

app.listen(3011, () => {
	console.log("Listening for connection")
})