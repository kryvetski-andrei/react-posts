import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../api/PostService";
import { useFetching } from "../components/hooks/useFetching";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data);
  })
  const [fetchComments, isCommentLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentByPostId(id)
    setComments(response.data);
  })

  useEffect(() => {
    fetchPostById(params.id)
    fetchComments(params.id)
  }, [])
  return (
    <div>
      <h2>вы открыли стр поста {params.id}</h2>
      {isLoading
        ? <Loader/>
        : <div>{post.id}. {post.title}</div>
      }
      <h3>Комантарии</h3>
      {isCommentLoading
        ? <Loader/>
        : <div>
            {comments.map(comm => {
              return (
                <div>
                  <h3>{comm.email}</h3>
                  <p>{comm.body}</p>
                </div>
              )
            })}
          </div>
      }
    </div>
    
  )
}

export default PostIdPage