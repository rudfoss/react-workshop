import React, { useState, useEffect } from "react"

import ReactModal from "react-modal"

export const GenericModal = ({ isOpen, onOk, onCancel, children }) => {
	const [isOpenState, setIsOpen] = useState(isOpen)
	const closeDialog = () => setIsOpen(false)

	useEffect(() => {
		setIsOpen(isOpen)
	}, [isOpen])

	return (
		<ReactModal
			isOpen={isOpenState}
			onRequestClose={closeDialog}>
			<div>
				{children}
			</div>
			<div>
				<button onClick={() => {
					closeDialog()
					onOk()
				}}>OK</button>
				<button onClick={() => {
					closeDialog()
					onCancel()
				}}>Cancel</button>
			</div>
		</ReactModal>
	)
}

export default GenericModal