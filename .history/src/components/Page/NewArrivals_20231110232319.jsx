import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ArrivalsWrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
`;
// const ArrivalsTitle = styled.h1`
//   padding: 20px 0px;
// `;
const ArrivalsItems = styled.div`
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

      <ArrivalsItems>
        {products.map((item, index) => {
          return (
            <ArrivalsItem key={index}>
              <ItemImg src={item?.imageSub} alt="" />
              <h4>{item?.name}</h4>
            </ArrivalsItem>
          );
        })}
      </ArrivalsItems>
    </ArrivalsWrapper>
  );
};

export default NewArrivals;