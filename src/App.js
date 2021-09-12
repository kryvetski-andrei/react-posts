import React, { useState } from "react"
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import "./styles/App.css"

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'}
  ])

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNewPost = (event) => {
    event.preventDefault()

    const newPost = {
      id: Date.now(),
      title,
      body
    }

    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <form>
        <MyInput 
          type="text"
          value={title} 
          placeholder="Название поста"
          onChange = {event => setTitle(event.target.value)}
        />
        <MyInput         
          type="text"
          value={body}  
          placeholder="Содержимое поста"
          onChange = {event => setBody(event.target.value)}
        />
        <MyButton onClick={addNewPost} style={{backgroundColor: "#347D39", color: "#FFFFFF"}}>Создать пост</MyButton>
      </form>
      

      <PostList posts={posts} title="Post List JS"/>
    </div>
    
  )
}

export default App;