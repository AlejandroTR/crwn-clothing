import { User } from '../../models/user';
import { SET_USER, UserActionTypes } from './types';

export function setUser(user: User | null): UserActionTypes {
    return {
        type: SET_USER,
        payload: user
    }
}
