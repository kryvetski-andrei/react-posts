import React, { useState } from "react"
import PostList from "./components/PostList";
import "./styles/App.css"

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'}
  ])

  const [posts2, setPosts2] = useState([
    {id: 1, title: 'NodeJS', body: 'Description'},
    {id: 2, title: 'NodeJS 2', body: 'Description'},
    {id: 3, title: 'NodeJS 3', body: 'Description'}
  ])

  return (
    <div className="App">
      <PostList posts={posts} title="Post List JS"/>
      <PostList posts={posts2} title="Post List NodeJS"/>
    </div>
    
  )
}

export default App;