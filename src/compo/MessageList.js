import React from 'react'

const DUMMY_DATA = [
    {
        senderId: 'krisha',
        text: "Hey, how have you been ?"
    },
    {
        senderId: 'aakash',
        text: "Great!!, how about youh ?"
    },
    {
        senderId: 'krisha',
        text: "Good to hear, i'm great as well.."
    }
]

class MessageList extends React.Component{
    render(){
        return(
            <div className="message-list">
                {DUMMY_DATA.map((message, index) => {
                    return(
                      <div key={index} className="message">
                        <div className="msg-userName">{message.senderId}</div>
                        <div className="msg-text">{message.text}</div>
                    </div>
                    )
                })}
            </div>
        )
    }
}
export default MessageList