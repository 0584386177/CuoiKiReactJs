import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const HeaderLogo = styled.div`
  font-size: 15px;
`;
const HeaderMenu = styled.div`
  ul {
    display: flex;
    list-style: none;

    li {
      padding: 10px 20px;

      a {
        display: block;
        padding: 10px 20px;
        text-decoration: none;
        color: #000;
        font-weight: 500;
        font-size: 17px;
        position: relative;
      }
      a::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
        background: #000000;
        transition: all 0.3s ease;
      }
      a:hover::before {
        width: 100%;
        animation: fluent 0.5s forwards;
      }
    }

    @keyframes fluent {
      0% {
        width: 0px;
      }
      100% {
        width: 100%;
      }
    }
  }
`;
const HeaderFeatures = styled.div`
  display: flex;
  align-items: center;
  width: 340px;
  height: 100%;
`;
const HeaderSearch = styled.div`
  width: 200px;
  height: 30px;
  position: relative;

  input {
    width: 200px;
    height: 30px;
  }
  i {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;
const HeaderAccount = styled.div`
  margin: 0px 25px;
  font-size: 30px;
`;
const HeaderCart = styled.div`
    font-size: 25px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLogo>
        <h1>NHOM BAO</h1>
      </HeaderLogo>
      <HeaderMenu>
        <ul>
          <li>
            <a href="#">NEW</a>
          </li>
          <li>
            <a href="#">NỮ</a>
          </li>
          <li>
            <a href="#" onClick={handleChangePage}>NAM</a>
          </li>
          <li>
            <a href="#">GOLF</a>
          </li>
        </ul>
      </HeaderMenu>
      <HeaderFeatures>
        <HeaderSearch className="search">
          <input type="text" placeholder="search..."></input>
          <i class="fa-solid fa-magnifying-glass"></i>
        </HeaderSearch>
        <HeaderAccount className="account">
          <i class="fa-solid fa-person"></i>
        </HeaderAccount>
        <HeaderCart className="cart">
          <i class="fa-solid fa-cart-shopping"></i>
        </HeaderCart>
      </HeaderFeatures>
    </HeaderWrapper>
  );
};

export default Header;
