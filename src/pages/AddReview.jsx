import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import NavBar from '../common/NavBar';
import Stars from '../components/addReview/Stars';
import Input from '../common/Input';
import { useNavigate } from 'react-router-dom';

const AddReview = () => {
  // const [reviewData, SetReviewData] = useState({});
  const [imageSrc, setImageSrc] = useState('');
  const [reviewName, setReviewName] = useState();
  const [reviewContent, setReviewContent] = useState();
  const navigate = useNavigate();
  const reviewNameRef = useRef();
  const reviewContentRef = useRef();
  const handleNameChange = () => {
    setReviewName(reviewNameRef.current.value);
  };
  const handleContentChange = () => {
    setReviewContent(reviewContentRef.current.value);
  };

  const registerReview = () => {
    navigate('/');
  };

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <>
      <Container>
        <NavBar />
        <Stars />
        <Subtitle>
          <h1>제목</h1>
          <Input
            placeholder={'리뷰 제목을 입력해주세요'}
            refName={reviewNameRef}
            onChange={handleNameChange}
          />
        </Subtitle>
        <ReviewContent>
          <h1>내용</h1>
          <Input
            placeholder={'리뷰 내용을 입력해주세요'}
            refName={reviewContentRef}
            onChange={handleContentChange}
          />
        </ReviewContent>
        <ImgLabel for="image">사진 추가</ImgLabel>
        <AddImage
          type="file"
          id="image"
          accept="img/*"
          onChange={(e) => encodeFileToBase64(e.target.files[0])}
        />
        <ImgBox className="img_box">
          {imageSrc && <SelectedImg src={imageSrc} alt="preview-img" />}
        </ImgBox>
        <Button title="리뷰 등록하기" onClick={registerReview} />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 5rem 1.25rem;
`;

const ImgLabel = styled.label`
  width: 200px;
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  position: relative;
  line-height: 40px;
  text-align: center;
  background-color: aliceblue;
`;

const AddImage = styled.input`
  width: 200px;
  height: 40px;
  position: absolute;
  margin-top: px;
  border: 1px solid black;
  border-radius: 10px;
  display: none;
`;

const Subtitle = styled.div`
  width: 100%;
  height: 5rem;
  & h1 {
    font-size: 2rem;
  }
`;

const ImgBox = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  justify-content: center;
  background-color: aqua;
  margin-top: 15px;
`;

const ReviewContent = styled.div`
  width: 100%;
  height: 5rem;
  & h1 {
    font-size: 2rem;
  }
`;

const SelectedImg = styled.img`
  width: 460px;
  height: 200px;
  object-fit: contain;
`;
export default AddReview;
