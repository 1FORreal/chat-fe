import './Chat.css'
import React  from 'react'
import ChatMessagesObserver from './chat-messages/ChatMessagesObserver'
import { useSelector } from 'react-redux'
import ChatHeader from './chat-header/ChatHeader'
import ChatWriter from './chat-writer/ChatWriter'


export default function Chat(props) {
    const user = useSelector((state) => state.user.user)
    const authenticated = useSelector((state) => state.user.authenticated)

    const chat_main = () => {
        return(
            <div className='container w-75 vh-100 px-0 border' id='chat-main'>
                <ChatHeader/>
                <ChatMessagesObserver user={user}/> 
                <ChatWriter user={user}/>
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