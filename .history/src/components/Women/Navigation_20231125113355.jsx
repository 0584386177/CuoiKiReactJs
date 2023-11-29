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
`
const Navigation = () => {
    return (
        <NavWrapper>
            <button>Giày</button>
            <button>Phụ Kiện</button>
            <button>Bestsellers</button>
        </NavWrapper>
    );
};

export default Navigation;