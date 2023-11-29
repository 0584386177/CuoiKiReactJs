import React, { useContext } from 'react';
import Context from '../../Context';
import styled from 'styled-components';

const List = styled.div`
 display: grid;
  grid-template-columns: repeat(4, 1fr);
`
const Item = styled.div`
     width: 315px;
  height: 405px;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  &:hover {
    box-shadow: 1px 1px 3px 2px rgba(35, 38, 46, 0.2);
  }
`
const ItemImg = styled.img`

`
const ProductsList = () => {
    const product = useContext(Context);
    console.log(product);
    return (
        <div>
           {products
          // đổi thứ tự filter => slice => map
          // nếu để slice trước sẽ cắt đi 4 phần tử đầu tiên
          // 4 phần tử đầu tiên kh có type === bag thì kh render nên phải lọc trư
          .filter((item) => item?.type === "bag")
          .slice(0, 4)
          .map((item, index) => {
            return (
              <LeartherItem key={index}>
                <ItemImg src={item?.image} alt="" />
                <h4>{item?.name}</h4>
              </LeartherItem>
            );
          })}
        </div>
    );
};

export default ProductsList;