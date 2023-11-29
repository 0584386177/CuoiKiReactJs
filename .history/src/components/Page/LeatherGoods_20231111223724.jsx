import React, { useContext } from 'react';
import Context from '../../Context';

const LeatherGoods = () => {
    const [products,setProducts] = useContext(Context);
    console.log(products);
    return (
        <div>
            
        </div>
    );
};

export default LeatherGoods;