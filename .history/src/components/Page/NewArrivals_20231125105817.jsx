import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios, {isCancel, AxiosError} from 'axios';
const ArrivalsWrapper = styled.div`
  width: 100%;
  height: 100%;
  
`;

const ArrivalsSmall = styled.div`
  display: grid;
  grid-template-columns : 1fr 1fr 1fr 1fr;
`;

const ArrivalsItem = styled.div`
  width: 315px;
  height: 405px;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
 &:hover{
  box-shadow: 1px 1px 3px 2px rgba(35, 38, 46,0.2);
 }
`;
const ItemImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  flex-shrink: 0;
`;
const ArrivalsLarge = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10rem;
`
const LargeItem = styled.div`
  width: 300px;
  height: 400px;
  padding: 20px;
 &:hover{
  box-shadow: 1px 1px 3px 2px rgba(35, 38, 46,0.2);
 }
`
const LargeImg = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  flex-shrink: 0;
`
const api = "http://localhost:3000/products";
const NewArrivals = () => {
  const [products, setProducts] = useState([null]);
  useEffect(() => {
   axios.get
    fetchData();
  }, []);
  return (
    <ArrivalsWrapper>
      {/* <ArrivalsTitle>NEW ARRIVALS</ArrivalsTitle> */}

      <ArrivalsSmall>
      {/* sử dụng slice để tạo ra 4 item từ  0 -> <4 */}
        {products.slice(0,4).map((item, index) => {
            return (
              <ArrivalsItem>
                <ItemImg src={item?.image} alt="" key={index} />
                <h4>{item?.name}</h4>
              </ArrivalsItem>
            );
          })}
      </ArrivalsSmall>
      
      <ArrivalsLarge>
      {
        products.slice(0,2).map((item,index)=>{
          return(
            <LargeItem>
          <LargeImg src={item?.image} alt=""/>
          <h5>{item?.name}</h5>
          <button>MUA NGAY</button>
        </LargeItem>
          )
        })
      }
       
     {/* <LargeItem>
          <LargeImg src="https://source.unsplash.com/random" alt=""/>
          <h5>ECCO</h5>
          <button>MUA NGAY</button>
        </LargeItem> */}
      </ArrivalsLarge>
    </ArrivalsWrapper>
  );
};

export default NewArrivals;
