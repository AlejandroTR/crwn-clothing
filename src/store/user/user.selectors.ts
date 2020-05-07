import { createSelector } from 'reselect';

import { RootState } from '../reducer';
import { UserState } from './user.types';

const selectUser = (state: RootState) => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user: UserState) => user.user
)
