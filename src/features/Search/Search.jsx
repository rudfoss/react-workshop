/* eslint-disable react/prop-types */
import React from "react"
import TextFormField from "ui/TextFormField"

export const Search = ({
	text, onChange, results
}) => (
	<div>
		<TextFormField label="Search for" value={text} onChange={onChange}/>
		<pre>
			<code>
				{JSON.stringify(results, null, 2)}
			</code>
		</pre>
	</div>
)

export default Search