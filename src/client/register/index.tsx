import { useState } from 'react';
import supabase from '../../lib/supabaseClient';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';


export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`
      }
    });

    if (error) {
      alert(error.message);
      setLoading(false);
    } else {
      alert('Registration successful!');
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister}>
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
