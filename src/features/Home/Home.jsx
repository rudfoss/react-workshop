import React from "react"

export const Home = () => (
	<div className="jumbotron">
		<h1 className="display-4">Welcome to the React/Redux Workshop</h1>
		<p className="lead">This is the framework application we will use throughout the course to build React and Redux components</p>
		<hr className="my-4"/>
		<p>Code can be found here: <a href="https://github.com/rudfoss/react-workshop">https://github.com/rudfoss/react-workshop</a></p>
		<h4>Prerequisites</h4>
		<ul>
			<li><a href="https://nodejs.org/en/">NodeJS</a></li>
			<li><a href="https://git-scm.com/downloads">Git</a></li>
		</ul>
	</div>
)

export default Home