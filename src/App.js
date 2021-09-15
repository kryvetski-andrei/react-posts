import React, { useEffect, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/modal/MyModal";
import { usePosts } from "./components/hooks/usePosts";
import axios from "axios";
import "./styles/App.css"

function App() {
  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(()=> {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  } 

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  async function fetchPosts() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    setPosts(response.data)
  }

  return (
    

    <div className="App">
      <button onClick={fetchPosts}>Get posts</button>
      <MyButton style={{backgroundColor: "#347D39", color: "#FFFFFF", fontWeight: "600"}} onClick={() => setModal(true)}>Создать пост</MyButton> 
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
     
      <hr style={{margin: "10px 0", height: "1px", border: "none", backgroundColor: "#CDD9DB1A"}}/>

      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />

      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="POST LIST"/>
    </div>
    
  )
}

export default App;