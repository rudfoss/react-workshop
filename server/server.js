/* eslint-disable no-console */
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const port = 1339

const app = express()
app.use(cors())

let users = []

app.get("/", (req, res) => {
	console.log("Sending", users)
	setTimeout(() => { // fake timeout to simulate loading
		res.send(users)
	}, 3000)
})
app.post("/", bodyParser.json(), (req, res) => {
	console.log("saving", req.body)
	users = req.body
	res.status(204).end()
})

app.listen(port, () => {
	console.log(`Listening on ${port}`)
})
