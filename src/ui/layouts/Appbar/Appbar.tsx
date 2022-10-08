import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';

import type { IconButtonProps } from '@mui/material/IconButton';

export type AppbarProps = {
  onMenuClick?: IconButtonProps['onClick'];
};

export const Appbar = ({ onMenuClick }: AppbarProps) => (
  <AppBar position='sticky' component='header'>
    <Toolbar>
      {onMenuClick && (
        <IconButton edge='start' aria-label='menu' color='inherit' onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>
      )}
      <Typography variant='h6'>Веб-сервис</Typography>
    </Toolbar>
  </AppBar>
);
