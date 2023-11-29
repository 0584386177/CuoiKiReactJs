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
    const dataCare = {
        "imgMain" : "https://file.hstatic.net/1000143422/file/banner-ctbqt_hp_750x750px_1_682bca61600340768a685d0b7defc743.jpg",
        "imgSub1" : "https://file.hstatic.net/1000143422/file/banner-ctbqt_hp_750x750px_2_4469fa2c094d4ad3838cb7acfb848f51.jpg",
        "imgSub2" : "https://file.hstatic.net/1000143422/file/module_feedback_640x640_small_2_eff674f6fc01417ca1ce8ec3bbd2573c.jpg",
        "imgSub3" : "https://file.hstatic.net/1000143422/file/module_feedback_640x640_small_3_69221a095d6b4504be9774b6e428be63.jpg",
        "imgSub4" : "https://file.hstatic.net/1000143422/file/module_feedback_640x640_small_3_copy_b4671d33c950479ba97219d841156fef.jpg"
    }
  return (
    <CareWrapper>
      <CareTitle>CÓ THỂ BẠN CHƯA BIẾT</CareTitle>
      <CareInfor>
        <InforLeft>
            <img src={dataCare.} alt=""/>
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
