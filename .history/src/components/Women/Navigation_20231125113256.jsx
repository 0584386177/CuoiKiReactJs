import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.div`
    width: 1600px;
    height: 100%;
    display: flex;
    align-items: center;
    
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