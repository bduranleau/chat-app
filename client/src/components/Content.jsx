import Chat from "./Chat"
import "../styles/Content.css"

function Content({socket}) {
    return (
        <div className="Content">
            <Chat socket={socket}/>
        </div>
    )
}

export default Content