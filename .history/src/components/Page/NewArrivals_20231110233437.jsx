import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ArrivalsWrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  flex-direction : column
// const ArrivalsTitle = styled.h1`
//   padding: 20px 0px;
// `;
const ArrivalsSmall = styled.div`
  display: flex;
`;

const ArrivalsItem = styled.div`
  width: 315px;
  height: 405px;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ItemImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  flex-shrink: 0;
`;
const api = "http://localhost:3000/products";
const NewArrivals = () => {
  const [products, setProducts] = useState([null]);
  console.log(products);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(api);
      const data = await response.json();
      return setProducts(data);
    };
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
      
      <div>
        <div>
          <img src="https://source.unsplash.com/random" alt=""/>
          <h5>ECCO</h5>
          <button>MUA NGAY</button>
        </div>
        <div>
          <img src="https://source.unsplash.com/random" alt=""/>
          <h5>ECCO</h5>
          <button>MUA NGAY</button>
        </div>
      </div>
    </ArrivalsWrapper>
  );
};

export default NewArrivals;
