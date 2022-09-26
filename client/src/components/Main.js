import '../styles/Main.css'
import Content from './Content'
import Sidebar from "./Sidebar"

function Main() {
    return (
        <div className="main-container">
            <Sidebar />
            <Content />
        </div>
    )
}

export default Main