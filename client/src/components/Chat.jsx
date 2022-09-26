import Conversation from './Conversation'
import Chatbox from './Chatbox'
import '../styles/Chat.css'

function Chat() {
    return (
        <div className='Chat'>
            <Conversation />
            <Chatbox />
        </div>
    )
}

export default Chat