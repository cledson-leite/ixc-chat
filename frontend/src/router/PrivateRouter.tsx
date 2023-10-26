import { Navigate } from "react-router-dom"
import { Chat } from "../component/Chart"

export const PrivateRouter: React.FC = () => {
    const isAuth = sessionStorage.getItem('token')
  return isAuth ? <Chat /> : <Navigate to={'/Login'} />
}
