import React, { useState } from "react"
import PropTypes from "prop-types"

import TextInput from "ui/TextInput"
import Button from "ui/Button"

export const CreateRoom = ({ onCreate }) => {
	const [roomName, setRoomName] = useState("")
	return (
		<div>
			<TextInput
				label="New room name"
				value={roomName}
				onChange={setRoomName}/>
			<Button onClick={() => onCreate(roomName)}>Create room</Button>
		</div>
	)
}
CreateRoom.propTypes = {
	onCreate: PropTypes.func.isRequired
}

export default CreateRoom