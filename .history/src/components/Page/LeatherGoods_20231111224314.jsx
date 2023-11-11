import React, { useContext } from 'react';
import Context from '../../Context';

const LeatherGoods = () => {
    const products = useContext(Context);
    console.log(products);
    return (
        <div>
            <h1>LEATHER GOODS</h1>
            <div></d>
        </div>
    );
};

export default LeatherGoods;