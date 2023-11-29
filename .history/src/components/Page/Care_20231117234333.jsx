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
    align-items: center;
`
const InforLeft = styled.div`
    width: 500px;
    height: 600px;
`
const InforRight = styled.div`

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
          <div> <img src="https://source.unsplash.com/random" alt=""/></div>
          <div> <img src="https://source.unsplash.com/random" alt=""/></div>
          <div> <img src="https://source.unsplash.com/random" alt=""/></div>
          <div> <img src="https://source.unsplash.com/random" alt=""/></div>
        </InforRight>
      </CareInfor>
    </CareWrapper>
  );
};

export default Care;
