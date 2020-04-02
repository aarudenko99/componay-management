import React from 'react';
import styled from 'styled-components';
import AvatarDropdown from './AvatarDropdown';

const NavBarStyle = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  background: linear-gradient(90deg, #274770 0%, #203347 100%);
  padding: 0 1rem;
  justify-content: flex-end;
`;

const NavBar = () => {
  return (
    <NavBarStyle>
      <AvatarDropdown />
    </NavBarStyle>
  );
};

export default NavBar;
