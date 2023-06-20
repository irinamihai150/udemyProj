import React from "react"
import classes from "./AddUser.module.css"

const AddUser = () => {
	return (
		<div className=''>
			<label>Username</label>
			<input className={classes.input} type='text' />
			<label>Age</label>
			<input className={classes.input} type='text' />
		</div>
	)
}

export default AddUser
