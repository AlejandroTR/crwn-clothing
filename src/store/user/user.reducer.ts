import { UserActionTypes, UserState, SET_USER } from './user.types';

const initialState: UserState  = { user: null };

export function userReducer(state = initialState, action: UserActionTypes): UserState {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}
