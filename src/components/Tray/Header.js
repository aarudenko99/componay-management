import React from 'react';
import styled from 'styled-components';
// import { FiSearch } from 'react-icons/fi';

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  padding: 0.5rem 0.5rem 0.5rem 1rem;;
  border-bottom: 1px solid #DCE0E7;
  background-color: #FAFAFB;

  &::after {
    content: "";
    position: absolute;
    background: linear-gradient(99deg, #0081FF 0%, #22CCE2 101.5%);
    left: 0;
    height: 34px;
    width: 4px;
    border-radius: 0px 5px 5px 0px;
  }
`;

const Title = styled.span`
  color: #2C2C2C;
`;

const InputStyle = styled.input`
  background-color: #EFF3F7;
  border-radius: 5px;
  height: 21px;
  border: none;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <Title>COMPANY TREE</Title>
      <InputStyle />
    </HeaderStyle>
  );
};

export default Header;
