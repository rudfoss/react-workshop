import React, { useEffect } from "react"
import PropTypes from "prop-types"

import Message from "./Message"

import classes from "./Room.scss"

const onTextareaChange = (onChange) => (evt) => {
	onChange(evt.target.value)
}
const onEnterNotCtrl = (action) => (evt) => {
	if (evt.key === "Enter" && !evt.shiftKey) {
		action()
		evt.preventDefault()
	}
}

export const Room = ({ messages, message, onMessageChange, onSendMessage, onGetMessages }) => {
	useEffect(() => {
		const interval = setInterval(() => {
			onGetMessages()
		}, 1000)
		return () => {
			clearInterval(interval)
		}
	}, [])
	return (
		<div className={classes.room}>
			<ul className={classes.messages}>
				{messages.map((message) => (
					<Message key={message.id} {...message}/>
				))}
			</ul>
			<div className={classes.chat}>
				<textarea
					value={message}
					onChange={onTextareaChange(onMessageChange)}
					onKeyDown={onEnterNotCtrl(onSendMessage)}></textarea>
			</div>
		</div>
	)
}
Room.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	messages: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		sent: PropTypes.number.isRequired,
		author: PropTypes.string.isRequired,
		message: PropTypes.string.isRequired
	})).isRequired,

	message: PropTypes.string.isRequired,

	onMessageChange: PropTypes.func.isRequired,
	onSendMessage: PropTypes.func.isRequired,
	onGetMessages: PropTypes.func.isRequired
}

export default Room