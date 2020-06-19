import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import {
    FETCH_COLLECTIONS_START,
    FETCH_COLLECTIONS_SUCCESS,
    FETCH_COLLECTIONS_FAILED,
    ShopActionTypes
} from './shop.types';
import { Collections } from '../../models/collection';
import {RootState} from "../reducer";

export function fetchCollectionsStart(): ShopActionTypes {
    return {
        type: FETCH_COLLECTIONS_START
    }
}

export function fetchCollectionsSuccess(collectionsMap: Collections): ShopActionTypes {
    return {
        type: FETCH_COLLECTIONS_SUCCESS,
        payload: collectionsMap
    }
}

export function fetchCollectionsFailed(errorMessage: string): ShopActionTypes {
    return {
        type: FETCH_COLLECTIONS_FAILED,
        payload: errorMessage
    }
}

type ThunkResult<Result> = ThunkAction<Result, RootState, undefined, ShopActionTypes>;

export function fetchCollectionsStartAsync(): ThunkResult<void> {
    return (dispatch: ThunkDispatch<RootState, undefined, ShopActionTypes>) => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
        }).catch(error => dispatch(fetchCollectionsFailed(error.message)));
    }
}
