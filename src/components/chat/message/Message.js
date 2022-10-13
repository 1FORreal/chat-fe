import React from 'react';
import './Message.css'

export default class Message extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {
                id: '',
                username: '',
            },
            content: '',
            float: 'START',
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            user: props.user,
            content: props.content,
            float: props.float,
        }
    }

    renderErrorMessage() {
        return(
            <div className='container border w-100 p-3'>
                <div className='float-start w-75 border p-1'>
                    <h6 className='m-0'>ERROR</h6>
                </div>
                <div className='w-75 border p-1'>
                    <p id='message-content'>There is a problem!</p>
                </div>
            </div>
        )
    }

    render() {
        let classNameValue

        switch(this.state.float) {
            case 'START':
                classNameValue = 'float-start w-75 border p-1'
                break;
            case 'END':
                classNameValue = 'float-end w-75 border p-1'
                break;
            default:
                return(
                    this.renderErrorMessage()
                )
        }   

        return(

            <div className='container border w-100 p-3'>
                <div className={classNameValue}>
                    <h6 className='m-0'>{this.state.user.username}</h6>
                </div>
                <div className={classNameValue}>
                    <p id='message-content'>{this.state.content}</p>
                </div>
            </div>
        )
    }
}