import React from "react";
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
  if (!posts.length) return <div className="no-post-placeholder">NO POSTS HERE..:(</div>
  
  return (
   <div>
      <h2 style={{margin: "20px"}}>{title}</h2>

      {posts.map((post, index) => 
        <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
      )}
   </div>
  )
}

export default PostList;