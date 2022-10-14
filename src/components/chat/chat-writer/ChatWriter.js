import React, { useState } from 'react'
import { postMessage } from '../../../logic/message_api'
import './ChatWriter.css'



export default function ChatWriter(props) {
    const [ messageContent, setMessageContent ] = useState('')

    const user = props.user
    const onMessagesUpdate = props.onMessagesUpdate


    const handleMessageContent = (event) => {
        setMessageContent(event.target.value)
    }

    const sendMessage = (event) => {
        const message = {
            user: user,
            content: messageContent
        }

        let promise = postMessage(message)
        
        promise.then((response) => {
            onMessagesUpdate()
            setMessageContent('')
        })
    }

    return(
        <div className='container border p-0' id='chat-writer-main'>
            <div className='container p-2'>
                <form className='d-flex'>
                    <input type='text' value={messageContent} onChange={handleMessageContent} className='form-control me-2'/>
                    <button type='button' onClick={sendMessage} className='btn btn-lg btn-primary ms-2'>Send</button>
                </form>
            </div>
        </div>
    )
}