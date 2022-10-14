import React, { useState } from "react"
import Message from '../message/Message'
import { isUsersMessage } from "../../../logic/message_api"
import './ChatMessagesObserver.css'

let page_number = 0
let page_size = 100

const renderMessages = (user, messages) => {
    return(
        <div className='d-flex flex-column-reverse w-100'>
            {
                messages.map((message, index) => {
                    let floatValue = (isUsersMessage(user, message) ? 'END' : 'START')

                    return <Message user={message.user} content={message.content} float={floatValue} key={index}/>
                })
            }
        </div>
        )
}

const renderNoMessages = () => {
    return(
        <div className="container">
            <p>No messages available!</p>
        </div>
    )
}

let i = 0;

export default function ChatMessagesObserver(props) {
    const user = props.user
    const messages = props.messages

    return(
        <div className='container p-0 border overflow-auto' id='chat-messages-main'>
            <div className='container border p-2'>
                <h5>Global messages</h5>
            </div>
            {
                (messages.length > 0 ? renderMessages(user, messages) : renderNoMessages())
            }
        </div>
    )
    
}