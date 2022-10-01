import React, { useState, useEffect } from 'react'
import socket from './socket';
import './styles/App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  const [isConnected, setIsConnected ] = useState(socket.connected)

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true)
    })
    
    socket.on('disconnect', () => {
      setIsConnected(false)
    })

    return () => {
      socket.off('connect')
      socket.off('disconnect')
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className='root-container'>
          <p>Connected: { '' + isConnected }</p>
          <Navbar />
          <Main socket={socket}/>
        </div>
      </header>
    </div>
  );
}

export default App;
