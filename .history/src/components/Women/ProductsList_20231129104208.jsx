import React, { useContext } from 'react';
import Context from '../../Context';
import styled from 'styled-components';

const List = styled.div`

`
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