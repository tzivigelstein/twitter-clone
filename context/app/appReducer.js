import {
  GET_TWEETS_SUCCESS,
  GET_TWEETS_ERROR,
  POST_TWEETS_SUCCESS,
  POST_TWEETS_ERROR,
  LOADING,
  CAPTURE_TWEET_CONTENT,
  SET_CHAR,
  SET_DRAG,
  SET_TASK,
  SET_IMAGE,
} from 'types'

export default (state, action) => {
  switch (action.type) {
    case GET_TWEETS_SUCCESS:
      return {
        ...state,
        tweets: action.payload,
        loading: false,
      }
    case GET_TWEETS_ERROR:
      return {
        ...state,
        tweets: null,
        loading: false,
      }
    case LOADING:
      return {
        ...state,
        loading: true,
      }
    case CAPTURE_TWEET_CONTENT:
      return {
        ...state,
        tweetContent: action.payload,
      }
    case POST_TWEETS_SUCCESS:
    case POST_TWEETS_ERROR:
      return {
        ...state,
        loading: false,
        tweetContent: { area: '' },
        char: 0,
      }

    case SET_CHAR:
      return {
        ...state,
        char: action.payload,
      }

    case SET_DRAG:
      return {
        ...state,
        drag: action.payload,
      }
    case SET_TASK:
      return {
        ...state,
        task: action.payload,
      }
    case SET_IMAGE:
      return {
        ...state,
        image: action.payload,
      }
    default:
      break
  }
}
