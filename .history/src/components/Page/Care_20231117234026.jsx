import React from "react";
import styled from "styled-components";
const CareWrapper = styled.div`
    width: 100%;
    max-width: 100%;
    text-align: center;
`
const CareTitle = styled.h1`

`
const CareInfor = styled.h1
const Care = () => {
  return (
    <CareWrapper>
      <CareTitle>CÓ THỂ BẠN CHƯA BIẾT</CareTitle>
      <div>
        <div>
            <img src="https://source.unsplash.com/random" alt=""/>
        </div>
        <div>
          <div> <img src="https://source.unsplash.com/random" alt=""/></div>
          <div> <img src="https://source.unsplash.com/random" alt=""/></div>
          <div> <img src="https://source.unsplash.com/random" alt=""/></div>
          <div> <img src="https://source.unsplash.com/random" alt=""/></div>
        </div>
      </div>
    </CareWrapper>
  );
};

export default Care;
