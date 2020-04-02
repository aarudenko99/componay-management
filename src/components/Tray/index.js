import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import IconButton from '../IconButton';
import Header from './Header';
import SubHeader from './SubHeader';
import Tree from './Tree';
import Footer from './Footer';

const TrayStyle = styled.div`
  position: fixed;
  margin-left: 69px;
  background-color: #FAFAFB;
  height: 100%;
  box-shadow: 1px 1px 2px rgba(22, 51, 88, 0.22);
  transition: 0.7s;
  padding-bottom: 100px;

  &.open {
    width: 350px;

    & > *:not(button) {
      transition-delay: 0.5s;
      transition-property: visibility;
      visibility: visible;
    }
  }

  &.closed {
    width: 13px;

    & > :not(button) {
      visibility: hidden;
    }
  }
`;

const Tray = ({ isOpen, toggleTray, location }) => {
  return (
    <TrayStyle className={isOpen ? 'open' : 'closed'}>
      { location.pathname !== '/'
        && (
        <IconButton
          Icon={FiMenu}
          shape="circle"
          click={toggleTray}
          style={{
            backgroundColor: '#FFFEFE',
            fontSize: '12px',
            transition: '0.7s',
            margin: `2rem 0px 0px ${isOpen ? '338px' : '3px'}`,
          }}
        />
        )}
      <Header />
      <SubHeader />
      <Tree />
      <Footer />
    </TrayStyle>
  );
};

Tray.defaultProps = {
  toggleTray: () => {},
};

Tray.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleTray: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired,
};

export default withRouter(Tray);
