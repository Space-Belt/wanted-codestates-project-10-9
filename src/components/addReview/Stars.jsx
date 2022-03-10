import React from 'react';
import styled from 'styled-components';
import { Star1, Star2, Star3, Star4, Star5 } from '../../Image.js';

function Stars() {
  return (
    <>
      <Star>
        <Rating>평점</Rating>
        <StarRating>
          <img src={Star1} alt="Star1" />
          <img src={Star2} alt="Star1" />
          <img src={Star3} alt="Star1" />
          <img src={Star4} alt="Star1" />
          <img src={Star5} alt="Star1" />
        </StarRating>
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

const StarRating = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 2rem auto;
  & img {
    width: 3rem;
    height: 3rem;
  }
`;

export default Stars;
