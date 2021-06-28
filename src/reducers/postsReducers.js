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
  
 //declare posts state and set action payload
  export const postsReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
      case POSTS_LIST_REQUEST:
        return { loading: true, posts: [] }
      case POSTS_LIST_SUCCESS:
        return {
          loading: false,
          posts: action.payload,
          
        }
      case POSTS_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  //declare single and set action payload
  export const postDetailsReducer = (
    state = { post: [] },
    action
  ) => {
    switch (action.type) {
      case POSTS_DETAILS_REQUEST:
        return { ...state, loading: true }
      case POSTS_DETAILS_SUCCESS:
        return { loading: false, product: action.payload }
      case POSTS_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  //declare for deleting item
  export const postsDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case POSTS_DELETE_REQUEST:
        return { loading: true }
      case POSTS_DELETE_SUCCESS:
        return { loading: false, success: true }
      case POSTS_DELETE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  //add post
  export const postCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case POSTS_CREATE_REQUEST:
        return { loading: true }
      case POSTS_CREATE_SUCCESS:
        return { loading: false, success: true, product: action.payload }
      case POSTS_CREATE_FAIL:
        return { loading: false, error: action.payload }
      case POSTS_CREATE_RESET:
        return {}
      default:
        return state
    }
  }