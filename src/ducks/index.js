import * as newUserFormDuck from "features/NewUserForm/newUserForm.duck"
import * as countDuck from "features/IncrementDecrement/count.duck"

export const duckMap = {
	[newUserFormDuck.ns]: newUserFormDuck.reducer,
	[countDuck.ns]: countDuck.reducer
	/*[sagaTest.duck.ns]: sagaTest*/
}

export const ducks = [
	/*sagaTest.duck*/
]