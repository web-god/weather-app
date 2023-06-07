import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import Rainy from './pages/Rainy';
function App() {
  return (
  
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/rainy" element={<Rainy/>}/>
        </Routes>
    </Router>

  )
}

export default App;
