import './ChatHeader.css'
import React from 'react'

export default function ChatHeader(props) {

    return(
        <div className='container border' id='chat-header-main'>
            <div className='d-flex align-content-center justify-content-center mt-2'>
                <h4>Write your message</h4>
            </div>
        </div>
    )
}