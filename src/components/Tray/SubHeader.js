import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.5rem 0 1rem;
`;

const ImageStyle = styled.img`
  height: 16px;
  width: 16px;
  margin-right: 10px;
`;

const SubHeader = () => {
  return (
    <Container>
      <ImageStyle src="https://via.placeholder.com/50" alt="company-logo" />
      <span>TechCore</span>
    </Container>
  );
};

export default SubHeader;
