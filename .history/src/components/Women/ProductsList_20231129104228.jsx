import React, { useContext } from 'react';
import Context from '../../Context';
import styled from 'styled-components';

const List = styled.div`
 display: grid;
  grid-template-columns: repeat(4, 1fr);
`
const Item = styled.div`
    
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