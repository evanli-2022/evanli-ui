import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { routes } from '~/helpers/routing';

import { LayoutRoute } from './LayoutRoute';
import { LazyRoute } from './LazyRoute';

const Auctions = React.lazy(() => import('~/ui/pages/Auctions'));
const Crowdfunding = React.lazy(() => import('~/ui/pages/Crowdfunding'));
const Home = React.lazy(() => import('~/ui/pages/Home'));
const Market = React.lazy(() => import('~/ui/pages/Market'));
const Profile = React.lazy(() => import('~/ui/pages/Profile'));
const SignIn = React.lazy(() => import('~/ui/pages/SignIn'));
const Tasks = React.lazy(() => import('~/ui/pages/Tasks'));

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='*' element={<Navigate to={routes.main.root} replace />} />
      <Route path={routes.main.root} element={<LayoutRoute />}>
        <Route index element={<LazyRoute component={Home} />} />
        <Route path={routes.main.auctions} element={<LazyRoute component={Auctions} />} />
        <Route path={routes.main.crowdfunding} element={<LazyRoute component={Crowdfunding} />} />
        <Route path={routes.main.market} element={<LazyRoute component={Market} />} />
        <Route path={routes.main.profile} element={<LazyRoute component={Profile} />} />
        <Route path={routes.main.tasks} element={<LazyRoute component={Tasks} />} />
      </Route>
      <Route path={routes.signIn} element={<SignIn />} />
    </Routes>
  </BrowserRouter>
);
