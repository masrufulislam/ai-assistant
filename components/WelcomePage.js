import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  background-image: url(/akhi.png);
  background-size: cover;
  background-position: center;
  position: relative;

  @media (max-width: 768px) {
    background-image: url(/akhiai.png);
  }
`;

const Button = styled.button`
  font-family: 'Times New Roman';
  font-weight: bold;
  position: absolute;
  bottom: 27%;
  right: 38%;
  padding: 20px 40px;
  font-size: 23px;
  cursor: pointer;
  background: linear-gradient(to bottom, #33cccc 0%, #003366 100%);
  color: white;
  border: none;
  border-radius: 5px;
  transform: translate(50%, 50%);

  @media (max-width: 768px) {
    bottom: 20%;
    right: 50%;
    transform: translate(50%, 0);
  }
`;

const WelcomePage = ({ onStart }) => {
  return (
    <Container>
      <Button onClick={onStart}>
        Start Chat
      </Button>
    </Container>
  );
};

export default WelcomePage;
