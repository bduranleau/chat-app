import { useEffect, useState } from 'react'

function Conversation({socket}) {
    // const [data, setData] = useState({})

    // useEffect(() => {
    //     fetch("/chat")
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // }, [])
    const [messages, setMessages] = useState({})

    useEffect(() => {
        const messageListener = (message) => {
            setMessages((prevMessages) => {
                const newMessages = {...prevMessages}
                newMessages[message.id] = message
                return newMessages
            })
        }

        socket.on('message', messageListener)
        socket.emit('get-conversation')

        return () => {
            socket.off('message', messageListener)
        }
    }, [socket])

    return (

      <div className="Conversation">
        {[...Object.values(messages)]
          .sort((a, b) => a.time - b.time)
          .map((message) => (
          <div
            key={message.id}
            className="message-container"
            title={`Sent at ${new Date(message.timestamp).toLocaleTimeString()}`}
          >
            <span className="message">{message.text}</span>
            <span className="date">{new Date(message.timestamp).toLocaleTimeString()}</span>
          </div>
        ))
      }
    </div>
  )
}

export default Conversation