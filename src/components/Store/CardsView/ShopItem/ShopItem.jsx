import React from 'react';
import PropTypes from 'prop-types';


export function ShopItem(props) {
    const product = props.product;

    return (
        <div className={'ShopItem'}>
            <h4 className={'product-name'}>{product.name}</h4>
            <span className={'product-color'}>{product.color}</span>
            <img className={'product-image'} src={product.img} alt={product.name}/>
            <div className={'priceBlock'}>
                <span className={'product-price'}>{'$' + product.price}</span>
                <button className={'buyButton'}>add to cart</button>
            </div>
        </div>
    )
}

ShopItem.protoTypes = {
    product: PropTypes.object.isRequired,
};
