import {
    ShopState,
    FETCH_COLLECTIONS_START,
    FETCH_COLLECTIONS_SUCCESS,
    FETCH_COLLECTIONS_FAILED,
    ShopActionTypes
} from './shop.types';

const initialState: ShopState = {
    collections: null,
    fetching: false,
    errorMessage: undefined,
};

export function shopReducer(state = initialState, action: ShopActionTypes): ShopState {
    switch (action.type) {
        case FETCH_COLLECTIONS_START:
            return {
                ...state,
                fetching: true
            }
        case FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                fetching: false,
                collections: action.payload
            }
        case FETCH_COLLECTIONS_FAILED:
            return {
                ...state,
                fetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}
