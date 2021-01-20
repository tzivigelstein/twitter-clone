import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { CommentIcon, LikeIcon, RetweetIcon, ShareIcon } from "./Icons";
import useTime from "../hooks/useTime";

const TweetContainer = styled.article`
  border-bottom: 1px solid rgb(56, 68, 77);
  width: 100%;
  padding: 0.6rem 1rem;
  display: flex;
`;

const PictureContainer = styled.div`
  margin-right: 1rem;
`;

const Picture = styled.img`
  width: 46px;
  border-radius: 50%;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  width: 100%;
`;

const Content = styled.span`
  font-size: 14px;
`;

const User = styled.span`
  font-size: 14px;
  font-weight: bold;
  &:hover {
    color: #2b7bb9;
    cursor: pointer;
  }
`;

const Username = styled.span`
  font-size: 14px;
  color: #8899a6;
  margin: 0 0.4rem;
`;

const Interaction = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const InteractionIcon = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Numbers = styled.span`
  font-size: 14px;
  color: #8899a6;
  margin-left: 0.4rem;
`;

const Tweet = ({
  user,
  username,
  picture,
  content,
  comments,
  likes,
  retweets,
  date,
}) => {
  const timeago = useTime(date);

  return (
    <TweetContainer>
      <PictureContainer>
        <Picture src={picture} />
      </PictureContainer>
      <ContentContainer>
        <div>
          <User>{user}</User>
          <Username>{username}</Username>
          <Username>{timeago}</Username>
        </div>
        <Content>{content}</Content>
        <Interaction>
          <InteractionIcon>
            <CommentIcon />
            <Numbers>{comments}</Numbers>
          </InteractionIcon>
          <InteractionIcon>
            <RetweetIcon />
            <Numbers>{retweets}</Numbers>
          </InteractionIcon>
          <InteractionIcon>
            <LikeIcon />
            <Numbers>{likes}</Numbers>
          </InteractionIcon>
          <span>
            <ShareIcon />
          </span>
        </Interaction>
      </ContentContainer>
    </TweetContainer>
  );
};

export default Tweet;
