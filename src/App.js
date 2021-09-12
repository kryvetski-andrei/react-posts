import React, { useState, useMemo } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./styles/App.css"

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Behind the Texas Abortion Law, a Persevering Conservative Lawyer', 
      body: 'A onetime Supreme Court clerk, Jonathan Mitchell spent years honing a legal approach that has flummoxed the courts and enraged abortion rights supporters. He is only now emerging as a pivotal player in one of the most high-profile examples yet of the erosion of the right to abortion.'
    },
    {
      id: 2,
      title: 'Coronavirus Updates',
      body: 'Israel threatens to charge scores who returned from a Ukraine pilgrimage using faked coronavirus test results. West Virginia, once a vaccination pacesetter, is struggling against the Delta variant. Barred from flying, an Alaska lawmaker who rejects ‘mask tyranny’ asks to be excused from the State Senate.'
    },
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})

  const sortedPosts = useMemo(() => {
    console.log('ОТРАБОТАЛА')
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;

  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query) || post.body.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  } 

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    

    <div className="App">
      <PostForm create={createPost}/>

      <hr style={{margin: "10px 0", height: "1px", border: "none", backgroundColor: "#CDD9DB1A"}}/>

      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />

      {sortedAndSearchedPosts.length !== 0
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="POST LIST"/>
        : <div className="no-post-placeholder">NO POSTS HERE :(</div>
      } 
    </div>
    
  )
}

export default App;