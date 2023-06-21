import React, { useState } from "react"
import classes from "./AddUser.module.css"
import Card from "./Card"
import Button from "./Button"
import ErrorModal from "./ErrorModal"

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState("")
	const [enteredAge, setEnteredAge] = useState("")
	const [error, setError] = useState("")
	const addUserHandler = (event) => {
		event.preventDefault()
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: "Invalid input",
				message: "Please enter a valid name and age.",
			})
			return
		}
		if (+enteredAge < 1) {
			setError({
				title: "Invalid age",
				message: "Please enter a valid age.",
			})
			return
		}
		props.onAddUser(enteredUsername, enteredAge)
		setEnteredUsername("")
		setEnteredAge("")
	}

	const handleUsernameChange = (event) => {
		setEnteredUsername(event.target.value)
	}

	const handleAge = (event) => {
		setEnteredAge(event.target.value)
	}
	const errorHandler = () => {
		setError(null)
	}

	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}

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
					<label htmlFor='age'>Age (years)</label>
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
		</div>
	)
}

export default AddUser
