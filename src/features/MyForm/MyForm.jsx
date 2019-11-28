import React, { useState } from "react"

import GenericModal from "./GenericModal"

export const MyForm = () => {
	const [modalInitialOpen, setModalOpen] = useState(false)

	return (
		<div>
			<button onClick={() => setModalOpen(true)}>Click me to open modal</button>
			<GenericModal isOpen={modalInitialOpen}
				onOk={() => {
					console.log("modal is closed with OK")
					setModalOpen(false)
				}}
				onCancel={() => {
					console.log("Modal is closed with cancel")
					setModalOpen(false)
				}}>
				<h1>Modal content</h1>
				<hr/>
				<p>Modal message</p>
			</GenericModal>
		</div>
	)
}

export default MyForm