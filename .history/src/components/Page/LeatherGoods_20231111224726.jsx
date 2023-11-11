import React, { useContext } from 'react';
import Context from '../../Context';
import styled from 'styled-components';

const LeatherWrapper = styled.div`
  width: 100%;
  height: 100%;
`
const LeatherTitle = styled.h1`
    font-size: 30px;
`
const LeatherItems = styled.div`
      display: grid;
  grid-template-columns : repeat(4,1fr);
`
const LeartherItem = styled.div`
 width: 315px;
  height: 405px;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
 &:hover{
  box-shadow: 1px 1px 3px 2px rgba(35, 38, 46,0.2);
 }
`

 const ItemImg = styled.div
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