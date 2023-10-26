import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import {TextField, Button, Link} from '@mui/material'

import { passwordValidator, usernameValidator } from "../../utils/validator"
import { login } from "../../api"
import './styles.css'

type Error = {
  username: string,
  password: string,
}

export const Login: React.FC = () => {
    const navigate = useNavigate();
    const [error, setError] = useState<Error>()
    const refs = {
      username: useRef<HTMLInputElement>(null),
      password: useRef<HTMLInputElement>(null)
    }
    const handleLogin = async () => {
         const username = refs.username.current?.value;
        const password = refs.password.current?.value;
        if( usernameValidator(username!) || passwordValidator(password!)) {
            setError({
              username: usernameValidator(username!),
              password: passwordValidator(password!)
            })
            return
        }
        await login(username!, password!)
        navigate('/');
    }
  return (
    <div className="container">
        <h2>Login</h2>
        <TextField 
          error={Boolean(error?.username)}
          helperText={error?.username}
          variant="standard" 
          inputRef={refs.username} 
          placeholder='Nome de usuário' 
          />
        <TextField 
          error={Boolean(error?.password)}
          helperText={error?.password}
          variant="standard" 
          inputRef={refs.password} 
          placeholder='Sua senha' />
        <Button sx={{mt:2}} onClick={handleLogin} variant="contained">Entrar</Button>
        <span>
          <p>Não tem cadastro? </p>
          <Link onClick={() => navigate('/signup')} underline="hover">Cadastrar</Link>
        </span>
    </div>
  )
}
