import './SignUp.css'
import { useSelector } from 'react-redux'

import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [accountCreated, setAccountCreated] = useState(false)

    const user = useSelector((state) => state.user.user)
    const authenticated = useSelector((state) => state.user.authenticated)

    const handleUsername = (event) => {    
        setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const signUp = (event) => {
        const url = 'http://localhost:8080/users'

        axios({
            url : url,
            method : 'post',
            data : {
                username : username,
                password : password
            }
        }).then(response => {
            setAccountCreated(true)
        })
    }

    console.log(user)
    console.log(authenticated)

    if(authenticated === true)
        return(
            <div className='container w-25 my-2'>
                <h3>You are logged in!</h3>
                <Link to={'/log-in'}>Log in!</Link>
            </div>
        )

    if(accountCreated === true)
        return(
            <div className='container w-25 my-2'>
                <h3>Your account has been created succesfully!</h3>
                <Link to={'/log-in'}>Log in!</Link>
            </div>
        )

    return(
        <form className='container w-25 my-2' id='sign-up-body'>
            <div className='container py-2'>
                <h3>Sign up</h3>
            </div>
            <div className='container py-2'>
                <label className='form-label'>Username</label>
                <input type='text' value={username} onChange={handleUsername} className='form-control'/>
            </div>
            <div className='container py-2'>
                <label className='form-label'>Password</label>
                <input type='text' value={password} onChange={handlePassword} className='form-control'/>
            </div>
            <div className='container py-2'>
                <button type='button' className='btn btn-primary me-3' onClick={signUp}>Sign up</button>
                <Link to={'/log-in'}>Already have an account? Log in!</Link>
            </div>
        </form>
    )
}