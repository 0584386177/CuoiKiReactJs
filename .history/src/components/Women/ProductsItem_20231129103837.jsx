import React from 'react';
import styled from 'styled-components';
const ProductsItem = () => {
    return (
        <div>
             <Item>
                <ItemImg src={item?.image} alt="" />
                <h4>{item?.name}</h4>
              </Item>
        </div>
    );
};

export default ProductsItem;