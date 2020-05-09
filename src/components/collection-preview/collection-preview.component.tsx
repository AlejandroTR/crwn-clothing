import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { CartItem } from '../../store/cart/cart.types';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss'

import { Collection, Item } from '../../models/collection';

const CollectionPreview: FunctionComponent<Collection> = ({ title, items, routeName }) => (
    <div className='collection-preview'>
        <Link className='collection-link' to={`shop/${routeName}`}>
            <h1 className='title'>{title}</h1>
        </Link>
        <div className='preview'>
            {items
                .filter((item: Item, idx: number) => idx < 4)
                .map((item: Item) => (
                    <CollectionItem key={item.id} item={item as CartItem} />
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;
