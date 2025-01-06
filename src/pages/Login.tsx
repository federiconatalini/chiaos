// src/pages/Login.tsx
import { ReactElement, useState } from 'react';
import { auth } from './../utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { useAuth } from '../utils/context/AuthContext';

function Login(): ReactElement {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const loggedInUser = { id: '123', email: email, displayName: 'Federico' };
      setUser(loggedInUser);
      navigate('/'); // naviga alla dashboard se il login ha successo
    } catch (error) {
      console.error('Errore di autenticazione', error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl mb-4">Login</h1>
      <TextField
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="mb-2 p-2 border rounded"
      />
      <TextField
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="mb-4 p-2 border rounded"
      />
      <Button
        onClick={handleLogin}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
