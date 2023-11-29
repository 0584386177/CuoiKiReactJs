import React, { useContext } from 'react';
import Context from '../../Context';
import styled from 'styled-components';

const List = styled.div`
 display: grid;
  grid-template-columns: repeat(4, 1fr);
`
const Item = styled.div`
     width: 315px;
  height: 405px;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  &:hover {
    box-shadow: 1px 1px 3px 2px rgba(35, 38, 46, 0.2);
  }
`
const ItemImg = styled.img`

`
const ProductsList = () => {
    const product = useContext(Context);
    console.log(product);
    return (
        <div>
            <List>
                <Item>
                <ItemImg src= "rando" alt="" />
                <h4>{}</h4>
                </Item>
            </List>
        </div>
    );
};

export default ProductsList;