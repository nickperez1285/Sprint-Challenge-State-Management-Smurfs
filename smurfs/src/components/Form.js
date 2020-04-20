import React, {useState} from 'react'
import axios from 'axios';

const Form = () => {

const [smurf, setSmurf] = useState({
	key: "",
	name: "",
	age: "", 
	height: ""

})

	const handleChanges = event => {
		setSmurf({...smurf, [event.target.name]: event.target.value})
	}


const submitForm = event =>{
			event.preventDefault();
			console.log('key',smurf.key)

  axios.post("http://localhost:3333/smurfs", smurf)
    .then(res =>{
     console.log(res)
          } 
      )
    .catch(err =>{
      console.log(err)
    })

  }

	return(
	<form onSubmit={submitForm}>
			<label htmlFor="name"> Name</label>
			<input
				type="text"
				placeholder = {`Enter name`}
				id= {smurf.key}
				name ="name"
				value = {smurf.name}
				onChange = {handleChanges}
			/>	<br/>
		<label htmlFor="age">Age</label>

			<input
				type="age"
				placeholder = {"Enter age"}
				id= {smurf.key}
				name ="age"
				value = {smurf.age}
				onChange = {handleChanges}
			/>	<br/>
			<label htmlFor="height">Height</label>

			<input
				type="text"
				placeholder = {"Enter height"}
				id= {smurf.key}
				name ="height"
				value = {smurf.height}
				onChange = {handleChanges}
			/>
			<button type = "submit"> Add Smurf </button> 
		</form>

		)
}

export default Form 