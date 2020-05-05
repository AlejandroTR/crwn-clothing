import { User } from '../../models/user';

export interface UserState {
    user: User | null;
}

export const SET_USER = 'SET_USER';

export interface SetUserAction {
    type: typeof SET_USER,
    payload: User | null
}

export type UserActionTypes = SetUserAction;
