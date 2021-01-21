import { useReducer } from 'react'
import appReducer from 'context/app/appReducer'
import appContext from 'context/app/appContext'
import { useRouter } from 'next/router'
import { db } from 'firebase/client'
import firebase from 'firebase'
import {
  GET_TWEETS_SUCCESS,
  GET_TWEETS_ERROR,
  POST_TWEETS_SUCCESS,
  POST_TWEETS_ERROR,
  LOADING,
  CAPTURE_TWEET_CONTENT,
  SET_CHAR,
  SET_DRAG,
  DRAG_IMAGE_STATES,
  SET_TASK,
  SET_IMAGE,
} from 'types'

const AppState = ({ children }) => {
  const initialState = {
    task: null,
    image: null,
    drag: DRAG_IMAGE_STATES.NONE,
    char: 0,
    MAX_CHAR: 140,
    tweets: null,
    loading: false,
    msg: null,
    tweetContent: {
      area: '',
    },
  }
  const [state, dispatch] = useReducer(appReducer, initialState)

  const router = useRouter()

  const getTweets = async () => {
    dispatch({
      type: LOADING,
    })
    try {
      const q = await db.collection('tweets').orderBy('createdAt', 'desc').get()

      const res = q.docs.map(doc => {
        const data = doc.data()
        data.id = doc.id
        return data
      })

      dispatch({
        type: GET_TWEETS_SUCCESS,
        payload: res,
      })
    } catch (error) {
      dispatch({
        type: GET_TWEETS_ERROR,
      })
      console.log(error)
    }
  }

  const captureTweetContent = data => {
    dispatch({
      type: CAPTURE_TWEET_CONTENT,
      payload: data,
    })
  }

  const postTweet = async data => {
    data = {
      ...data,
      createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
      likes: [],
      retweets: [],
      comments: [],
    }
    dispatch({
      type: LOADING,
    })
    try {
      const q = await db.collection('tweets').add(data)
      dispatch({
        type: POST_TWEETS_SUCCESS,
      })

      console.log(q)
    } catch (error) {
      dispatch({
        type: POST_TWEETS_ERROR,
      })
      console.log(error)
    }
    router.replace('/')
  }

  const setChar = charLength => {
    dispatch({
      type: SET_CHAR,
      payload: charLength,
    })
  }

  const setDrag = type => {
    dispatch({
      type: SET_DRAG,
      payload: type,
    })
  }

  const setTask = task => {
    dispatch({
      type: SET_TASK,
      payload: task,
    })
  }

  const setImage = image => {
    dispatch({
      type: SET_IMAGE,
      payload: image,
    })
  }

  return (
    <appContext.Provider
      value={{
        image: state.image,
        task: state.task,
        drag: state.drag,
        char: state.char,
        MAX_CHAR: state.MAX_CHAR,
        tweets: state.tweets,
        loading: state.loading,
        msg: state.msg,
        tweetContent: state.tweetContent,
        getTweets,
        captureTweetContent,
        postTweet,
        setChar,
        setDrag,
        setTask,
        setImage,
      }}
    >
      {children}
    </appContext.Provider>
  )
}

export default AppState
