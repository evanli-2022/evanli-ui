import CircularProgress from '@mui/material/CircularProgress';
import React, { Suspense } from 'react';

import { Flex } from '~/ui/layouts/Flex';

import type { FC, LazyExoticComponent } from 'react';

export type LazyRouteProps = {
  component: LazyExoticComponent<FC>;
};

export const LazyRoute = ({ component: Page }: LazyRouteProps) => (
  <Suspense
    fallback={
      <Flex sx={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress />
      </Flex>
    }>
    <Page />
  </Suspense>
);
