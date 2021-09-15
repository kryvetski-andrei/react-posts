import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../api/PostService";
import { useFetching } from "../components/hooks/useFetching";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data);
  })

  useEffect(() => {
    fetchPostById(params.id)
  }, [])
  return (
    <div>
      <h2>вы открыли стр поста {params.id}</h2>
      {isLoading
        ? <Loader/>
        : <div>{post.id}. {post.title}</div>
      }
      
    </div>
    
  )
}

export default PostIdPage