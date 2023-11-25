import React from 'react';
import styled from 'styled-components';

const WomenWrapper = styled.div`
    width:100%;
    height: 100%;
`
const WomenImg = styled.img`
    margin: 0 auto;
`
const Women = () => {
    return (
        <div>
            <WomenImg src='https://file.hstatic.net/1000143422/collection/banner_wlp_1600x400_57f904dca4544bdba60544e6b6eb655a_master.jpg'/>
        </div>
    );
};

export default Women;