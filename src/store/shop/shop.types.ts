import { Collections } from '../../models/collection';

export interface ShopState {
    collections: Collections | null
}

export const UPDATE_COLLECTIONS = 'UPDATE_COLLECTIONS';

export interface UpdateCollectionsAction {
    type: typeof UPDATE_COLLECTIONS,
    payload: Collections
}

export type ShopActionTypes = UpdateCollectionsAction;
