import React from 'react';
import styled from 'styled-components';
import Workers from '../Workers';
import OrgMap from '../OrgMap';
import Facilities from '../Facilities';

const DashboardContainer = styled.div`
  height: calc(100vh - 124px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Row = styled.div`
  height: calc(50% - 0.5rem);

  &.bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > div {
      width: calc(50% - 0.5rem);
    }
  }
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Row>
        <Workers isDashboard />
      </Row>
      <Row className="bottom">
        <Facilities isDashboard />
        <OrgMap isDashboard />
      </Row>
    </DashboardContainer>
  );
};

export default Dashboard;
