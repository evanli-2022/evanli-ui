import React from 'react';

import { Layout } from '~/Layout';
import { SignIn } from '~/SignIn';
import { Theme } from '~/Theme';

export const App = () => (
  <Theme>
    <Layout>
      <SignIn />
    </Layout>
  </Theme>
);
