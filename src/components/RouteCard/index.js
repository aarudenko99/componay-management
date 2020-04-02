import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: #FFFFFF;
  border-radius: 4px 4px 0px 0px;
  height: 52px;
  padding: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

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

const Body = styled.div`
  background: #FFFFFF;
  border-radius: 0px 0px 4px 4px;
  /* review this sometime */
  height: ${(props) => (props.isDashboard ? 'calc(100% - 52px)' : 'calc(100vh - 176px);')};
  ${(props) => props.isContentCentered && `
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

const Title = styled.span`
  color: #2C2C2C;
  font-size: 16px;
`;

const RouteCard = ({ children, isContentCentered, isDashboard, title }) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Body isDashboard={isDashboard} isContentCentered={isContentCentered}>
        { children }
      </Body>
    </Container>
  );
};

RouteCard.defaultProps = {
  children: null,
  isContentCentered: true,
  isDashboard: false,
};

RouteCard.propTypes = {
  children: PropTypes.node,
  isContentCentered: PropTypes.bool,
  isDashboard: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default RouteCard;
