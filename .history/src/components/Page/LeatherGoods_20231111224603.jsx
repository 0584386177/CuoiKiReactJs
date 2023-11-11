import React, { useContext } from 'react';
import Context from '../../Context';
import styled from 'styled-components';

const LeatherWrapper = styled.div`
  width: 100%;
  height: 100%;
`
const LeatherTitle = styled.h1`
    
`
const LeatherGoods = () => {
    const products = useContext(Context);
    console.log(products);
    return (
        <LeatherWrapper>
            <LeatherTitle>LEATHER GOODS</LeatherTitle>
            <LeatherItems>
                <LeartherItem>
                <ItemImg src="https://source.unsplash.com/random" alt="" />
                <h4>ECCO</h4>
                </LeartherItem>
                <LeartherItem>
                <ItemImg src="https://source.unsplash.com/random" alt="" />
                <h4>ECCO</h4>
                </LeartherItem>
                <LeartherItem>
                <ItemImg src="https://source.unsplash.com/random" alt="" />
                <h4>ECCO</h4>
                </LeartherItem>
                <LeartherItem>
                <ItemImg src="https://source.unsplash.com/random" alt="" />
                <h4>ECCO</h4>
                </LeartherItem>
            </LeatherItems>
        </LeatherWrapper>
    );
};

export default LeatherGoods;