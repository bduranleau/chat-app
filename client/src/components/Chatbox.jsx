import { useState } from 'react'
import '../styles/Chatbox.css'

async function handleSubmit(message) {
    console.log("Message: " + message)
    // const response = await fetch('/chat', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(message)
    // })
    // return response.json()
} 


function Chatbox() {
    const [message, setMessage] = useState("")

    return (
        <div className="Chatbox">
            <form onSubmit={() => handleSubmit(message)}>
                <input type="text" placeholder='Enter a message' value={message} onChange={e => setMessage(e.target.value)}/>
            </form>
        </div>
    )
}

export default Chatbox