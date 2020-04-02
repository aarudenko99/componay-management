import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Outer = styled.div`
  width: 138px;
   /* @TODO: real height value is 108px. 115px is for demo. */
  /* height: 108px; */
  height: 115px;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-top: 4px solid #00CEC9;
  background-color: #FFFFFF;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4px;
  height: 50%;

  & > div {
    display: flex;
  }
`;

const Bottom = styled.div`
  height: 50%;
  font-size: 6px;

  & > div {
    height: 14px;
    padding: 0 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:nth-child(odd) {
      background-color: #F3F4F5;
    }
  }
`;

const DepartmentName = styled.span`
  font-size: 8px;
  display: flex;
`;

const Badge = styled.span`
  border-radius: 4px;
  text-align: center;

  &.larger {
    width: 25px;
    height: 13px;
    font-size: 9px;
  }

  &.smaller {
    width: 17px;
    height: 9px;
    font-size: 7px;
  }

  &.gray {
    background-color: #F3F4F5;
    color: #000000;
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

const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.span`
  font-size: 6px;
  color: #8291A9;
`;

const DepartmentCard = ({ city, contingent, departmentName, employees, total }) => {
  return (
    <Outer>
      <Top>
        <DepartmentName>{city}</DepartmentName>
        <div style={{ justifyContent: 'space-between' }}>
          <Group>
            <Badge className="gray larger">{total}</Badge>
            <Text>Total Staff</Text>
          </Group>
          <Group>
            <Badge className="blue larger">{employees}</Badge>
            <Text>Employees</Text>
          </Group>
          <Group>
            <Badge className="orange larger">{contingent}</Badge>
            <Text>Contingent</Text>
          </Group>
        </div>
      </Top>
      <Bottom>
        <div>
          <span>{departmentName}</span>
          <Badge className="blue smaller">{employees}</Badge>
          <Badge className="orange smaller">{contingent}</Badge>
        </div>
        <div />
        <div />
        <div />
      </Bottom>
    </Outer>
  );
};

// @TODO: these defaultProps values are for demo only
DepartmentCard.defaultProps = {
  city: 'Ogden',
  contingent: 1,
  departmentName: 'Ogden Development Center',
  employees: 5,
  total: 6,
};

DepartmentCard.propTypes = {
  city: PropTypes.string,
  contingent: PropTypes.number,
  departmentName: PropTypes.string,
  employees: PropTypes.number,
  total: PropTypes.number,
};

export default DepartmentCard;
