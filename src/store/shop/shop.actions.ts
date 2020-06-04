import { UPDATE_COLLECTIONS, ShopActionTypes } from './shop.types';

import { Collections } from '../../models/collection';

export function updateCollections(collectionsMap: Collections): ShopActionTypes {
    return {
        type: UPDATE_COLLECTIONS,
        payload: collectionsMap
    }
}
