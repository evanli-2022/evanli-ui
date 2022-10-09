import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import React from 'react';

import { CustomDrawer } from './Navbar.styled';

import type { DrawerProps } from '@mui/material/Drawer';

export type NavbarProps = Pick<DrawerProps, 'children' | 'open' | 'onClose'>;

export const Navbar = ({ children, open, onClose }: NavbarProps) => (
  <>
    <Hidden only={['md', 'lg', 'xl']}>
      <Drawer anchor='left' open={open} onClose={onClose}>
        {children}
      </Drawer>
    </Hidden>
    <Hidden only={['xs', 'sm']}>
      <CustomDrawer variant='permanent' sx={{ zIndex: 'mobileStepper' }} open={open}>
        {children}
      </CustomDrawer>
    </Hidden>
  </>
);
