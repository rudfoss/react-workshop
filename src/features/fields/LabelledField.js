import React from "react"
import PropTypes from "prop-types"
import {uniqueId} from "../../utils/uniqeId"

const idGenerator = uniqueId("labelledfield")

export class LabelledField extends React.PureComponent{
	render(){
		const {id, label} = this.props

		return (
			<div>
				<label htmlFor={id}>{label}</label>
				{this.childWithId()}
			</div>
		)
	}

	childWithId() {
		const {children} = this.props
		return React.cloneElement(children, {
			...children.props,
			id: children.props.id || this.props.id
		})
	}

	static defaultProps = {
		id: idGenerator()
	}
	static propTypes = {
		id: PropTypes.string,
		label: PropTypes.string,
		children: PropTypes.element.isRequired
	}
}
export default LabelledField