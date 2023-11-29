import React from "react";
import styled from "styled-components";
const CareWrapper = styled.div`
    width: 100%;
    max-width: 100%;
    text-align: center;
`
const CareTitle = styled.h1`

`
const CareInfor = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`
const InforLeft = styled.div`
    width: 700px;
    height: 710px;
    && img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        flex-shrink: 0;
        cursor: pointer;
    }
`
const InforRight = styled.div`
     width: 700px;
    height: 700px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    && img {
       width: 330px;
       height: 345px;
       object-fit: cover;
       flex-shrink:0;
       cursor: pointer;

    }
`
const Care = () => {
  return (
    <CareWrapper>
      <CareTitle>CÓ THỂ BẠN CHƯA BIẾT</CareTitle>
      <CareInfor>
        <InforLeft>
            <img src="https://source.unsplash.com/random" alt=""/>
        </InforLeft>
        <InforRight>
           <img src="https://source.unsplash.com/random" alt=""/>
           <img src="https://source.unsplash.com/random" alt=""/>
           <img src="https://source.unsplash.com/random" alt=""/>
          <img src="https://source.unsplash.com/random" alt=""/>
        </InforRight>
      </CareInfor>
    </CareWrapper>
  );
};

export default Care;
