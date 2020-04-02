/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Set } from 'immutable';
import styled from 'styled-components';
import { FiPlusSquare, FiMinusSquare, FiCircle } from 'react-icons/fi';
import treeData from './treeData';

const List = styled.ul`
  list-style: none;
  padding-left: 1.5rem;

  li {
    position: relative;
  }

  li span.full-name {
    display: inline-flex;
    align-items: center;
    height: 29px;

    & > *:not(:last-child) {
      margin-right: 10px;
    }
  }
  li span.full-name::before{
    content:'';
    position:absolute;
    border-left: 1px solid #C9C8C8;
    left: 8px;
    bottom:0;
    z-index:-1;
    height: 107%;
    top: 13px;
  }

  li:last-child span.full-name::before{
    content:none;
  }
  li:last-child{
    padding-bottom:0
  }
`;

const Badge = styled.span`
  border-radius: 50%;
  padding: 2px;

  &.smaller {
    width: 14px;
    height: 14px;
    font-size: 8px;
    padding: 3px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  &.blue {
    background-color: #2CA8FF;
    color: #FFFFFF;
  }

  &.orange {
    background-color: #F96332;
    color: #FFFFFF;
  }
`;

const ToggleIconStyle = styled.span`
  :hover {
    cursor: pointer;
  }
`;

const TreeNode = ({ data }) => {
  const [open, setOpen] = useState(Set([]));

  const modifyOpenSet = (itemId) => {
    return open.has(itemId) ? open.delete(itemId) : open.add(itemId);
  };

  return (
    <List>
      {data.map(({ children, first_name, id, isContingent, last_name }) => {
        const hasChildren = children && children.length;
        return (
          <li key={id}>
            <span className="full-name">
              {hasChildren > 0
                ? (
                  <ToggleIconStyle onClick={() => setOpen(modifyOpenSet(id))}>
                    {open.has(id) ? <FiMinusSquare /> : <FiPlusSquare />}
                  </ToggleIconStyle>
                ) : <FiCircle stroke="none" />}
              <Badge className={`smaller ${isContingent ? 'blue' : 'orange'}`}>{hasChildren || null}</Badge>
              <span>{`${first_name} ${last_name}`}</span>
            </span>
            {(children && open.has(id)) && <TreeNode data={children} />}
          </li>
        );
      })}
    </List>
  );
};

TreeNode.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const Container = styled.div`
  height: calc(100vh - 411px);
  overflow: scroll;
`;

const Tree = () => {
  return (
    <Container>
      <TreeNode data={treeData} />
    </Container>
  );
};

export default Tree;
