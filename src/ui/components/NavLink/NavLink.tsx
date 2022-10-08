import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import type { SxProps } from '@mui/system';
import type { FC } from 'react';
import type { NavLinkProps as LinkProps } from 'react-router-dom';

export type NavLinkProps = Omit<LinkProps, 'to'> & {
  nav: {
    icon: ReturnType<FC>;
    path: string;
    text: string;
  };
};

const active: SxProps = {
  color: 'text.primary',
  borderRight: 2,
  borderColor: 'primary.main',
};

const inactive: SxProps = {
  color: 'text.secondary',
};

export const NavLink = ({ nav: { icon, path, text }, ...props }: NavLinkProps) => (
  <Link {...props} to={path}>
    {({ isActive }) => (
      <ListItemButton title={text} sx={isActive ? active : inactive}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    )}
  </Link>
);
