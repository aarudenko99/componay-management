import React from 'react';
import styled from 'styled-components';
import { FiPlus, FiGrid, FiList } from 'react-icons/fi';
import { FaUsers, FaSitemap } from 'react-icons/fa';

const SecondaryNavBarStyle = styled.div`
  background: #405875;
  height: 48px;
  margin-left: 69px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
`;

const IconButton = styled.button`
  padding: 0px 4px 1px 4px;

  &:not(:first-child):not(:last-child) {
    margin-left: 0.5rem;
  }

  &:last-child {
    margin-left: 2rem;
  }

  & > .filter-icon {
    &.gray {
      color: #8291A9;
    }

    &.white {
      color: #FFFFFF;
    }
  }

  &.circle-button {
    margin-right: auto;
    background-color: #405875;
    border-radius: 50%;
    /* change border to box-sizing to not affect button dimensions */
    border: 1px solid #FFFFFF;
  }

  &.square-button {
    border-radius: 6px;
    border: none;

    &.gray {
      background-color: #2C3A4B;
    }

    &.blue {
      background-color: #0081FF;
    }
  }
`;

const SecondaryNavBar = () => {
  return (
    <SecondaryNavBarStyle>
      <IconButton type="button" className="circle-button">
        <FiPlus className="filter-icon white" />
      </IconButton>
      <IconButton type="button" className="square-button gray">
        <FaSitemap className="filter-icon gray" />
      </IconButton>
      <IconButton type="button" className="square-button gray">
        <FiGrid className="filter-icon gray" />
      </IconButton>
      <IconButton type="button" className="square-button gray">
        <FiList className="filter-icon gray" />
      </IconButton>
      <IconButton type="button" className="square-button gray">
        <FaUsers className="filter-icon gray" />
      </IconButton>
      <IconButton type="button" className="square-button blue">
        <FiPlus className="filter-icon white" />
      </IconButton>
    </SecondaryNavBarStyle>
  );
};

export default SecondaryNavBar;
