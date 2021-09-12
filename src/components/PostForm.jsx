import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (event) => {
    event.preventDefault()
    const newPost = {
      ...post,
      id: Date.now(),
    }
    create(newPost)
    setPost({title: '', body: ''})
  }

  return (
    <form>

      <MyInput 
        type="text"
        value={post.title} 
        placeholder="Название поста"
        onChange = {event => setPost({...post, title: event.target.value})}
      />

      <MyInput         
        type="text"
        value={post.body}  
        placeholder="Содержимое поста"
        onChange = {event => setPost({...post, body: event.target.value})}
      />

      <MyButton onClick={addNewPost} style={{backgroundColor: "#347D39", color: "#FFFFFF"}}>Создать пост</MyButton>

    </form>
  )
}

export default PostForm;