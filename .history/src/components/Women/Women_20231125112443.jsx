import React from 'react';
import styled from 'styled-components';

const WomenWrapper = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const WomenImg = styled.img`
    align-items: center;
`
const WomenTitle = styled.h1`

`
const Women = () => {
    return (
        <WomenWrapper>
            <WomenImg src='https://file.hstatic.net/1000143422/collection/banner_wlp_1600x400_57f904dca4544bdba60544e6b6eb655a_master.jpg'/>
            <WomenTitle>Women</WomenTitle>
        </WomenWrapper>
    );
};

export default Women;