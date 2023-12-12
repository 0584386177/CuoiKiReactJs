import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Filter from './Filter'
import ProductsList from './ProductsList';
const WomenWrapper = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const WomenImage = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    `
    const WomenImg = styled.img`
        
    `
const WomenTitle = styled.h1`
    font-weight: 500;
`
const Women = () => {
    return (
        <WomenWrapper>
            <WomenImage>
            <WomenImg src='https://file.hstatic.net/1000143422/collection/banner_wlp_1600x400_57f904dca4544bdba60544e6b6eb655a_master.jpg'/>
            </WomenImage>
            <WomenTitle>Wmen</WomenTitle>
            <Navigation/>
            <Filter/>
            <ProductsList/>
        </WomenWrapper>
    );
};

export default Women;