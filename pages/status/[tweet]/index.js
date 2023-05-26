import { useContext, useEffect, useState } from 'react'
import appContext from 'context/app/appContext'
import Head from 'next/head'
import styles from './styles.module.css'
import { ArrowLeftIcon, CommentIcon, FilledLikeIcon, LikeIcon, RetweetIcon, ShareIcon } from 'components/Icons'
import Link from 'next/link'
import { firestore } from 'firebase/admin'
import { useRouter } from 'next/router'
import useDateFormat from 'hooks/useDateFormat'
import Highlight from 'react-hashtag'
import hash from 'string-hash'
import useUser from 'hooks/useUser'

export default function TweetPage(props) {
  const router = useRouter()
  const { id, avatar, comments, likes, retweets, content, displayName, username, image, createdAt } = props

  const { like } = useContext(appContext)
  const user = useUser()
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    if (likes !== undefined) {
      setLiked(likes.includes(user?.uid))
    }
  }, [likes])

  if (router.isFallback) return <h1>Loading...</h1>

  const formatDate = useDateFormat(createdAt * 1000)

  const handleLike = e => {
    const data = {
      tweetId: id,
      userId: user.uid,
      likes,
    }

    like(data)

    setLiked(prev => !prev)

    if (e) {
      e.cancelBubble = true
      if (e.stopPropagation) e.stopPropagation()
    }
  }

  return (
    <>
      <Head>
        <title>
          {displayName} on Twitter: {content}
        </title>
      </Head>
      <header className={styles.header}>
        <Link href="/home">
          <div className={styles.back}>
            <ArrowLeftIcon />
          </div>
        </Link>
        <div>
          <span className={styles.title}>Tweet</span>
        </div>
        <div className={styles.back}></div>
      </header>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.userInfoContainer}>
            <div className={styles.avatarContainer}>
              <img className={styles.avatar} src={avatar} alt="" />
            </div>
            <div className={styles.userInfo}>
              <p className={styles.user}>{displayName}</p>
              <p className={styles.username}>{`@${username}`}</p>
            </div>
          </div>
          <div className={styles.contentContainer}>
            <p className={styles.content}>
              <Highlight
                renderHashtag={hashtagValue => (
                  <span className={styles.hashtag} key={hash(hashtagValue)}>
                    {hashtagValue}
                  </span>
                )}
              >
                {content}
              </Highlight>
            </p>
            {image && <img className={styles.image} src={image} />}
          </div>
        </div>
        <div className={styles.dateInfo}>
          <span className={styles.date}>{formatDate}</span>
        </div>
        {!(likes.length === 0 && comments.length === 0 && retweets.length === 0) && (
          <div className={styles.interactionInfo}>
            <div className={styles.interactionBorder}>
              {!(retweets.length === 0) && (
                <span className={styles.interactionData}>
                  {retweets.length}{' '}
                  <span className={styles.lightText}> {retweets.length > 1 ? 'Retweets' : 'Retweet'}</span>
                </span>
              )}

              {!(comments.length === 0) && (
                <span className={styles.interactionData}>
                  {comments.length}{' '}
                  <span className={styles.lightText}> {comments.length > 1 ? 'Comments' : 'Comment'}</span>
                </span>
              )}

              {!(likes.length === 0) && (
                <span className={styles.interactionData}>
                  {likes.length} <span className={styles.lightText}> {likes.length > 1 ? 'Likes' : 'Like'}</span>
                </span>
              )}
            </div>
          </div>
        )}
        <div className={styles.interactionContainer}>
          <span className={styles.interactionIcon}>
            <CommentIcon width={22.5} height={22.5} />
          </span>
          <span className={styles.interactionIcon}>
            <RetweetIcon width={22.5} height={22.5} />
          </span>
          <span className={styles.interactionIcon}>
            {liked ? (
              <FilledLikeIcon width={22.5} height={22.5} onClick={handleLike} />
            ) : (
              <LikeIcon width={22.5} height={22.5} fill="#8899a6" stroke="none" onClick={handleLike} />
            )}
          </span>
          <span>
            <ShareIcon width={22.5} height={22.5} />
          </span>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { tweet: 'wb5t0mNysDTC2XXim9hj' } }],
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const { tweet } = context.params

  return firestore
    .collection('tweets')
    .doc(tweet)
    .get()
    .then(doc => {
      const data = doc.data()
      const id = doc.id
      const props = {
        ...data,
        id,
        createdAt: data.createdAt._seconds,
      }
      return { props }
    })
    .catch(error => {
      console.error(error)
      return { props: {} }
    })
}
