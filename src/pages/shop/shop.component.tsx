import React, { Component, ReactNode } from 'react';

import SHOP_DATA from './shop.data';

import { Collection } from '../../model/collection';

import PreviewCollection from '../../components/collection-preview/collection-preview.component';

type ShopState = {
    collections: Array<Collection>
}

class ShopPage extends Component<{}, ShopState> {
    constructor(props: any) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }

    render(): ReactNode {
        const { collections }: Readonly<ShopState> = this.state;

        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...props }) => (
                        <PreviewCollection key={id} {...props} />
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;
