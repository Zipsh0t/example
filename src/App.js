import './App.css';
import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path ="/login" element={<Login/>} />
      </Routes>
    </Router>

  )
}

export default App;
