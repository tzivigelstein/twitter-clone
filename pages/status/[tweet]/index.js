import Head from 'next/head'
import styles from 'pages/status/[tweet]/styles.module.css'
import { ArrowLeftIcon, CommentIcon, LikeIcon, RetweetIcon, ShareIcon } from 'components/Icons'
import Link from 'next/link'
import { firestore } from 'firebase/admin'
import { useRouter } from 'next/router'
import useDateFormat from 'hooks/useDateFormat'

export default function TweetPage(props) {
  const router = useRouter()

  if (router.isFallback) return <h1>Loading...</h1>

  const { avatar, comments, likes, retweets, content, displayName, image, createdAt } = props

  const formatDate = useDateFormat(createdAt * 1000)

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
              <p className={styles.username}></p>
            </div>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.content}>{content}</div>
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
            <LikeIcon width={22.5} height={22.5} fill="#8899a6" stroke="none" />
          </span>
          <span>
            <ShareIcon width={22.5} height={22.5} />
          </span>
        </div>
        <div className="comments">
          <ul>
            <li className="comment"></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { tweet: 'fZ4lUKJZjo10gnW9h7WD' } }],
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
      console.log(error)
      return { props: {} }
    })
}
