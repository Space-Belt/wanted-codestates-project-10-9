import React from 'react';
import styled from 'styled-components';

function Stars() {
  return (
    <>
      <Star>
        <Rating>평점</Rating>
      </Star>
    </>
  );
}

const Star = styled.div`
  width: 100%;
  height: 10rem;
  border: 1px solid black;
`;

const Rating = styled.h1`
  width: 100%;
  font-size: 2rem;
`;

export default Stars;
