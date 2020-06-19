import { Collections } from '../../models/collection';

export interface ShopState {
    collections: Collections | null,
    fetching: boolean,
    errorMessage: undefined | string
}

export const FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START';
export const FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS';
export const FETCH_COLLECTIONS_FAILED = 'FETCH_COLLECTIONS_FAILED';

export interface FetchCollectionsStartAction {
    type: typeof FETCH_COLLECTIONS_START,
}

export interface FetchCollectionsSuccessAction {
    type: typeof FETCH_COLLECTIONS_SUCCESS,
    payload: Collections
}

export interface FetchCollectionsFailedAction {
    type: typeof FETCH_COLLECTIONS_FAILED,
    payload: string
}

export type ShopActionTypes =
    FetchCollectionsStartAction
    | FetchCollectionsSuccessAction
    | FetchCollectionsFailedAction
