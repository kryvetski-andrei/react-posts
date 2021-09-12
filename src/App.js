import React, { useState } from "react"
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import "./styles/App.css"

function App() {
  const [posts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'}
  ])

  const [posts2] = useState([
    {id: 1, title: 'NodeJS', body: 'Description'},
    {id: 2, title: 'NodeJS 2', body: 'Description'},
    {id: 3, title: 'NodeJS 3', body: 'Description'}
  ])

  return (
    <div className="App">
      <MyInput type="text" placeholder="Название поста"/>
      <MyInput type="text" placeholder="Содержимое поста"/>
      <MyButton disabled style={{backgroundColor: "#347D39", color: "#FFFFFF"}}>Создать пост</MyButton>

      <PostList posts={posts} title="Post List JS"/>
      <PostList posts={posts2} title="Post List NodeJS"/>
    </div>
    
  )
}

export default App;