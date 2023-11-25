import React, { useState } from "react";
import styled from "styled-components";

const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const SliderButton = styled.div`
  width: 100%;
  position: absolute;
  top: 29%;
  left: 0;
  transform: translateY(-29%);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SliderNext = styled.button`
  width: 50px;
  height: 50px;
  color: white;
  background-color: rgba(76, 78, 80, 0.5);
  outline: none;
  border: none;
  margin-right: 5px;
  font-size: 20px;
  cursor: pointer;
`;
const SliderPre = styled.button`
  width: 50px;
  height: 50px;
  color: white;
  background-color: rgba(76, 78, 80, 0.5);
  outline: none;
  border: none;
  margin-left: 5px;
  font-size: 20px;
  cursor: pointer;
`;
const Slider = () => {
  const arrayImage = [
    "https://file.hstatic.net/1000143422/file/desktop_banner_slider_1920x600_2link_ult-trn_4b3327ceb7184530ae9783ad00500c46.jpg",
    "https://file.hstatic.net/1000143422/file/desktop_banner_slider_1920x600_2link_street_9e990a78d04646e3ae0fe35feb29b499.jpg",
    "https://file.hstatic.net/1000143422/file/hero-desk_c4-w-1920x720_0cadeff9488b4baab4c417601e60ba7a.jpg",
    "https://file.hstatic.net/1000143422/file/ec-desktop_banner_1920x600px_062fbb7c60db49ada98de87f9f03862c.png",
    "https://file.hstatic.net/1000143422/file/desktop_banner_slider_1920x600_2link_soft_dd3b9719fd3e4818bb108c020a9af7a2.jpg",
  ];

  const [ImageIndexCurrent, setImageIndexCurrent] = useState(0);
  const handleClickNext = () => {
    setImageIndexCurrent(ImageIndexCurrent + 1);
    if (ImageIndexCurrent === 4) setImageIndexCurrent(0);
  };
  const handleClickPre = () => {
    setImageIndexCurrent(ImageIndexCurrent - 1);
    if (ImageIndexCurrent === 0) setImageIndexCurrent(4);
  };
  const interval = setI
  return (
    <SliderWrapper>
      <div className="image">
        <img src={arrayImage[ImageIndexCurrent]} alt=""></img>
      </div>
      <SliderButton>
        <SliderPre onClick={handleClickPre}>
          <i class="fa-solid fa-arrow-left"></i>
        </SliderPre>
        <SliderNext onClick={handleClickNext}>
          <i class="fa-solid fa-arrow-right"></i>
        </SliderNext>
      </SliderButton>
      <h1>NEW ARRIVALS</h1>
    </SliderWrapper>
  );
};

export default Slider;
