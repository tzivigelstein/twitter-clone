import React, { useReducer } from "react";
import appReducer from "./appReducer";
import appContext from "./appContext";
import axiosClient from "../../config/axiosClient";
import { useRouter } from "next/router";
import {
  GET_TWEETS_SUCCESS,
  GET_TWEETS_ERROR,
  POST_TWEETS_SUCCESS,
  POST_TWEETS_ERROR,
  LOADING,
  CAPTURE_TWEET_CONTENT,
} from "../../types";

const AppState = ({ children }) => {
  const initialState = {
    tweets: null,
    loading: false,
    msg: null,
    tweetContent: {
      area: null,
    },
  };
  const [state, dispatch] = useReducer(appReducer, initialState);

  const router = useRouter();

  const getTweets = async () => {
    dispatch({
      type: LOADING,
    });
    try {
      const q = await axiosClient("/api/tweets");
      dispatch({
        type: GET_TWEETS_SUCCESS,
        payload: q.data.tweets,
      });
      console.log(q.data.tweets);
    } catch (error) {
      dispatch({
        type: GET_TWEETS_ERROR,
      });
      console.log(error);
    }
  };

  const captureTweetContent = (data) => {
    dispatch({
      type: CAPTURE_TWEET_CONTENT,
      payload: data,
    });
  };

  const postTweet = async (data) => {
    dispatch({
      type: LOADING,
    });
    try {
      const q = await axiosClient.post("/api/tweets", data);
      dispatch({
        type: POST_TWEETS_SUCCESS,
        payload: q.data.todo,
      });
    } catch (error) {
      dispatch({
        type: POST_TWEETS_ERROR,
      });
      console.log(error);
    }
    router.push("/");
  };

  return (
    <appContext.Provider
      value={{
        tweets: state.tweets,
        loading: state.loading,
        msg: state.msg,
        tweetContent: state.tweetContent,
        getTweets,
        captureTweetContent,
        postTweet,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppState;
