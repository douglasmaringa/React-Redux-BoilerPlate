import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { listPosts } from './actions/postsActions'
import Home from "./Home"
import "./App.css"


function App() {

  //calling an action 
  const dispatch = useDispatch()

  //getting state from reducer
  const postsList = useSelector((state) => state.postsList)

  //console.log(postsList.posts)

  useEffect(() => {
    //calling the specific function inside actions
    dispatch(listPosts())
    
  }, [dispatch ])

  return (
    <Router>
      <Switch>
     <Route path="/">
       <Home posts={postsList.posts}/>
     </Route>
        </Switch>
    </Router>
  )
}

export default App
