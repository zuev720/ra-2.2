import React from 'react';
import {ShopItem} from './ShopItem/ShopItem';
import PropTypes from 'prop-types';

export function CardsView(props) {
    const products = props.products;

    return (
        <div className={'CardsView'}>
            {
                products.map((elem) => <ShopItem key={elem.img} product={elem} />)
            }
        </div>
    )
}

CardsView.protoTypes = {
    products: PropTypes.array.isRequired,
};
