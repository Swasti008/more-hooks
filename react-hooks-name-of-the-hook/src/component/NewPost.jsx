import React from 'react'
import {ACTION_TYPE} from '../App'

function NewPost({post,dispatch}) {
  return (
    <div className='newPost'>
        <div className='post'>
            {post.toggle?<h3>{post.name}</h3>:<h3>This Content is hidden.</h3>}
        </div>
        <button onClick={()=>dispatch({type: ACTION_TYPE.TOGGLE , payload:{id:post.id}})}>TOGGLE</button>
    </div>
  )
}

export default NewPost