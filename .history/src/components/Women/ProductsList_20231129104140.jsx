import React, { useContext } from 'react';
import Context from '../../Context';

const ProductsList = () => {
    const product = useContext(Context);
    console.log(product);
    return (
        <div>
            <List>
                <Item>
                    
                </Item>
            </List>
        </div>
    );
};

export default ProductsList;