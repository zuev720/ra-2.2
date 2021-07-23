import React, {useState} from 'react';
import {IconSwitch} from './IconSwitch/IconSwitch';
import {CardsView} from './CardsView/CardsView';
import {products} from './products/products';
import {ListView} from './ListView/ListView';
import PropTypes from 'prop-types';

export default function Store() {
    let [state, setState] = useState('module');
    const onButtonClick = () => {
        setState(state = (state === 'module') ? 'list' : 'module');
    }
    return (<div className="Store">
        <IconSwitch icon={(state === 'module') ? 'list' : 'module'} onClick={onButtonClick}/>
        {(state === 'module') ? <CardsView products={products} /> : <ListView products={products} />}
    </div>);
}

Store.protoTypes = {
    state: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func.isRequired,
};
