import React, { useEffect, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/modal/MyModal";
import { usePosts } from "./components/hooks/usePosts";
import "./styles/App.css"
import PostService from "./api/PostService";
import Loader from "./components/UI/loader/Loader";

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostsLoading] = useState(false);

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
    setIsPostsLoading(true)
    const posts = await PostService.getAll();
    setPosts(posts)
    setIsPostsLoading(false)
  }

  return (
  
    <div className="App">
      <MyButton style={{backgroundColor: "#347D39", color: "#FFFFFF", fontWeight: "600"}} onClick={() => setModal(true)}>Создать пост</MyButton> 
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
     
      <hr style={{margin: "10px 0", height: "1px", border: "none", backgroundColor: "#CDD9DB1A"}}/>

      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
      {isPostsLoading
        ? <div style = {{display: "flex", justifyContent: "center", height: "70vh", alignItems: "center"}}><Loader/></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="POST LIST"/>
      }
      
    </div>
    
  )
}

export default App;