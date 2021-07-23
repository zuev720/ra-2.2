import React from 'react';
import PropTypes from 'prop-types';

export function IconSwitch(props) {
    const type = props.icon;
    const nameClass = `icon-${type}`;

    return (
        <div className={'IconSwitch'}>
            <button className={nameClass} onClick={props.onClick}/>
        </div>
    )
}

IconSwitch.protoTypes = {
    type: PropTypes.string.isRequired,
};
