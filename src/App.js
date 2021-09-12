import React, { useState, useMemo } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import "./styles/App.css"

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Bob', body: 'd'},
    {id: 2, title: 'Alfa', body: 'c'},
    {id: 3, title: 'Ded', body: 'a'}
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo(() => {
    console.log('ОТРАБОТАЛА')
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;

  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  } 

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    

    <div className="App">
      <PostForm create={createPost}/>

      <hr style={{margin: "10px 0", height: "1px", border: "none", backgroundColor: "#CDD9DB1A"}}/>

      <MyInput
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
        placeholder="search..."
      />

      <MySelect 
        value = {selectedSort}
        onChange = {sortPosts}
        defaultValue="Сортировка по:"
        options = {[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'},
        ]}  
      />

      {sortedAndSearchedPosts.length !== 0
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Post List JS"/>
        : <div className="no-post-placeholder">NO POSTS HERE :(</div>
      } 
    </div>
    
  )
}

export default App;