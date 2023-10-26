import axios from "axios";

export const signup = async (name: string, username: string, password: string): Promise<void> => {
    const data = {name, username, password}
    try {
        const result = await axios.post('http://localhost:8080/signup', data);
        sessionStorage.setItem('token', JSON.stringify(result.data.accessToken))
        sessionStorage.setItem('username', JSON.stringify(result.data.username))
    } catch (error: any) {
        throw new Error(error.message)
    }
    
}