import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';

import { Help } from '~/ui/components/Help';
import type { HelpProps } from '~/ui/components/Help';
import { Flex } from '~/ui/layouts/Flex';
import type { FlexProps } from '~/ui/layouts/Flex';

export type TopActivityProps = Pick<FlexProps, 'children'> & {
  help?: HelpProps;
  title: string;
};

export const TopActivity = ({ children, help, title }: TopActivityProps) => (
  <Container
    component='section'
    maxWidth='md'
    sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <Flex sx={{ gap: 1, alignItems: 'center' }}>
      <Typography variant='h6' gutterBottom sx={{ color: 'info.light', mb: 0 }}>
        {title}
      </Typography>
      {help && <Help {...help} />}
    </Flex>
    <Flex sx={{ gap: 2, flexWrap: 'wrap' }}>{children}</Flex>
  </Container>
);
