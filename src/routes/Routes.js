import React from "react"
import {Switch, Route} from "react-router"

import UserList from "../components/UserList"
import NewUser from "../components/NewUser"
import ViewUser from "../components/ViewUser"

/**
 * Why not PureComponent?
 *
 * It might seem like this component could be Pure. It uses no props or state of any kind and just renders a router
 * Switch that picks a route based on the current location. But have you stopped to consider HOW it knows the current
 * location. React components normally get their "outside information" from props. These are defined like "path" and
 * "component" below. The Switch however does not appear to have any props on it so how can it tell when the location
 * changes and respond to it? The answer is Context.
 *
 * In React there is another way to pass information between components. The Context mechanism allows a component
 * anywhere above to pass information not just to its children, but to its descendants anywhere in the tree below
 * itself. This is exactly what the ConnectedRouter in the App component does. It sets up a context that any
 * component below it can access. In this case it is the Switch component here that reads it, gets the current
 * location and renders accordingly.
 *
 * So how does this relate to PureComponents? PureComponents provide a preformance boost by optimizing how react
 * determines that the props or state has changed which in turn determine whether it should re-render (call render()
 * once again). The trick is that it also affects the Context. Now react 16 introduced a new Context api that should
 * not be affected by this issue unfortunately (or fortunately) react-rotuer is backwards compatible so it does not
 * use it. For the old context api any pure component would simply ignore changes to context and not cause a
 * re-render. This would result in the Switch never getting the message that the path has changed and thus never
 * updating its children in turn. The end result then would be that any legacy-context-using component inside a
 * pure component would never be able to update.
 */
export class Routes extends React.Component{
	render() {
		return (
			<React.Fragment>
				<UserList/>
				<Switch>
					<Route path="/new" component={NewUser}/>
					<Route path="/view/:id" component={ViewUser}/>
				</Switch>
			</React.Fragment>
		)
	}
}

export default Routes