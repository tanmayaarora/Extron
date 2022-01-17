import './sass/App.scss';
import Login from './components/frontend/User/Login';
import Main from './components/frontend/Main';
import Reset from './components/frontend/User/PasswordReset';
import Register from './components/frontend/User/NewUser';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './components/frontend/Store'

function App() {

  return (
    <Provider store={Store}>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/reset" element={<Reset/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
