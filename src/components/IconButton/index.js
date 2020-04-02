import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconButtonStyle = styled.button`
  position: fixed;
  padding: 0px 4px 1px 4px;
  ${(props) => props.style}

  &.circle {
    margin-right: auto;
    border-radius: 50%;
  }
`;

const IconButton = ({ Icon, shape, click, style }) => {
  return (
    <IconButtonStyle type="button" className={shape} onClick={click} style={style}>
      <Icon />
    </IconButtonStyle>
  );
};

IconButton.defaultProps = {
  style: null,
};

IconButton.propTypes = {
  Icon: PropTypes.func.isRequired,
  shape: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

export default IconButton;
