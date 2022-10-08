import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { Router } from '~/ui/Router';
import { Theme } from '~/ui/Theme';
import { Error } from '~/ui/components/Error';

import './index.css';

export const App = () => (
  <Theme>
    <ErrorBoundary fallbackRender={({ error }) => <Error>{error.message}</Error>}>
      <Router />
    </ErrorBoundary>
  </Theme>
);
