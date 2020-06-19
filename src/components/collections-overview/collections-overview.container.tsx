import { ComponentType } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { RootState } from '../../store/reducer';
import { selectCollectionFetching } from '../../store/shop/shop.selectors';

import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

interface DesiredSelection {
    isLoading: boolean
}

const mapState = createStructuredSelector<RootState, DesiredSelection>({
    isLoading: selectCollectionFetching
});

const CollectionOverviewContainer = compose<ComponentType>(
    connect(mapState),
    WithSpinner
)(CollectionsOverview);

export default CollectionOverviewContainer;
