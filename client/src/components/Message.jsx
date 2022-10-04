function Message({msg}) {
    return (
        <div key={msg.id} 
            className="message"
            title={`Sent at ${new Date(msg.timestamp).toLocaleTimeString()}`}
        >
            <span className="message-text">{msg.text}</span>
            <span className="message-timestamp">{new Date(msg.timestamp).toLocaleTimeString()}</span>
        </div>
    )
}

export default Message