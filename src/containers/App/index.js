import React, { useState } from 'react';
import styled from 'styled-components';
import Main from '../Main';
import { useAuth0 } from '../../react-auth0-spa';
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import SecondaryNavBar from '../../components/SecondaryNavBar';
import Tray from '../../components/Tray';

const ContainerStyle = styled.div`
  padding: 1rem 1rem 1rem 0px;
  transition: 0.7s;

  &.closed {
    margin-left: 101px;
  }

  &.open {
    margin-left: 435px;
  }
`;

const Background = styled.div`
  background-color: #EBECF1;
  height: 100vh;
`;

const App = () => {
  const { loading } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Background>
      <NavBar />
      <SideBar />
      <SecondaryNavBar />
      <Tray isOpen={isOpen} toggleTray={() => setIsOpen(!isOpen)} />
      <ContainerStyle className={isOpen ? 'open' : 'closed'}>
        <Main />
      </ContainerStyle>
    </Background>
  );
};

export default App;
