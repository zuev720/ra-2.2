import React from 'react';
import {ShopItem} from '../CardsView/ShopItem/ShopItem';
import PropTypes from 'prop-types';

export function ListView(props) {
    const products = props.products;

    return (
        <div className={'ListView'}>
            {
                products.map((elem) => <ShopItem key={elem.img} product={elem} />)
            }
        </div>
    )
}

ListView.protoTypes = {
    products: PropTypes.array.isRequired,
};
