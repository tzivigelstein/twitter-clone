import Head from 'next/head'
import styles from 'pages/status/[tweet]/styles.module.css'
import { ArrowLeftIcon, CommentIcon, LikeIcon, RetweetIcon, ShareIcon } from 'components/Icons'
import Link from 'next/link'
import useTime from 'hooks/useTime'

export default function TweetPage(props) {
  const { avatar, comments, likes, retweets, content, displayName, image, createdAt } = props

  const [rtf, dtf] = useTime(createdAt._seconds * 1000)

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
          <span className={styles.date}>{dtf}</span>
        </div>
        <div className={styles.interactionInfo}>
          <div className={styles.interactionBorder}>
            <span>
              {comments.length}
              <span className={styles.lightText}> Retweets</span>
            </span>
            <span>
              {retweets.length}
              <span className={styles.lightText}> Comments</span>
            </span>
            <span>
              {likes.length}
              <span className={styles.lightText}> Likes</span>
            </span>
          </div>
        </div>
        <div className={styles.interactionContainer}>
          <span className={styles.interactionIcon}>
            <CommentIcon />
          </span>
          <span className={styles.interactionIcon}>
            <RetweetIcon />
          </span>
          <span className={styles.interactionIcon}>
            <LikeIcon />
          </span>
          <span>
            <ShareIcon />
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

export async function getServerSideProps(context) {
  const { params, res } = context
  const { tweet } = params

  const apiRes = await fetch(`http://localhost:3000/api/tweets/${tweet}`)

  if (apiRes.ok) {
    const props = await apiRes.json()
    return { props }
  }

  if (res) {
    res.writeHead(301, { Location: '/home' }).end()
  }
}
