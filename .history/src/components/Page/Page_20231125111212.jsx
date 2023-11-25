import React from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import NewArrivals from './NewArrivals';
import LeatherGoods from './LeatherGoods';
import Care from './Care';
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
        <LeatherGoods/>
        <Care/>
        </PageWrapper>
    );
};

export default Page;