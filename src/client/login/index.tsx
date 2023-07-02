import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import {createClientComponentClient} from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    await supabase.auth.signInWithPassword({
      email,
      password,
    })

    router.refresh();
  };

  return (
    <form onSubmit={handleLogin}>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
        fullWidth
        style={{ marginTop: 16 }}
      >
        {loading ? <CircularProgress size={24} /> : 'Log In'}
      </Button>

      {error && (
        <Typography color="error" style={{ marginTop: 16 }}>
          {error}
        </Typography>
      )}
    </form>
  );
}

export default LoginComponent;