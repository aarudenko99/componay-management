import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FiDatabase, FiGrid, FiMapPin, FiUsers } from 'react-icons/fi';
import { FaRegBuilding } from 'react-icons/fa';

const SideBarStyle = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 69px;
  height: 100%;
  background: linear-gradient(180deg, #112B4D 0%, #2A5483 100%);
  box-shadow: 0px 2px 22px rgba(0, 0, 0, 0.2), 0px 2px 30px rgba(0, 0, 0, 0.35);
`;

const NavLinkStyle = styled.div`
  width: 100%;
  height: 69px;
  display: flex;
  align-items: center;
  justify-content: center;

  & a {
    color: #909DB0;

    &.selected {
      display: inline-block;
      text-align: center;
      border-radius: 50%;
      line-height: 50px;
      width: 50px;
      background-color: #FFFFFF;
      color: #F96332;
    }
  }
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const SideBar = () => {
  return (
    <>
      <SideBarStyle>
        <NavLinkStyle>
          <Logo
            src="https://gemini-cdn.sfo2.cdn.digitaloceanspaces.com/logos/Gemini_Logo_Icon_300dpi_2.5in_01.2020.svg"
            alt="Gemini"
          />
        </NavLinkStyle>
        <NavLinkStyle>
          <NavLink exact to="/" activeClassName="selected">
            <FiGrid />
          </NavLink>
        </NavLinkStyle>
        <NavLinkStyle>
          <NavLink to="/workers" activeClassName="selected">
            <FiUsers />
          </NavLink>
        </NavLinkStyle>
        <NavLinkStyle>
          <NavLink to="/facilities" activeClassName="selected">
            <FaRegBuilding />
          </NavLink>
        </NavLinkStyle>
        <NavLinkStyle>
          <NavLink to="/map" activeClassName="selected">
            <FiMapPin />
          </NavLink>
        </NavLinkStyle>
        <NavLinkStyle>
          <NavLink to="/sync" activeClassName="selected">
            <FiDatabase />
          </NavLink>
        </NavLinkStyle>
      </SideBarStyle>
    </>
  );
};

export default SideBar;
