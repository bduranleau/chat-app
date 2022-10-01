import Conversation from './Conversation'
import Chatbox from './Chatbox'
import '../styles/Chat.css'

function Chat({socket}) {
    return (
        <div className='Chat'>
            <Conversation socket={socket}/>
            <Chatbox socket={socket}/>
        </div>
    )
}

export default Chat