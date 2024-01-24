import { useReducer, useRef, useState } from 'react'
import './App.css'
import NewPost from './component/NewPost'

export const ACTION_TYPE={
  ADD_POST:"addPost",
  TOGGLE:'toggle'
}
const reducer=(state,action)=>{
  switch(action.type){
    case ACTION_TYPE.ADD_POST:
      return {...state,posts:[...state.posts,action.payload]};
    case ACTION_TYPE.TOGGLE:
      return{...state,posts:state.posts.map((post)=>
        post.id===action.payload.id?{...post,toggle:!post.toggle} : post
        )}
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, { posts: [] });
  const [inputValue, setInputValue] = useState('');
  const ref=useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue!==''){
    const newPost = { id: Date.now(), name: inputValue, toggle: true};
    dispatch({ type: ACTION_TYPE.ADD_POST, payload: newPost });
    setInputValue('');}
    else{
      alert("please enter something")
    }
  };
  function focus(){
    ref.current.focus();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className='inputField'
        ref={ref}
          placeholder='Type something'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button type='submit'>Add</button>
      </form>

      {state.posts.map((post) => (
        <NewPost key={post.id} post={post} dispatch={dispatch} />
      ))}

      <button onClick={focus}>Get back</button>
    </div>
  );
}

export default App;