import Container from '@mui/material/Container';
import React from 'react';

import type { ContainerProps } from '@mui/material/Container';
import type { SxProps } from '@mui/system';

export type ContentProps = Pick<ContainerProps, 'children' | 'className' | 'sx'>;

export const Content = ({ children, className, sx = {} }: ContentProps) => (
  <Container
    component='section'
    className={className}
    maxWidth='xl'
    sx={[sx, { display: 'flex', flexDirection: 'column' }] as SxProps}>
    {children}
  </Container>
);
