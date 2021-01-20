import React, { useState, useContext } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { ArrowLeftIcon } from "components/Icons";
import appContext from "context/app/appContext";
import Spinner from "components/Spinner/Spinner";

const Header = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(61, 84, 102);
`;

const Back = styled.div`
  padding: 1rem;
  cursor: pointer;
`;

const Tweet = styled.button`
  background-color: #1da0f2;
  padding: 0.4rem 1rem;
  border-radius: 60px;
  border: none;
  outline: none;
  margin-right: 1rem;
  cursor: pointer;
  &:disabled {
    background-color: #1da1f2;
    opacity: 0.5;
  }
  p {
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    margin: 0;
    padding: 0;
  }
`;

const NewTweeetContainer = styled.div`
  display: flex;
  margin: 1rem;
`;

const PictureContainer = styled.div`
  margin-right: 1rem;
`;

const Picture = styled.img`
  width: 46px;
  border-radius: 50%;
  cursor: pointer;
`;

const TextArea = styled.textarea`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #fff;
  background-color: rgb(21, 32, 43);
  border: none;
  width: 100%;
  font-size: 19px;
  padding: 0.5rem 0;
  outline: none;
  border-bottom: 1px solid rgb(56, 68, 77);
  font-weight: 400;
  &::placeholder {
    color: #8899a6;
  }
`;

const Index = () => {
  const { tweetContent, captureTweetContent, postTweet, loading } = useContext(
    appContext
  );
  const { area } = tweetContent;
  const handleChange = (e) => {
    if (e.target.value === "" || e.target.value === null) return;
    captureTweetContent({
      ...tweetContent,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    postTweet(tweetContent);
  };

  return (
    <>
      <Header>
        <Link href="/home">
          <Back>
            <ArrowLeftIcon />
          </Back>
        </Link>
        <Tweet onClick={handleClick} disabled={area === null || area === ""}>
          {loading ? <Spinner /> : <p>Tweet</p>}
        </Tweet>
      </Header>
      <NewTweeetContainer>
        <PictureContainer>
          <Picture src="/resources/user.jpg" />
        </PictureContainer>
        <TextArea
          onChange={handleChange}
          value={tweetContent.area}
          placeholder="What's happening?"
          name="area"
          cols="30"
          rows="5"
        ></TextArea>
      </NewTweeetContainer>
    </>
  );
};

export default Index;
