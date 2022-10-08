import React from 'react';

import { Flex } from '~/ui/layouts/Flex';
import type { FlexProps } from '~/ui/layouts/Flex';

export type MainProps = Pick<FlexProps, 'children'>;

export const Main = ({ children }: MainProps) => (
  <Flex component='main' direction='column' sx={{ width: '100vw', minWidth: 360, height: '100vh' }}>
    {children}
  </Flex>
);
