import { SET_USER, UserActionTypes } from './user.types';

import { User } from '../../models/user';

export function setUser(user: User | null): UserActionTypes {
    return {
        type: SET_USER,
        payload: user
    }
}
