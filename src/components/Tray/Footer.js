import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 69px;
  width: inherit;
  height: 250px;
  background-color: inherit;
  border-top: 1px solid #DCE0E7;
`;

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  padding: 0.5rem 0.5rem 0.5rem 1rem;;
  border-bottom: 1px solid #DCE0E7;
  background-color: #FAFAFB;

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

const Title = styled.span`
  color: #2C2C2C;
`;

const Table = styled.table`
  font-size: 9px;
  text-align: center;
  width: inherit;
  border-bottom: 1px solid #C4C4C4;

  & tr {
    height: 29px;

    & > td:nth-child(even) {
      background-color: #F6F6F6;
    }
  }

  & th {
    color: #425365;
  }
`;

const Footer = () => {
  return (
    <Container>
      <HeaderStyle>
        <Title>HEADCOUNT STATISTICS</Title>
      </HeaderStyle>
      <Table>
        <thead style={{ backgroundColor: '#E4E7E9' }}>
          <tr>
            <th>&nbsp;</th>
            <th>Contingent Workers</th>
            <th>Employees</th>
            <th>Total Staff</th>
            <th>Total Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Van Martin</td>
            <td>7</td>
            <td>25</td>
            <td>32</td>
            <td />
          </tr>
          <tr>
            <td>Active</td>
            <td>4</td>
            <td>19</td>
            <td>23</td>
            <td />
          </tr>
          <tr>
            <td>Open</td>
            <td>3</td>
            <td>6</td>
            <td>9</td>
            <td />
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Footer;
