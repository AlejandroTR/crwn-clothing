import React, { FunctionComponent } from 'react';

import { CartItem } from '../../store/cart/cart.types';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss'

import { Collection, Item } from '../../models/collection';

const CollectionPreview: FunctionComponent<Collection> = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title}</h1>
        <div className='preview'>
            {items
                .filter((item: Item, idx: number) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item as CartItem} />
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;
