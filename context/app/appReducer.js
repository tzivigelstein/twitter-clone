import {
  GET_TWEETS_SUCCESS,
  GET_TWEETS_ERROR,
  POST_TWEETS_SUCCESS,
  POST_TWEETS_ERROR,
  LOADING,
  CAPTURE_TWEET_CONTENT,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GET_TWEETS_SUCCESS:
      return {
        ...state,
        tweets: action.payload,
        loading: false,
      };
    case GET_TWEETS_ERROR:
      return {
        ...state,
        tweets: null,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case CAPTURE_TWEET_CONTENT:
      return {
        ...state,
        tweetContent: action.payload,
      };
    case POST_TWEETS_SUCCESS:
    case POST_TWEETS_ERROR:
      return {
        ...state,
        msg: action.payload,
        loading: false,
        tweetContent: { area: null },
      };
    default:
      break;
  }
};
