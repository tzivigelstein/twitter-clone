import { useContext, useEffect } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { ArrowLeftIcon, Times } from 'components/Icons'
import appContext from 'context/app/appContext'
import Spinner from 'components/Spinner/Spinner'
import { ExternalContainer, Mobile } from 'components/Globals'
import { AvatarPlaceholder } from 'components/onLoadAnimations/onLoadAnimations'
import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'
import Head from 'next/head'
import TextArea from 'components/TextArea'
import styles from 'pages/compose/tweet/styles.module.css'

const Header = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(61, 84, 102);
`

const Back = styled.div`
  padding: 1rem;
  cursor: pointer;
`

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
`

const NewTweeetContainer = styled.div`
  display: flex;
  margin: 1rem;
`

const PictureContainer = styled.div`
  margin-right: 1rem;
`

const Picture = styled.img`
  width: 46px;
  border-radius: 50%;
  cursor: pointer;
`

const CounterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Counter = styled.p`
  text-align: right;
  width: 90%;
  margin: 0 auto;
  color: #8899a6;
`

const Index = () => {
  const { image, tweetContent, postTweet, loading, char, MAX_CHAR, setImage } = useContext(appContext)
  const { area } = tweetContent

  const router = useRouter()

  const user = useUser()

  useEffect(() => {
    !user && router.replace('/login')
  }, [])

  const handleClick = e => {
    e.preventDefault()
    if (area.length > 140 || !area.trim()) return
    const data = { avatar: user.photoURL, content: area, userId: user.uid, displayName: user.displayName, image: image }
    postTweet(data)
  }

  return (
    <>
      <Head>
        <title>Compose Tweet / Twitter</title>
      </Head>
      <ExternalContainer>
        <Mobile>
          <div>
            <Header>
              <Link href="/home">
                <Back>
                  <ArrowLeftIcon />
                </Back>
              </Link>
              <Tweet onClick={handleClick} disabled={area === null || area === '' || loading}>
                {loading ? <Spinner width="1rem" /> : <p>Tweet</p>}
              </Tweet>
            </Header>
            <NewTweeetContainer>
              <PictureContainer>
                {user ? <Picture src={user.photoURL} /> : <AvatarPlaceholder width="46px" />}
              </PictureContainer>
              <TextArea></TextArea>
            </NewTweeetContainer>
          </div>
          <CounterContainer>
            <Counter>
              {char}/{MAX_CHAR}
            </Counter>
          </CounterContainer>
          {image && (
            <div className={styles.preview_container}>
              <img className={styles.preview} src={image} alt="" />
              <div onClick={() => setImage(null)} className={styles.times_container}>
                <Times />
              </div>
            </div>
          )}
        </Mobile>
      </ExternalContainer>
    </>
  )
}

export default Index
