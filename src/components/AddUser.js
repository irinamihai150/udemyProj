import React from "react"
import classes from "./AddUser.module.css"
import Card from "./Card"
import Button from "./Button"

const AddUser = (props) => {
	const addUserHandler = (event) => {
		event.preventDefault()
		console.log("AddUserHandler")
	}

	return (
		<Card className={classes.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor='username'>Username</label>
				<input className={classes.input} id='username' type='text' />
				<label htmlFor='age'>Age(years)</label>
				<input className={classes.input} id='age' type='number' />
				<Button type='submit'>Add User</Button>
			</form>
		</Card>
	)
}

export default AddUser
