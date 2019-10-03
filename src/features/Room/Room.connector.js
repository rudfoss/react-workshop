import { connect } from "react-redux"
import Room from "./Room"

import * as roomDuck from "./room.duck"

export default connect((state) => ({
	name: roomDuck.getName(state),
	description: roomDuck.getDescription(state),
	messages: roomDuck.getMessages(state),
	message: roomDuck.getCurrentMessage(state)
}), (dispatch) => ({
	onMessageChange: (newValue) => dispatch(roomDuck.setCurrentMessage(newValue)),
	onSendMessage: () => dispatch(roomDuck.sendMessage()),
	onGetMessages: () => dispatch(roomDuck.fetchMessages())
}))(Room)