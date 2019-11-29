import * as newUserFormDuck from "features/NewUserForm/newUserForm.duck"
import * as countDuck from "features/IncrementDecrement/count.duck"
import * as developerFormDuck from "features/DeveloperForm/developerForm.duck"
import * as searchDuck from "features/Search/search.duck"

export const duckMap = {
	[newUserFormDuck.ns]: newUserFormDuck.reducer,
	[countDuck.ns]: countDuck.reducer,
	[developerFormDuck.ns]: developerFormDuck.reducer,
	[searchDuck.ns]: searchDuck.reducer
	/*[sagaTest.duck.ns]: sagaTest*/
}

export const ducks = [
	countDuck,
	searchDuck
	/*sagaTest.duck*/
]