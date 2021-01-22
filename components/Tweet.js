import styled from '@emotion/styled'
import { CommentIcon, LikeIcon, RetweetIcon, ShareIcon } from 'components/Icons'
import useDateFormat from 'hooks/useDateFormat'
import useTimeAgo from 'hooks/useTimeAgo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const TweetContainer = styled.article`
  border-bottom: 1px solid rgb(56, 68, 77);
  width: 100%;
  padding: 0.6rem 1rem;
  display: flex;
  &:hover {
    cursor: pointer;
    backdrop-filter: brightness(120%);
  }
`

const PictureContainer = styled.div`
  margin-right: 1rem;
`

const Picture = styled.img`
  width: 46px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    filter: brightness(85%);
  }
`

const ContentContainer = styled.div`
  width: 100%;
`

const Content = styled.span`
  font-size: 14px;
`

const ImageContainer = styled.div`
  display: flex;
  margin: 0.8rem 0;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`

const User = styled.span`
  font-size: 14px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const Username = styled.span`
  font-size: 14px;
  color: #8899a6;
  margin: 0 0.4rem;
`

const Time = styled.time`
  font-size: 14px;
  color: #8899a6;
  margin: 0 0.4rem;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const Tooltip = styled.div`
  background-color: #8899a6;
  border-radius: 2px;
  font-size: 0.7rem;
  position: absolute;
  padding: 0.2rem;
  top: -1rem;
  left: 3rem;
`

const Interaction = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.7rem;
`

const InteractionIcon = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const Numbers = styled.span`
  font-size: 14px;
  color: #8899a6;
  margin-left: 0.4rem;
`

const Tweet = ({ id, user, username, picture, content, comments, likes, retweets, date, image }) => {
  const timeago = useTimeAgo(date)
  const formatDate = useDateFormat(date)
  const [showDate, setShowDate] = useState(false)

  const router = useRouter()

  const handleMouseEnter = () => {
    setShowDate(true)
  }

  const handleMouseLeave = () => {
    setShowDate(false)
  }

  const handleArticleClick = e => {
    e.preventDefault()
    router.push(`/status/${id}`)
  }

  return (
    <TweetContainer onClick={handleArticleClick}>
      <PictureContainer>
        <Picture src={picture} />
      </PictureContainer>
      <ContentContainer>
        <div style={{ position: 'relative' }}>
          <User>{user}</User>
          <Username>{username}</Username>
          <Link href={`/status/${id}`}>
            <Time onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} dateTime={formatDate}>
              {timeago}
            </Time>
          </Link>
          {showDate && <Tooltip>{formatDate}</Tooltip>}
        </div>
        <Content>{content}</Content>
        {image && (
          <ImageContainer>
            <Image src={image} />
          </ImageContainer>
        )}
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
  )
}

export default Tweet
