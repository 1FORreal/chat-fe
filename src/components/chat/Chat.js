import './Chat.css'
import React, { useState }  from 'react'
import ChatMessagesObserver from './chat-messages/ChatMessagesObserver'
import { useSelector } from 'react-redux'
import ChatHeader from './chat-header/ChatHeader'
import ChatWriter from './chat-writer/ChatWriter'
import { getMessages } from '../../logic/message_api'


export default function Chat(props) {
    const user = useSelector((state) => state.user.user)
    const authenticated = useSelector((state) => state.user.authenticated)

    const [ messages, setMessages ] = useState([])
    const [ messagesRequested, setMessagesRequested ] = useState(false)

    const handleMessages = () => {
        const page_number = 0
        const page_size = 100

        let promise = getMessages(page_number, page_size)

        promise.then(response => {
            setMessages(response.data)
        })
    }

    if(messagesRequested === false) {
        handleMessages()
        setMessagesRequested(true)
    }

    const chat_main = () => {
        return(
            <div className='container w-75 vh-100 px-0 border' id='chat-main'>
                <ChatHeader/>
                <ChatMessagesObserver user={user} messages={messages}/> 
                <ChatWriter user={user} onMessagesUpdate={handleMessages}/>
            </div>
        )
    }

    const non_authenticated_error = () => {
        return(
            <div className='container'>
                <h3>Not authenticated!</h3>
            </div>
        )
    }

    return chat_main()

}