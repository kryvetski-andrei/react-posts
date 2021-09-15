import React, { useEffect, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/SimpleButton/Button";
import MyModal from "./components/UI/modal/MyModal";
import { usePosts } from "./components/hooks/usePosts";
import "./styles/App.css"
import PostService from "./api/PostService";
import Loader from "./components/UI/loader/Loader";
import { useFetching } from "./components/hooks/useFetching";
import { getPagesCount } from "./utils/pages";
import Pagination from "./components/UI/pagination/Pagination";

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPagesCount(totalCount, limit))
  })

  useEffect(()=> {
    fetchPosts(limit, page)
  }, [page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  } 

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
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
      {postError &&
        <h2>Smth goes wrong... {postError}</h2>
      }
      {isPostsLoading
        ? <div style = {{display: "flex", justifyContent: "center", height: "70vh", alignItems: "center"}}><Loader/></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="POST LIST"/>
      }

      <Pagination changePage={changePage} totalPages={totalPages}/>
    </div>
    
  )
}

export default App;