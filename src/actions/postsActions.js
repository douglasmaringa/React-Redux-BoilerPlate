import axios from 'axios'
import {
  POSTS_LIST_REQUEST,
  POSTS_LIST_SUCCESS,
  POSTS_LIST_FAIL,
  POSTS_DETAILS_REQUEST,
  POSTS_DETAILS_SUCCESS,
  POSTS_DETAILS_FAIL,
  POSTS_DELETE_REQUEST,
  POSTS_DELETE_SUCCESS,
  POSTS_DELETE_FAIL,
  POSTS_CREATE_REQUEST,
    POSTS_CREATE_SUCCESS,
    POSTS_CREATE_FAIL,
    POSTS_CREATE_RESET,
} from '../constants/postsConstants'

 //Get posts from db and set to reducer
export const listPosts = () => async (
  dispatch
) => {
  try {
    dispatch({ type: POSTS_LIST_REQUEST })

    const { data } = await axios.get("http://localhost:5000/api/post")

    dispatch({
      type: POSTS_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: POSTS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

//get single post by id from backend and set to reducer
export const listPostDetails = (_id) => async (dispatch) => {
  try {
    dispatch({ type: POSTS_DETAILS_REQUEST })

    const { data } = await axios.get(`http://localhost:5000/api/post/${_id}`)

    dispatch({
      type: POSTS_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: POSTS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

//delete post by id
export const deletePost = (_id) => async (dispatch) => {
  try {
    dispatch({
      type: POSTS_DELETE_REQUEST,
    })

    
    await axios.delete(`http://localhost:5000/api/post/${_id}`)

    dispatch({
      type: POSTS_DELETE_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: POSTS_DELETE_FAIL,
      payload: message,
    })
  }
}

//create post
export const createPost = (title,paragraph) => async (dispatch) => {
  try {
    dispatch({
      type: POSTS_CREATE_REQUEST,
    })

  const { data } = await axios.post(`http://localhost:5000/api/post/`, 
    { 
      title: title,
      paragraph:paragraph
    })

    dispatch({
      type:  POSTS_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
   
    dispatch({
      type:  POSTS_CREATE_FAIL,
      payload: message,
    })
  }
}

//update post
export const updatePost = (_id,title,paragraph) => async (dispatch) => {
  try {
    dispatch({
      type: POSTS_CREATE_REQUEST,
    })

  const { data } = await axios.post(`http://localhost:5000/api/post/edit/${_id}`, 
    { 
      title: title,
      paragraph:paragraph
    })

    dispatch({
      type:  POSTS_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
   
    dispatch({
      type:  POSTS_CREATE_FAIL,
      payload: message,
    })
  }
}
