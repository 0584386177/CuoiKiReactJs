import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
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