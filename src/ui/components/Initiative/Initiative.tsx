import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import React from 'react';

import { Flex } from '~/ui/layouts/Flex';

import type { InitiativeProps } from './Initiative.types';

export const Initiative = ({ initiative }: InitiativeProps) => (
  <Card sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
    <CardHeader
      title={initiative.title}
      titleTypographyProps={{ align: 'center' }}
      sx={{
        backgroundColor: theme =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
      }}
    />
    <CardContent sx={{ flex: 1 }}>
      <Flex
        direction='column'
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
        }}>
        <Typography component='p' variant='subtitle1' align='center'>
          {initiative.description}
        </Typography>
        <LinearProgress
          variant='determinate'
          value={(initiative.current * 100) / initiative.limit}
          sx={{ width: '100%' }}
        />
      </Flex>
    </CardContent>
    <CardActions>
      <Button
        fullWidth
        variant='contained'
        onClick={() => alert('Здесь будет переход к инициативе')}>
        Принять участие
      </Button>
    </CardActions>
  </Card>
);
