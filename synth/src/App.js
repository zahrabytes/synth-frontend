// App.js
import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup';

function App() {
  const [isLoginVisible, setLoginVisible] = useState(true);

  return (
    <div className="App">
      <header className="header">
        <button className={`toggle-button ${isLoginVisible ? '' : 'active'}`} onClick={() => setLoginVisible(true)}>Login</button>
        <button className={`toggle-button ${isLoginVisible ? 'active' : ''}`} onClick={() => setLoginVisible(false)}>Sign Up</button>
      </header>
      <div className="form-container">
        {isLoginVisible ? <Login /> : <Signup />}
      </div>
      <footer>
        <p>© 2024 Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
