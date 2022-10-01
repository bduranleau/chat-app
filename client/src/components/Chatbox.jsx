import { useState } from 'react'
import '../styles/Chatbox.css'

function Chatbox({socket}) {
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        socket.emit('message', message)
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