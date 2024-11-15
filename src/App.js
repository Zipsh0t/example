import './App.css';
import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';
import { ToastProvider } from './contexts/toastContext/toastContext';
import { AuthProvider } from './contexts/authContext';
import AdminHomepage from './pages/AdminHomepage/AdminHomepage';

function App() {
  return (
  <ToastProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
      </Routes>
      <AuthProvider>
        <Routes>
        <Route path ="/login" element={<Login/>} />
        <Route path ="/admin/home" element={<AdminHomepage/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  </ToastProvider>
  )
}

export default App;
