// App.js
import React, { useState } from 'react';
import './App.css';
import LoginSignup from './LoginSignup';

function App() {
  const [isLoginVisible, setLoginVisible] = useState(true);

  return (
    <div className="App">
      <LoginSignup/>
      <footer>
        <p>© 2024 Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
