import './LogIn.css'
import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { changeUser, authenticate, resetUser } from '../../features/UserSlice'
import { useNavigate } from 'react-router-dom'     

export default function LogIn(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    let navigate = useNavigate()

    const authenticated = useSelector((state) => state.user.authenticated)
    const dispatch = useDispatch()

    const handleUsername = (event) => {    
        setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const logIn = (event) => {
        const url = 'http://localhost:8080/users/log-in'

        axios({
            url : url,
            method : 'post',
            data : {
                username : username,
                password : password
            }
            
        }).then(response => {
            let data = {
                id: response.data.id,
                username: response.data.username,
            }

            dispatch(changeUser(data))
            dispatch(authenticate())

            navigate('/chat')
        })
    }

    const logOut = (event) => {
        dispatch(resetUser())
    }

    if(authenticated === true)
        return(
            <div className='container w-25 my-2'>
                <h3 className=''>You are already authenticate!</h3>
                <Link to={'/sign-up'}>Sign out!</Link>
                <button className='btn btn-primary' onClick={logOut}>Log out!</button>
            </div>
        )
    
    return(
        <form className='container w-25 my-2' id='log-in-body'>
            <div className='container py-2'>
                <h3>Log in</h3>
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
                <button type='button' className='btn btn-primary me-3' onClick={logIn}>Log in</button>
                <Link to={'/sign-up'}>Don't have an account? Sign up!</Link>
            </div>
        </form>
    )

}