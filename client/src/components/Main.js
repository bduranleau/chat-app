import '../styles/Main.css'
import Content from './Content'
import Sidebar from "./Sidebar"

function Main({socket}) {
    return (
        <div className="main-container">
            <Sidebar />
            <Content socket={socket}/>
        </div>
    )
}

export default Main