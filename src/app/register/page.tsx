'use client';

import RegisterComponent from '@/client/register';
import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const RegisterPage = () =>  (
  <Container component={Paper} elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
    <Typography variant="h5" style={{ marginBottom: '1rem' }}>Register</Typography>
    <RegisterComponent />
  </Container>
);

export default RegisterPage;