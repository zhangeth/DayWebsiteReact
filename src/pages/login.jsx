// components/Login.js
import { useEffect } from "react";

import { Authenticator, useAuthenticator, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { useNavigate, useLocation } from 'react-router';

function Login() {
  return (
    <div>
      <Authenticator>
          {({ signOut, user }) => (
          <main>
              <h1>Hello {user.username}</h1>
              <button onClick={signOut}>Sign out</button>
          </main>
          )}
      </Authenticator>
    </div>
  );
}
export default Login;