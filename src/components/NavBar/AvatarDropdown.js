import React, { useState } from 'react';
import styled from 'styled-components';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useAuth0 } from '../../react-auth0-spa';
import history from '../../utils/history';

const DropdownToggleStyle = styled(DropdownToggle)`
  &:hover {
    cursor: pointer;
  }
`;

const ImageStyle = styled.img`
  border-radius: 50%;

  &.avatar-picture {
    max-height: 32px;
    max-width: 32px;
  }

  &.large-picture {
    max-height: 92px;
    max-width: 92px;
  }

  &.with-margin {
    margin-right: 1rem;
  }
`;

// need a better solution than using `!important` to override reactstrap css
const DropdownMenuStyle = styled(DropdownMenu)`
  top: 12px !important;
  border-top: 8px solid #636E72 !important;
`;

const AvatarDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const { logout, user } = useAuth0();
  const params = { returnTo: window.location.origin };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggleStyle
        tag="span"
        data-toggle="dropdown"
        aria-expanded={dropdownOpen}
      >
        <ImageStyle src={(user && user.picture) || 'https://via.placeholder.com/32'} alt="Avatar Picture" className="avatar-picture" />
      </DropdownToggleStyle>
      <DropdownMenuStyle right>
        <DropdownItem className="text-center">
          <ImageStyle src={(user && user.picture) || 'https://via.placeholder.com/92'} alt="Large Picture" className="large-picture" />
        </DropdownItem>
        <DropdownItem className="text-center">
          {(user && user.name) || 'Name'}
        </DropdownItem>
        <DropdownItem className="text-center">
          {(user && user.email) || 'Email'}
        </DropdownItem>
        <DropdownItem className="text-center" onClick={() => history.push('/profile')}>
          Manage your Account
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem disabled>
          <ImageStyle src="https://via.placeholder.com/32" alt="OrganizationAvatar" className="with-margin" />
          Organization
        </DropdownItem>
        <DropdownItem disabled>
          <ImageStyle src="https://via.placeholder.com/32" alt="OrganizationAvatar" className="with-margin" />
          Add Additional Organization
        </DropdownItem>
        <DropdownItem className="text-center" onClick={() => logout(params)}>
          Sign Out
        </DropdownItem>
      </DropdownMenuStyle>
    </Dropdown>
  );
};

export default AvatarDropdown;
