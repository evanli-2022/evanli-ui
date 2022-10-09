import Container from '@mui/material/Container';
import React from 'react';

import type { ContainerProps } from '@mui/material/Container';
import type { SxProps } from '@mui/system';

export type ContentProps = Pick<ContainerProps, 'children' | 'className' | 'sx'>;

export const Content = ({ children, className, sx = {} }: ContentProps) => (
  <Container
    className={className}
    maxWidth='lg'
    sx={[sx, { display: 'flex', flexDirection: 'column', py: 3, overflow: 'auto' }] as SxProps}>
    {children}
  </Container>
);
