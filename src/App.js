import './App.css';
import Login from './components/Login';
import Main from './components/Main';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
