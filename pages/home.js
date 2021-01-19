import React, { useContext, useEffect } from 'react'
import Layout from '../components/Layout'
import Tweet from '../components/Tweet'
import { Container } from '../components/Globals'
import { NewIcon } from '../components/Icons'
import ConnectionLost from '../components/ConnectionLost'
import appContext from '../context/app/appContext'
import Spinner from '../components/Spinner/Spinner'

const Index = () => {
  const { tweets, getTweets, loading } = useContext(appContext)

  useEffect(() => {
    getTweets()
  }, [])
  return (
    <Layout>
      <div>
        <Container>
          {tweets ? (
            <>
              {tweets.map(tweet => (
                <Tweet
                  key={tweet.id}
                  user={tweet.user}
                  username={tweet.username}
                  picture={tweet.picture}
                  content={tweet.content}
                  comments={tweet.comments}
                  likes={tweet.likes}
                  retweets={tweet.retweets}
                  date={tweet.date}
                />
              ))}
            </>
          ) : (
            <>
              {loading ? (
                <Container>
                  <Spinner />
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
    </Layout>
  )
}

export default Index
