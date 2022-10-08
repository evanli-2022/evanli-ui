import Box from '@mui/material/Box';
import React from 'react';

import type { BoxProps } from '@mui/material/Box';
import type { SxProps, SystemCssProperties } from '@mui/system';

export type FlexProps = BoxProps & {
  direction?: SystemCssProperties['flexDirection'];
};

export const Flex = ({ direction: flexDirection, sx = {}, ...props }: FlexProps) => (
  <Box {...props} sx={[sx, { display: 'flex', flexDirection }] as SxProps} />
);
