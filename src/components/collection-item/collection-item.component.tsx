import React, {FunctionComponent} from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';

import { CartItem, CartActionTypes } from '../../store/cart/cart.types';
import { addToCart } from '../../store/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const mapDispatch = (dispatch: Dispatch<CartActionTypes>) => ({
    addToCart: (item: CartItem) => dispatch(addToCart(item))
});

const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface CollectionItemProps extends PropsFromRedux {
    item: CartItem;
}

const CollectionItem: FunctionComponent<CollectionItemProps> = ({ item, addToCart }) => {
    const {  name, price, imageUrl } = item;

    return (
        <div className='collection-item'>
            <div className='image' style={{backgroundImage: `url(${imageUrl}`}} />
            <div className='collection-footer'>
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted={true} onClick={() => addToCart(item)}>
                Add to cart
            </CustomButton>
        </div>
    );
}

export default connector(CollectionItem);
