import Grid from '@mui/material/Grid';
import React from 'react';

import { TopTasks } from '~/ui/components/TopTasks';

export const PageHome = () => (
  <Grid container spacing={5}>
    <Grid item xs={12} sm={6}>
      <TopTasks />
    </Grid>
  </Grid>
);
