import { useContext, useEffect } from 'react'
import Layout from 'components/Layout'
import Tweet from 'components/Tweet'
import { Container } from 'components/Globals'
import { NewIcon } from 'components/Icons'
import ConnectionLost from 'components/ConnectionLost'
import appContext from 'context/app/appContext'
import Spinner from 'components/Spinner/Spinner'
import { useRouter } from 'next/router'
import useUser from 'hooks/useUser'

const Index = () => {
  const { tweets, getTweets, loading } = useContext(appContext)

  const router = useRouter()

  const user = useUser()

  useEffect(() => {
    user === null && router.replace('/login')
  }, [user])

  useEffect(() => {
    user && getTweets()
  }, [user])

  return (
    <Layout>
      {user ? (
        <>
          <div>
            <Container>
              {tweets ? (
                <>
                  {tweets.map(tweet => (
                    <Tweet
                      key={tweet.id}
                      id={tweet.id}
                      user={tweet.displayName}
                      // username={tweet.username}
                      picture={tweet.avatar}
                      content={tweet.content}
                      comments={tweet.comments.length}
                      likes={tweet.likes.length}
                      retweets={tweet.retweets.length}
                      date={tweet.createdAt.seconds * 1000}
                    />
                  ))}
                </>
              ) : (
                <>
                  {loading ? (
                    <Container>
                      <div
                        style={{
                          marginTop: '50%',
                        }}
                      >
                        <Spinner width="2rem" />
                      </div>
                    </Container>
                  ) : (
                    <Container>
                      <ConnectionLost />
                    </Container>
                  )}
                </>
              )}
            </Container>
          </div>
          <NewIcon />
        </>
      ) : null}
    </Layout>
  )
}

export default Index
