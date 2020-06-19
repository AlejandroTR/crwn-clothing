import React, {Component } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom'
import { connect, ConnectedProps } from 'react-redux';

import { ThunkDispatch } from 'redux-thunk';

import { RootState } from '../../store/reducer';
import { ShopActionTypes } from '../../store/shop/shop.types';
import { fetchCollectionsStartAsync } from '../../store/shop/shop.actions';

import CollectionOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

const mapDispatch = (dispatch: ThunkDispatch<RootState, undefined, ShopActionTypes>) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & RouteComponentProps;

class ShopPage extends Component<Props> {
    componentDidMount(): void {
        const { fetchCollectionsStartAsync } = this.props;

        fetchCollectionsStartAsync();
    }

    render() {
        const { match } = this.props

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
            </div>
        )
    }
}

export default connector(ShopPage);
