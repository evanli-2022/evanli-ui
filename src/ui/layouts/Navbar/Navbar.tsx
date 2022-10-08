import React from 'react';

import { Drawer } from './Navbar.styled';

import type { DrawerProps } from '@mui/material/Drawer';

export type NavbarProps = Pick<DrawerProps, 'children' | 'open'>;

export const Navbar = ({ children, open }: NavbarProps) => (
  <Drawer variant='permanent' open={open}>
    {children}
  </Drawer>
);
