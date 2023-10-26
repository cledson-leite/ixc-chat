import CloseIcon from '@mui/icons-material/Close';

import './styles.css'
import { useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
  const navigate = useNavigate()
    const user = sessionStorage.getItem('username')
    const logout = () => {
      sessionStorage.clear()
      navigate('/login')
    }
  return (
    <div>
      <CloseIcon fontSize="medium" color='error' onClick={logout}/>
      <h2>Real Chat by {user!.replace('"', '').replace('"', '')}</h2>
    </div>
  )
}
