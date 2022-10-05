import Container from '@mui/material/Container';
import React from 'react';

import type { PropsWithChildren } from 'react';

export const Layout = ({ children }: PropsWithChildren) => (
  <Container component='main' maxWidth='xs' sx={{ display: 'flex', height: '100vh' }}>
    {children}
  </Container>
);
