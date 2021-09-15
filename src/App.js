import React, { useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/modal/MyModal";
import { usePosts } from "./components/hooks/usePosts";
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

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  } 

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
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

      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="POST LIST"/>
    </div>
    
  )
}

export default App;