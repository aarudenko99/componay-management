import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '../../react-auth0-spa';

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  height: 75px;
  padding: 4px 0.5rem 0.5rem 0.5rem;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-top: 4px solid #00CEC9;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
`;

const Left = styled.div`
  & > img {
    border-radius: 50%;
    height: 38px;
    width: 38px;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 0.5rem;

  & > span {
    &.full-name {
      font-size: 12px;
    }
    &.location {
      font-size: 9px;
      color: #8291A9;
    }
  }
`;

const DepartmentName = styled.span`
  font-size: 6px;
  color: #00CEC9;
`;

const WorkerCard = () => {
  const { isAuthenticated } = useAuth0();
  const workerAvatar = isAuthenticated
    ? 'https://gemini-cdn.sfo2.cdn.digitaloceanspaces.com/user_avatars/8c4a2b20-1d15-4de9-88c1-1730ff2d00c7.png' : 'https://via.placeholder.com/50';
  return (
    <Outer>
      <DepartmentName>Technology</DepartmentName>
      <Inner>
        <Left>
          <img src={workerAvatar} alt="worker" />
        </Left>
        <Right>
          <span className="full-name">Van Martin</span>
          <span className="location">VP of Technology</span>
          <span className="location">Ogden, UT</span>
        </Right>
      </Inner>
    </Outer>
  );
};

export default WorkerCard;
