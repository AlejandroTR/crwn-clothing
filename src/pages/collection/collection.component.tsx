import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../store/reducer';
import { selectCollection } from '../../store/shop/shop.selectors';
import { CartItem } from '../../store/cart/cart.types';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

import { Item } from '../../models/collection';

interface RouteParams {
    collectionId: string
}

const mapState = (state: RootState, props: RouteComponentProps<RouteParams>) => ({
    collection: selectCollection(props.match.params.collectionId)(state)
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

const CollectionPage: FunctionComponent<PropsFromRedux> = ({ collection }) => (
    <div className='collection-page'>
        <h2 className='title'>{collection?.title}</h2>
        <div className='items'>
            {collection?.items.map(
                (item: Item) => <CollectionItem key={item.id} item={item as CartItem} />
            )}
        </div>
    </div>
);


export default connector(CollectionPage);
