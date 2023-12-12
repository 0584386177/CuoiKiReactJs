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
  margin:20px;
  padding: 20px;
  &:hover {
    box-shadow: 1px 1px 3px 2px rgba(35, 38, 46, 0.2);
    cursor: pointer;
  }
`
const ItemImg = styled.img`
 width: 100%;
  height: 300px;
  object-fit: cover;
  flex-shrink: 0;
`
const ProductsList = () => {
    const product = useContext(Context);
    const [filteredProducts, setFilteredProducts] = useState( []);

    console.log(product);
    return (
        <div>
            <List>
                {
          // đổi thứ tự filter => slice => map
          // nếu để slice trước sẽ cắt đi 4 phần tử đầu tiên
          // 4 phần tử đầu tiên kh có type === bag thì kh render nên phải lọc trư
          product.map((item, index) => {
            return (
              <Item key={index}>
                <ItemImg src={item?.image} alt="" />
                <h4>{item?.name}</h4>
              </Item>
            );
          })}
            </List>
        </div>
    );
};

export default ProductsList;