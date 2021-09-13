import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
  if (!posts.length) return <div className="no-post-placeholder">NO POSTS HERE..:(</div>
  
  return (
   <div>
      <h2 style={{margin: "20px"}}>{title}</h2>
      <TransitionGroup>
        {posts.map((post, index) => 
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
          </CSSTransition>     
        )}
      </TransitionGroup>
   </div>
  )
}

export default PostList;