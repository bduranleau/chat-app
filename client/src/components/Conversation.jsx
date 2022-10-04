import { useEffect, useState } from 'react'
import Message from './Message'

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
            <Message msg={message} />
        ))
      }
    </div>
  )
}

export default Conversation