import React, { FunctionComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { RootState } from '../../store/reducer';
import { selectCollectionsForPreview } from '../../store/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

import { Collection } from '../../models/collection';

interface DesiredSelection {
    collections: Array<Collection>
}

const mapState = createStructuredSelector<RootState, DesiredSelection>({
    collections: selectCollectionsForPreview
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

const CollectionsOverview: FunctionComponent<PropsFromRedux> = ({ collections }) => (
    <div className='collections-overview'>
        {collections.map(({ id, ...props }) => (
            <CollectionPreview key={id} {...props} />
        ))}
    </div>
);

export default connector(CollectionsOverview);
