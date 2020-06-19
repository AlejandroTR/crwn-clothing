import { ComponentType } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { RootState } from '../../store/reducer';
import { selectCollectionFetching } from '../../store/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

interface DesiredSelection {
    isLoading: boolean
}

const mapState = createStructuredSelector<RootState, DesiredSelection>({
    isLoading: selectCollectionFetching
});

const CollectionPageContainer  = compose<ComponentType>(
    connect(mapState),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
