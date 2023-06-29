'use client';

import LoginComponent from '@/client/login';
import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const LoginPage = () =>  (
  <Container component={Paper} elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
    <Typography variant="h5" style={{ marginBottom: '1rem' }}>Login</Typography>
    <LoginComponent />
  </Container>
);

export default LoginPage;