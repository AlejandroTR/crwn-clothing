import React, { FunctionComponent } from 'react';

import './collection-preview.styles.scss'

import { Collection, Item } from '../../model/collection';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview: FunctionComponent<Collection> = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title}</h1>
        <div className='preview'>
            {items
                .filter((item: Item, idx: number) => idx < 4)
                .map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;
