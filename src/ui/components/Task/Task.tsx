import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import React from 'react';

import { formatNumber } from '~/helpers/formats/number';
import { Flex } from '~/ui/layouts/Flex';

import { useHandlers } from './Task.handlers';

import type { TaskProps } from './Task.types';

const buttonText = {
  learning: 'Пройти обучение',
  profile: 'Перейти в профиль',
  test: 'Пройти тест',
};

export const Task = ({ task }: TaskProps) => {
  const handlers = useHandlers();

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <CardHeader
        title={task.title}
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
          <Typography
            component='h2'
            variant='h4'
            color='text.primary'
            title={task.price.toString()}>
            $ {formatNumber(task.price)}
          </Typography>
          <Typography component='p' variant='subtitle1' align='center'>
            {task.description}
          </Typography>
        </Flex>
      </CardContent>
      <CardActions>
        <Button fullWidth variant='contained' onClick={handlers[task.type]}>
          {buttonText[task.type]}
        </Button>
      </CardActions>
    </Card>
  );
};
