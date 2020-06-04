import React, {Component } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom'
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';

import { Unsubscribe } from 'firebase';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { UpdateCollectionsAction } from '../../store/shop/shop.types';
import { updateCollections } from '../../store/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { Collections } from '../../models/collection';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const mapDispatch = (dispatch: Dispatch<UpdateCollectionsAction>) => ({
    updateCollections: (collectionsMap: Collections) => dispatch(updateCollections(collectionsMap))
});

const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & RouteComponentProps

type ShopPageState = {
    loading: boolean;
}

class ShopPage extends Component<Props, ShopPageState> {
    constructor(props: any) {
        super(props);

        this.state = {
            loading: true
        };
    }

    unsubscribeFromSnapshot: Unsubscribe | null = null;

    componentDidMount(): void {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false })
        })
    }

    render() {
        const { match } = this.props
        const { loading } = this.state;

        return (
            <div className='shop-page'>
                <Route exact
                       path={`${match.path}`}
                       render={props => (
                           <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
                       )}
                />
                <Route path={`${match.path}/:collectionId`}
                       render={props => (
                           <CollectionPageWithSpinner isLoading={loading} {...props} />
                       )}
                />
            </div>
        )
    }
}

export default connector(ShopPage);
