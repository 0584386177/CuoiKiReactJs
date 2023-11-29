import React from 'react';
import styled from 'styled-components';
const ProductsItem = () => {
    return (
        <div>
             <ProductsItem key={index}>
                <ItemImg src={item?.image} alt="" />
                <h4>{item?.name}</h4>
              </ProductsItem>
        </div>
    );
};

export default ProductsItem;