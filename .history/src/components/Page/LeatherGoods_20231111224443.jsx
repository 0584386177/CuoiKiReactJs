import React, { useContext } from 'react';
import Context from '../../Context';

const LeatherGoods = () => {
    const products = useContext(Context);
    console.log(products);
    return (
        <div>
            <h1>LEATHER GOODS</h1>
            <LeatherItems>
                <LeartherItem>
                <ItemImg src="https://source.unsplash.com/random" alt="" />
                <h4>ECCO</h4>
                </LeartherItem>
            </LeatherItems>
        </div>
    );
};

export default LeatherGoods;