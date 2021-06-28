import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {postsReducer,postDetailsReducer,postsDeleteReducer,postCreateReducer} from './reducers/postsReducers'


const reducer = combineReducers({
  postsList: postsReducer,
  post: postDetailsReducer,
  postDelete:postsDeleteReducer,
  postCreate:postCreateReducer
})

const initialState = {
    posts: {
        postsList: postsReducer
    },
    post: {
      post: postDetailsReducer
  },
  postDelete: {
    postDelete: postsDeleteReducer
},
postCreate: {
  postCreate:postCreateReducer
}
  }


const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
