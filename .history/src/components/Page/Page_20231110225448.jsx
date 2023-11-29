import React from 'react';
import Header from './Header';
import styled from 'styled-components';
import Slider from './Slider';
const PageWrapper = styled.div`
    min-width: 100%;
    height: 100vh;
    
`
const Page = () => {
    return (
        <PageWrapper>
        <Header/>
        <Slider/>
        </PageWrapper>
    );
};

export default Page;