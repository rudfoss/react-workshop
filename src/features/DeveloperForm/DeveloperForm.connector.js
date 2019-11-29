import { connect } from "react-redux"
import DeveloperForm from "./DeveloperForm"

import * as developerFormDucks from "./developerForm.duck"

const mapStateToProps = (state) => ({
	name: developerFormDucks.getName(state),
	phoneNumber: developerFormDucks.getPhoneNumber(state),
	language: developerFormDucks.getLanguage(state),
	experience: developerFormDucks.getExperience(state),
	comments: developerFormDucks.getComments(state),

	languages: developerFormDucks.getLanguages(state),
	experiences: developerFormDucks.getExperiences(state)
})
const mapDispatchToProps = (dispatch) => ({
	onNameChange: (newName) => dispatch(developerFormDucks.setName(newName)),
	onPhoneChange: (newPhoneNumber) => dispatch(developerFormDucks.setPhoneNumber(newPhoneNumber)),
	onLangChange: (newLanguage) => dispatch(developerFormDucks.setLanguage(newLanguage)),
	onExpChange: (newExperience) => dispatch(developerFormDucks.setExperience(newExperience)),
	onCommentsChange: (newComments) => dispatch(developerFormDucks.setComments(newComments)),

	onSubmit: (data) => {
		console.log(data)
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(DeveloperForm)