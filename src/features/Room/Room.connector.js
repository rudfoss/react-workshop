import { connect } from "react-redux"
import Room from "./Room"

import * as roomDuck from "./room.duck"

export default connect((state) => ({
	name: roomDuck.getName(state)
}), (dispatch) => ({
	
}))(Room)