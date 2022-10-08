import React from 'react';
import { Outlet } from 'react-router-dom';

import { Nav } from '~/ui/components/Nav';
import { Page } from '~/ui/layouts/Page';

export const LayoutRoute = () => (
  <Page nav={<Nav />}>
    <Outlet />
  </Page>
);
