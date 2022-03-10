import React from 'react';
import styled from 'styled-components';
import Stars from '../components/addReview/Stars';

function AddReview() {
  return (
    <Container>
      <Stars />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  height: 100%;
  border: 1px solid black;
`;

export default AddReview;
