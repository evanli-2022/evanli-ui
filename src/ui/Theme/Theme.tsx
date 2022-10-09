import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';

import type { PropsWithChildren } from 'react';

const theme = createTheme();

export const Theme = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles styles={{ a: { textDecoration: 'none' } }} />
    <CssBaseline />
    {children}
  </ThemeProvider>
);
