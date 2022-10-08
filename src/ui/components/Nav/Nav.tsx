import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DiversityIcon from '@mui/icons-material/Diversity2';
import GavelIcon from '@mui/icons-material/Gavel';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import List from '@mui/material/List';
import React from 'react';

import { routes } from '~/helpers/routing';
import { NavLink } from '~/ui/components/NavLink';
import type { NavLinkProps } from '~/ui/components/NavLink';

const navigations: NavLinkProps['nav'][] = [
  {
    icon: <HomeIcon />,
    text: 'Главная',
    path: routes.main.root,
  },
  {
    icon: <BusinessCenterIcon />,
    text: 'Задания',
    path: routes.main.tasks,
  },
  {
    icon: <DiversityIcon />,
    text: 'Краудфандинг',
    path: routes.main.crowdfunding,
  },
  {
    icon: <GavelIcon />,
    text: 'Аукционы',
    path: routes.main.auctions,
  },
  {
    icon: <ShoppingCartIcon />,
    text: 'Магазин',
    path: routes.main.market,
  },
];

export const Nav = () => (
  <List component='nav'>
    {navigations.map(nav => (
      <NavLink key={nav.path} nav={nav} end={nav.path === routes.main.root} />
    ))}
  </List>
);
