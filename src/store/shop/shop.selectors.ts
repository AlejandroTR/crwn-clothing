import { createSelector } from 'reselect';

import { RootState } from '../reducer';
import { ShopState } from './shop.types';

import { Collection } from '../../models/collection';

const COLLECTION_ID_MAP: { [key: string]: number } = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
};

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop: ShopState) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (collections: Array<Collection>) => Object.keys(collections).map((key: string) => collections[+key])
)

export const selectCollection = (collectionUrlParam: string) =>
    createSelector(
        [selectCollections],
        (collections: Array<Collection>) =>
            collections.find(
                (collection: Collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
            )
    )
