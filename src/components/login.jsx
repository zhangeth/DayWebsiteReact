import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      const user = await Auth.signIn(username, password);
      console.log('User logged in:', user);
      // Redirect or perform actions upon successful login
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}>Sign In</button>
    </div>
  );
}

export default Login;
