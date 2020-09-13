import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';


let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const EndPoint = 'localhost:8080'

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(EndPoint);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, () => {

    });

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [EndPoint, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);


  return (
    <div className="outerContainer">
      <div className="container">
        <input 
          value={message} 
          onChange={(event) => setMessage(event.target.value)} 
          onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
        />
      </div>
    </div>
  );
  
}


export default Chat;