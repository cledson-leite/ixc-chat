import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from '../component/Login';
import { Signup } from '../component/Signup';
import { PrivateRouter } from './PrivateRouter';

export const Routers: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRouter/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}
