import React from "react";
import MyButton from "./UI/button/SimpleButton/Button";
import { useHistory } from "react-router-dom";

const PostItem = (props) => {
  const router = useHistory()
  return (
    <div className="post">
      
      <div className="post__content">
        <h4>{props.post.id}. {props.post.title}</h4>
        <p style={{margin: "10px 10px 0px 25px"}}>
          {props.post.body}
        </p>
      </div>

      <div className="post__btns">
        <MyButton onClick={() => router.push(`/posts/${props.post.id}`)} >Открыть</MyButton>
        <MyButton onClick={() => props.remove(props.post)} >Удалить</MyButton>
      </div>

    </div>
  )
}

export default PostItem;