import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import {TextField, Button, Link} from '@mui/material'

import { passwordValidator, usernameValidator } from "../../utils/validator"
import { signup } from "../../api"

import './styles.css'


type Error = {
  name: string,
  username: string,
  password: string,
}

export const Signup: React.FC = () => {
    const navigate = useNavigate();
    const [error, setError] = useState<Error>()
    const refs = {
      name: useRef<HTMLInputElement>(null),
      username: useRef<HTMLInputElement>(null),
      password: useRef<HTMLInputElement>(null)
    }
    const handleLogin = async () => {
        const name = refs.name.current?.value;
        const username = refs.username.current?.value;
        const password = refs.password.current?.value;
        if( 
            usernameValidator(name!) 
            || usernameValidator(username!) 
            || passwordValidator(password!)
          ) {
          setError({
            name: usernameValidator(name!),
            username: usernameValidator(username!),
            password: passwordValidator(password!)
          })
          return
        }
        signup(name!, username!, password!)
        navigate('/');
    }
  return (
    <div className="container">
        <h2>Cadastrar</h2>
        <TextField 
          error={Boolean(error?.name)}
          helperText={error?.name}
          variant="standard" 
          inputRef={refs.name} 
          placeholder='Seu Nome' 
          />
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
        <Button 
          sx={{mt:2}}
          onClick={handleLogin}
          variant="contained"
          >Entrar</Button>
        <span>
          <p>Já tem cadastro? </p>
          <Link 
          onClick={() => navigate('/')} 
          underline="hover"
          >Login</Link>
        </span>
    </div>
  )
}
