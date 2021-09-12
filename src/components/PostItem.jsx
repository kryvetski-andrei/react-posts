import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {

  return (
    <div className="post">
      
      <div className="post__content">
        <h4>{props.number}. {props.post.title}</h4>
        <p style={{margin: "10px 10px 0px 25px"}}>
          {props.post.body}
        </p>
      </div>

      <div className="post__btns">
        <MyButton onClick={() => props.remove(props.post)} >Удалить</MyButton>
      </div>

    </div>
  )
}

export default PostItem;