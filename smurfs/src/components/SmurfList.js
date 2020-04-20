import React, { useContext} from 'react';
import {SmurfListObj} from "../contexts/SmurfListObj"
const SmurfList = () => {
const {list} = useContext(SmurfListObj)
return(
<div>
	{list.map(smf =>
	<p>name: {smf.name} <br/>
		age: {smf.age}<br/>
	height: {smf.height}<br/>
	id: {smf.id}
	</p>
	)}
</div>
)
}
export default SmurfList