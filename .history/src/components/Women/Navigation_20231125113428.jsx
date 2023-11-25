import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.div`
    width: 1600px;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 20px;    
`
const NavButton = styled.button`
    background-color: rgb(239, 240, 242);
    outline: none;
    border:none;
    cursor: pointer;
    padding: 10px;
`
const Navigation = () => {
    return (
        <NavWrapper>
            <NavButton>Giày</NavButton>
            <NavButton>Phụ Kiện</NavButton>
            <NavButton>Bestsellers</NavButton>
        </NavWrapper>
    );
};

export default Navigation;