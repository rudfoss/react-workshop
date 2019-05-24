/* eslint-disable no-console */

const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const port = 1338

const app = express()
app.use(cors())

let users = []

app.post("/", bodyParser.json(), (req, res) => {
	users = req.body
	setTimeout(() => {
		res.status(204).end()
	}, 3000)
})
app.get("/", (req, res) => {
	res.send(users)
})

app.listen(port, () => {
	console.log(`Listening for connections on port ${port}`)
})