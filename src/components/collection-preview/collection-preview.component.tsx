import React, { FunctionComponent } from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss'

import { Collection, Item } from '../../model/collection';

const CollectionPreview: FunctionComponent<Collection> = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title}</h1>
        <div className='preview'>
            {items
                .filter((item: Item, idx: number) => idx < 4)
                .map(({ id, ...props }) => (
                    <CollectionItem key={id} {...props} />
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;
