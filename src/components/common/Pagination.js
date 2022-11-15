import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import { getAll } from './API/PostService';
import PostService from './API/PostService';
import ButtonElement from './ButtonElement';
import Loader from '.././Loader';
import Container from '../Container';
import { useFetching } from '../hooks/useFetching';
import { getPageCount, getPagesArray } from '../utils/pages';
import '../../scss/style.scss';

function Pagination(props) {

    const [posts,setPosts] = useState([]);
    // const [isLoading,setIsLoading] = useState(true);
    const [totalCount,setTotalCount] = useState(0);
    const [limit,setLimit] = useState(15);
    const [pageNumber,setPageNumber] = useState(1);
    const [totalPages,setTotalPages] = useState(1);

    const [fetchPosts,isLoading,postError] = useFetching(async()=> {
        const res = await getAll(limit,pageNumber);
        let totalPosts = res.headers['x-total-count'];
        const totalPages = getPageCount(totalPosts,limit);
        // console.log(totalPages);
        setPosts(res.data);
        setTotalCount(totalPosts);
        setTotalPages(totalPages);
    });

    useEffect(()=>{
        fetchPosts();
    },[pageNumber]);

    useEffect(()=>{
        let pageCount = getPageCount(totalCount,limit);
        // console.log('useEffect limit',totalCount,limit,pageCount);
        setTotalPages(pageCount);
    },[limit,totalCount]); 

     const arrPages = useMemo(()=>getPagesArray(totalPages)
    ,[totalPages,totalCount]);

    // useEffect(()=>{
    // },posts)

    const deletePostHandler = (post) => {
        setPosts(posts.filter(p=>p.id !== post.id));
        setTotalCount(p=>p-1);
    }

    // const fetchPosts = async () => {
    //     setTimeout(async()=>{
    //         const res = await getAll();
    //         setPosts(res);
    //         setIsLoading(false);
    //     },2000);
    // };

    // const handleClickBtnPagination = useCallback(async ()=>{
    //     const res = await getAll();
    //     // const res = await PostService.getAllClass();
    //     setPosts(res)
    //     setIsLoading(true);
    // });


    const navigatePostComment = useNavigate();
    // navigate('/about');

    return (
        <Container>
            <div>
                <input min={"1"} type="number" value={limit} onChange={(e)=>setLimit(e.target.value)}/>
            </div>
            <div>
                <h2>Axios+Pagination+Custom hook(useFetching)+Loader</h2>
                {/* <ButtonElement 
                    classNameProps='button_pagination'
                    name = 'Axios+Pagination+Custom hook' typeBtn='text'
                    // dataAtr='data-modal' dataAtrValue='get-started' dataBtnName='get-started' 
                    onClickProps={handleClickBtnPagination}
                />                 */}
                {/* <Loader /> */}
                {postError && <h2  style={{color: "red"}}>{postError}</h2>}
                {!isLoading ? '' : <Loader />}
                <ol> {!isLoading ? 'Posts (pagination)' : ''}
                    {!isLoading && posts.map(post=> (
                    <div key={post.id} className='pagination-post'>
                        <li >{post.id} {post.title}</li>
                        <div className='pagination-post__buttons'>
                            <button onClick={()=>navigatePostComment(`/posts/${post.id}`)}>Comment</button>
                            <button onClick={()=>deletePostHandler(post)}>Delete</button>
                        </div>
                    </div>    
                    ))}
                </ol>
                <div className='pagination-buttons'>
                    {arrPages.map(e=><span 
                                        key={e} 
                                        className={e===pageNumber ? 'pagination-buttons__current':'pagination-buttons__button'}
                                        onClick={()=>setPageNumber(e)}
                                        >
                                      {e}
                                      </span>)}
                    {/* {arrPages.map(e=><ButtonElement name={e} />)} */}
                </div>
            </div>
        </Container>
    );
}

export default Pagination;