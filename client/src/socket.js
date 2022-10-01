import { io } from 'socket.io-client'

const URL = (process.env.REACT_APP_SERVER_ENDPOINT || 'http://localhost:5001')
const socket = io(URL)

export default socket