import React, { useState } from "react";
import styled from "@emotion/styled";
import SignupForm from "../../../components/SignupForm";

const Container = styled.div`
  margin: 0 30px;
`;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 50px;
  padding: 0 1rem;
  justify-content: space-around;
  align-items: center;
`;

const EmptySpace = styled.div`
  flex: 1;
  height: 20px;
`;

const NextButtonContainer = styled.div`
  flex: 1;
  margin: 0 0 0 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NextButton = styled.button`
  background-color: #1da0f2;
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  outline: none;
  border: none;

  span {
    font-weight: bold;
    color: #fff;
    font-size: 15px;
  }

  &:disabled {
    background-color: #1da1f2;
    opacity: 0.5;
  }
`;

const TitleContainer = styled.div`
  margin: 15px 0;
`;

const Title = styled.span`
  font-size: 23px;
  color: #fff;
  font-weight: bold;
  text-align: left;
`;

const Index = () => {
  const [disabled, setDisabled] = useState(true);
  const isDisabled = (state) => {
    setDisabled(state);
  };
  return (
    <>
      <Header>
        <EmptySpace></EmptySpace>
        <svg viewBox="0 0 24 24" width="26" fill="#fff">
          <g>
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
          </g>
        </svg>
        <NextButtonContainer>
          <NextButton disabled={disabled}>
            <span>Next</span>
          </NextButton>
        </NextButtonContainer>
      </Header>
      <Container>
        <TitleContainer>
          <Title>Create your account</Title>
        </TitleContainer>
        <SignupForm isDisabled={isDisabled} />
      </Container>
    </>
  );
};

export default Index;
