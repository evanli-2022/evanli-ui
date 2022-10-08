import ErrorIcon from '@mui/icons-material/Error';
import Typography from '@mui/material/Typography';
import React from 'react';

import { Page } from '~/ui/layouts/Page';
import type { PageProps } from '~/ui/layouts/Page';

export type ErrorProps = Pick<PageProps, 'children'>;

export const Error = ({ children }: ErrorProps) => (
  <Page sx={{ gap: 2, alignItems: 'center', justifyContent: 'center' }}>
    <ErrorIcon color='error' fontSize='large' />
    <Typography variant='h6' component='p'>
      Что-то пошло не так:
    </Typography>
    <Typography variant='body1' component='p'>
      {children}
    </Typography>
  </Page>
);
