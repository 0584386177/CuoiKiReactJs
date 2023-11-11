import React from 'react';
import Header from './Header';
import styled from 'styled-components';
import Slider from './Slider';
import NewArrivals from './NewArrivals';
const PageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    max-width:1980px;
    margin: 0 auto;
    
`
const Page = () => {
    return (
        <PageWrapper>
        <Header/>
        <Slider/>
        <NewArrivals/>
        <Lea
        </PageWrapper>
    );
};

export default Page;