import './App.css';
import Login from './components/Login/Login';
import Main from './components/Main';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
