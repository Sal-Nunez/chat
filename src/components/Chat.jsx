import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'

function Chat() {

    const [messages, setMessages] = useState([])

    const [socket] = useState(() => io(':8000'))

    useEffect(() => {
        socket.on('new_message_from_server', msg =>
        // when setting state, you have to use this exact syntax.
        // any difference in syntax qill not work the way you expect
        setMessages(prevMessages => {
            return [msg, ...prevMessages]
        })
        )
    }, [])

    return (
        <div>
            <input type="text" name="Name"/>
            <button>Submit</button>
        </div>
    )

}

export default Chat