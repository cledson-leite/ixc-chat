/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import io from 'socket.io-client';

import { allMessage } from '../../api';
import { Message } from '../../api/all-message';

import { Header } from './component/Header';
import { Main } from './component/Main';
import { Footer } from './component/Footer';

import './styles.css'

export const Chat: React.FC = () => {
  const socket = io('http://localhost:8080')
  const [messageList, setMessageList] = useState<Message[]>([])
    const updateList = useCallback( async () => {
        const list = await allMessage()
        setMessageList(list)
    }, [])
    useEffect(()=>{
        updateList()
    }, [])
  const messageReceived = (msg: Message) => {
        setMessageList([...messageList, msg])
    }
    useEffect(()=>{
        socket.on('msgToClient', messageReceived)
    }, [socket])
  return (
    <div>
      <Header />
      <div className='chat-container'>
        <Main list={messageList}/>
        <Footer socket={socket} />
      </div>
    </div>
  )
}