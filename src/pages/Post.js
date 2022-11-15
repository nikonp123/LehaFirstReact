import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getById,getCommentsById } from '../components/common/API/PostService';
import {useFetching} from '../components/hooks/useFetching';
import Loader from '../components/Loader'

function Post(props) {
    const params = useParams();
    // console.log(params);
    const id=params.id;

    const [post,setPost] = useState({});
    const [fetchPosts,isLoading,postError] = useFetching(async()=> {
        const response = await getById(id);
        setPost(response.data);
    });

    const [comments,setComments]=useState([]);
    const [fetchComments,isLoadingComments,commentsError] = useFetching(async()=>{
        const response = await getCommentsById(id);
        setComments(response.data);
    });

    useEffect(()=>{
        fetchPosts(id);
        fetchComments(id);
    },[])

    // let currentContent = <Loader />;
    // if (isLoading) {
    //     currentContent = <div>{post.id} {post.title}</div>
    // };

    // console.log(comments);

    return (
        <div>
            {
                isLoading
                ? <Loader />
                : <div>{post.id} {post.title}</div>
                
            }
            <h2>Comments</h2>
            {
                isLoadingComments
                ? <Loader />
                : comments.map((e)=><li key={e.id}>{e.id} e-mail: {e.email} Commnet: {e.name}</li>)
           
            }

            {/* {currentContent}                    */}
        </div>
    );
}

export default Post;