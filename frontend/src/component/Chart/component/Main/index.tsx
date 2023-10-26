import { useEffect, useRef } from 'react'

import { Message } from '../../../../api/all-message'

import { MessageItem } from '../MessageItem'

import './styles.css'

type MainProps = {
    list: Message[]
}

export const Main: React.FC<MainProps> = ({list}) => {
    const bottomRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        bottomRef.current?.scrollIntoView({behavior: 'smooth'})
    }, [list])
    return (
        <div className='chat-body'>
            {
            list.map(
                (message, index) => (
                    <MessageItem message={message} key={index} />
                    )
                )
            }
            <div ref={bottomRef} />
            </div>
    )
}
