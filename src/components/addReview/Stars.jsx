import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { handleRating } from '../../modules/star';

function Stars() {
  const starRef = useRef();
  const filledRef = useRef();
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [starWidth, setStarWidth] = useState(0);

  const handleOnClick = (e) => {
    const ratingStandard = e.target.getBoundingClientRect().width / 2;
    const wholeLength = Math.round(
      Number(e.pageX) - Number(starRef.current.getBoundingClientRect().x),
    );
    const starLength =
      Number(e.pageX) - Number(e.target.getBoundingClientRect().x);
    const halfStar = Math.round(
      Number(
        // wholeLength - starLength + e.target.getBoundingClientRect().width / 2,
        wholeLength - starLength + ratingStandard,
      ),
    );
    const wholeStar = Math.round(
      Number(wholeLength - starLength + e.target.getBoundingClientRect().width),
    );
    if (starLength < ratingStandard) {
      setStarWidth((state) => halfStar);
    } else if (starLength > ratingStandard) {
      setStarWidth((state) => wholeStar);
    }
    let calcRate = starWidth / ratingStandard / 2;
    setRating((state) => calcRate);
    dispatch(handleRating(rating));
  };

  return (
    <>
      <Star>
        <Rating>평점 : {rating}</Rating>
        <StarRating>
          <EmptyStars
            ref={starRef}
            onClick={handleOnClick}
            onMouseUp={handleOnClick}
          >
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <FilledStars width={starWidth} ref={filledRef}>
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
