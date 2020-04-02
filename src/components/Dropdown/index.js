import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown as DropdownReactStrap, DropdownToggle, DropdownMenu } from 'reactstrap';

const Dropdown = ({ children }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <DropdownReactStrap isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Dropdown
      </DropdownToggle>
      <DropdownMenu right>
        {
          children
        }
      </DropdownMenu>
    </DropdownReactStrap>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Dropdown;
