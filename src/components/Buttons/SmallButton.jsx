import React from 'react';

const SmallButton = ({name}) => {
    return (
        <button className='btn btn-sm rounded-lg border border-emerald-600'>{name}</button>
    );
};

export default SmallButton;