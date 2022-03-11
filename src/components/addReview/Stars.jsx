import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

function Stars() {
  const starRef = useRef();
  // const [mousePosition, setMousePosition] = useState(0);
  const [rating, setRating] = useState(0);
  const [starWidth, setStarWidth] = useState(0);
  const handleOnClick = (e) => {
    const ratingStandard = e.target.getBoundingClientRect().width / 2;
    const a = Math.round(
      Number(e.pageX) - Number(starRef.current.getBoundingClientRect().x),
    );
    const c = Number(e.pageX) - Number(e.target.getBoundingClientRect().x);
    if (c < e.target.getBoundingClientRect().width / 2) {
      setStarWidth(
        Math.round(Number(a - c + e.target.getBoundingClientRect().width / 2)),
      );
    } else if (c > e.target.getBoundingClientRect().width / 2) {
      setStarWidth(
        Math.round(Number(a - c + e.target.getBoundingClientRect().width)),
      );
    }
    setRating(starWidth / ratingStandard / 2);
  };
  console.log(starWidth);
  console.log(rating);
  return (
    <>
      <Star>
        <Rating>평점</Rating>
        <StarRating>
          <EmptyStars ref={starRef} onClick={handleOnClick}>
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <FilledStars width={starWidth}>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </FilledStars>
          </EmptyStars>
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
  position: relative;
  width: 80%;
  margin: 2rem auto;
`;

const EmptyStars = styled.span`
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  & svg {
    width: 3rem;
    height: 3rem;
    & path {
      pointer-events: none;
    }
  }
`;

const FilledStars = styled.span`
  position: absolute;
  max-width: ${(props) => props.width}px;
  font-size: 3rem;
  overflow: hidden;
  text-overflow: hidden;
  white-space: nowrap;
  top: 0;
  left: 0;
  & svg {
    width: 3rem;
    height: 3rem;
    color: gold;
    & path {
      pointer-events: none;
    }
  }
`;

export default Stars;
