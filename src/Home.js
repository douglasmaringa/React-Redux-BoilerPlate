import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listPostDetails,deletePost,createPost,updatePost } from './actions/postsActions'

function Home({posts}) {
    const[title,setTitle]=useState("");
    const[paragraph,setParagraph] = useState("");
  const dispatch = useDispatch()

    const view = (_id)=>{
       dispatch(listPostDetails(_id))
      // console.log(_id)
      //const { data } = await axios.get(`http://localhost:5000/api/post/${_id}`)
      // console.log(data)
      //history . push then get the post from redux as post from store.
    }

    const remove = (_id)=>{
        dispatch(deletePost(_id))
       
     }

     const create =()=>{
        dispatch(createPost(title,paragraph))
     }

     const edit =(_id)=>{
        dispatch(updatePost(_id,title,paragraph))
     }
    return (
        <div>
            <h1>Posts</h1>
            <input placeholder="title" type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <br/>
            <input placeholder="paragraph" type="text" value={paragraph} onChange={(e)=>{setParagraph(e.target.value)}}/>
            <br/>
            <button onClick={create}>Create</button>
            {
                posts.map(m=>(
                    <>
                    <h1>{m.title}</h1>
                    <input placeholder="title" type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <br/>
                    <p>{m.paragraph}</p>
                    <input placeholder="paragraph" type="text" value={paragraph} onChange={(e)=>{setParagraph(e.target.value)}}/>
            <br/>
                    <button onClick={()=>{view(m._id)}}>View</button>
                    <button onClick={()=>{remove(m._id)}}>Delete</button>
                    <button onClick={()=>{edit(m._id)}}>Edit</button>
                    </>
                ))
            }
            
        </div>
    )
}

export default Home
