import { createSelector } from 'reselect';

import { RootState } from '../reducer';
import { ShopState } from './shop.types';

import { Collections } from '../../models/collection';

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop: ShopState) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (collections: Collections | null) =>
        collections ? Object.keys(collections).map((key: string) => collections[key]) : []
)

export const selectCollection = (collectionUrlParam: string) =>
    createSelector(
        [selectCollections],
        (collections: Collections | null) => (collections ? collections[collectionUrlParam] : null)
    )

export const selectCollectionFetching = createSelector(
    [selectShop],
    (shop: ShopState) => shop.fetching
)
