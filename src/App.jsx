import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Main from './pages/Main';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddReview from './pages/AddReview';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Wrapper>
        {/* <ToastContainer> */}
        <Container>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/addreview" element={<AddReview />} />
          </Routes>
        </Container>
        {/* </ToastContainer> */}
      </Wrapper>
    </Router>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 500px;
  background-color: pink;
`;
