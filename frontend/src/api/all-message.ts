import axios from "axios";

export type Message = {
  author: string,
  text: string
}

export const allMessage = async (): Promise<Message[]> => {
    try {
        const result = await axios.get('http://localhost:8080/message');
        const msgs = result.data.map(
            (message: Message) => (
                {author: message.author, text: message.text}
            ))
        return msgs;
    } catch (error: any) {
        throw new Error(error.message)
    }
    
}