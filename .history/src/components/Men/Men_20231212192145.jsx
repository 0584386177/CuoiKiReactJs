import React from 'react';
import styled from 'styled-components';
import Filter from './Filter';
import Navigation from './Navigation';
const MenWrapper = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const MenImage = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    `
    const MenImg = styled.img`
        
    `
const MenTitle = styled.h1`
    font-weight: 500;
`
const Men = () => {
    return (
        <div>
           <MenWrapper>
            <MenImage>
            <MenImg src='https://file.hstatic.net/1000143422/collection/banner_wlp_1600x400_57f904dca4544bdba60544e6b6eb655a_master.jpg'/>
            </MenImage>
            <MenTitle>Women</MenTitle>
            <Navigation/>
            <Filter/>
            <ProductsList/>
         </MenWrapper>
                </div>
    );
};

export default Men;  