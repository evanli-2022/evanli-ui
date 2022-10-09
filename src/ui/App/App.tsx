import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider as StoreProvider } from 'react-redux';

import { createStore } from '~/data/store';
import { Router } from '~/ui/Router';
import { Theme } from '~/ui/Theme';
import { Error } from '~/ui/components/Error';

const store = createStore();

export const App = () => (
  <Theme>
    <ErrorBoundary fallbackRender={({ error }) => <Error>{error.message}</Error>}>
      <StoreProvider store={store}>
        <Router />
      </StoreProvider>
    </ErrorBoundary>
  </Theme>
);
