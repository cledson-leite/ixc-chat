import { useRef } from 'react';
import { Socket } from 'socket.io-client';
import { Input } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

import './styles.css'


type FooterProps = {
    socket: Socket
}

export const Footer: React.FC<FooterProps> = ({socket}) => {
    const username = sessionStorage.getItem('username')
    const messageRef = useRef<HTMLInputElement>()
    const handleSubmit = () => {
    const message = messageRef.current?.value
    if(!message || !message.trim()) return
    if(!username || !username.trim()) return
    const payload = {
      author: username,
      text: message
    }
    socket.emit('msgToServer', payload)
    messageRef.current?.focus()
    if(messageRef.current) messageRef.current.value = ' '
  }

  const getEnterKey = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter')
      handleSubmit()
  }
  return (
    <div className='chat-footer'>
        <Input inputRef={messageRef} placeholder='Mensagem' onKeyDown={(e)=>getEnterKey(e)} fullWidth />
        <SendIcon sx={{m:1, cursor: 'pointer'}} onClick={()=>handleSubmit()} color="primary" />
    </div>
  )
}
