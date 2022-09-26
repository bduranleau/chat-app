import { useEffect, useState } from 'react'

function Conversation() {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch("/chat")
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    return (
        <div className="Conversation">
            { data.status } <br />
            Conversation
        </div>
    )
}

export default Conversation