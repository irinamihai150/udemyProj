import React, { useState } from "react"
import classes from "./AddUser.module.css"
import Card from "./Card"
import Button from "./Button"

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState("")
	const [enteredAge, setEnteredAge] = useState("")
	const addUserHandler = (event) => {
		event.preventDefault()
		// setEnteredUsername(enteredUsername)
		// setEnteredAge(enteredAge)
		console.log(enteredUsername, enteredAge)
		setEnteredUsername("")
		setEnteredAge("")
	}
	const handleUsernameChange = (event) => {
		setEnteredUsername(event.target.value)
	}
	const handleAge = (event) => {
		setEnteredAge(event.target.value)
	}
	return (
		<Card className={classes.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor='username'>Username</label>
				<input
					className={classes.input}
					id='username'
					type='text'
					value={enteredUsername}
					onChange={handleUsernameChange}
				/>
				<label htmlFor='age'>Age(years)</label>
				<input
					className={classes.input}
					id='age'
					type='number'
          value={enteredAge}
					onChange={handleAge}
				/>
				<Button type='submit'>Add User</Button>
			</form>
		</Card>
	)
}

export default AddUser
