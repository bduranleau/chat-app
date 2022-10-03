import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import '../styles/Chatbox.css'

function newMessage(message){
    const msg = {
        id: String,
        text: String,
        timestamp: Number
    }

    msg.id = uuidv4()
    msg.text = message
    msg.timestamp = Date.now()
    return msg
}

function Chatbox({socket}) {
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        socket.emit('message', newMessage(message))
        setMessage('')
    }

    return (
        <div className="Chatbox">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter a message' value={message} onChange={e => setMessage(e.target.value)}/>
            </form>
        </div>
    )
}

export default Chatbox