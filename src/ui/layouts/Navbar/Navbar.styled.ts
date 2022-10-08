import LibDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';

import type { Theme, CSSObject } from '@mui/material/styles';

const drawerOpened = ({ transitions: { create, duration, easing } }: Theme): CSSObject => ({
  width: 240,
  transition: create('width', {
    easing: easing.sharp,
    duration: duration.enteringScreen,
  }),
});

const drawerClosed = ({
  breakpoints,
  spacing,
  transitions: { create, duration, easing },
}: Theme): CSSObject => ({
  width: spacing(7),
  [breakpoints.up('sm')]: {
    width: spacing(9),
  },
  transition: create('width', {
    easing: easing.sharp,
    duration: duration.leavingScreen,
  }),
});

export const Drawer = styled(LibDrawer, { shouldForwardProp: prop => prop !== 'open' })(
  {
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      overflowX: 'hidden',
    },
  },
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': open ? drawerOpened(theme) : drawerClosed(theme),
  })
);
