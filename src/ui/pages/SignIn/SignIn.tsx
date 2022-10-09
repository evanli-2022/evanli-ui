import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '~/data/entities/auth';
import type { AppState } from '~/data/store';
import { Content } from '~/ui/layouts/Content';
import { Flex } from '~/ui/layouts/Flex';
import { Main } from '~/ui/layouts/Main';

import welcome from './welcome.png';

export const PageSignIn = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: AppState) => state.auth.loading);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username') as string;
    const password = data.get('password') as string;

    if (username && password) {
      dispatch(actions.signIn({ username, password }));
    }
  };

  const renderLoading = () => (
    <Flex sx={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CircularProgress />
    </Flex>
  );

  const renderForm = () => (
    <Flex
      direction='column'
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
      }}>
      <TextField
        margin='normal'
        required
        fullWidth
        id='username'
        label='Username'
        name='username'
        autoFocus
      />
      <TextField
        margin='normal'
        required
        fullWidth
        name='password'
        label='Password'
        type='password'
        id='password'
        autoComplete='current-password'
      />
    </Flex>
  );

  return (
    <Main>
      <Content sx={{ flex: 1 }}>
        <Grid container sx={{ flex: 1, alignItems: 'center' }}>
          <Grid item xs={7}>
            <img src={welcome} alt='' width='100%' />
          </Grid>
          <Grid item xs={4}>
            <Box component='form' noValidate onSubmit={handleSubmit}>
              <Card sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <CardHeader title='Авторизация' />
                <CardContent sx={{ flex: 1 }}>
                  {loading ? renderLoading() : renderForm()}
                </CardContent>
                <CardActions sx={{ p: 2 }}>
                  <Button
                    type='submit'
                    disabled={loading}
                    fullWidth
                    variant='contained'
                    sx={{ textTransform: 'capitalize' }}>
                    Войти
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Content>
    </Main>
  );
};
