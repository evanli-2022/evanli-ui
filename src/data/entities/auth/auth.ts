import { createSlice } from '@reduxjs/toolkit';

import type { AuthState, Requests } from './auth.types';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: AuthState = {
  error: '',
  loading: false,
};

export const { actions, reducer } = createSlice({
  name: '@@AUTH',
  initialState,
  reducers: {
    setError(state, action: PayloadAction<AuthState['error']>) {
      state.error = action.payload;
    },
    setLoading(state, { payload }: PayloadAction<AuthState['loading']>) {
      state.loading = payload;
    },
    signIn: (_, __: PayloadAction<Requests.Auth>) => {},
    signOut: () => {},
    checkToken: () => {},
  },
});
