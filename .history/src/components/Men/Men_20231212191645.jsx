import React from 'react';

const Men = () => {
    return (
        <div>
           <WomenWrapper>
            <WomenImage>
            <WomenImg src='https://file.hstatic.net/1000143422/collection/banner_wlp_1600x400_57f904dca4544bdba60544e6b6eb655a_master.jpg'/>
            </WomenImage>
            <WomenTitle>Women</WomenTitle>
            <Navigation/>
            <Filter/>
            <ProductsList/>
        </WomenWrapper>
        </div>
    );
};

export default Men;