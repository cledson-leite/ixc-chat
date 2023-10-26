import { Message } from '../../../../api/all-message'
import  './styles.css'

type MessageProps = {
    message: Message
}

export const MessageItem: React.FC<MessageProps> = ({message}) => {
    const username = sessionStorage.getItem('username')
    return (
        <div className={`message-container ${message.author === username && 'message-mine'}`}>
            <div className="message-author"><strong>{message.author.replace('"', '').replace('"', '')}</strong></div>
            <div className="message-text">{message.text}</div>
        </div>
    )
}
