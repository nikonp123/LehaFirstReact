import React, { useState,useCallback } from 'react';
import { getAll } from '../common/API/PostService';
import ButtonElement from '../common/ButtonElement';
import Container from '../Container';
import './style.scss';


function Fetch(props) {

    const [posts,setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState([]);
    const [isLoadingAwait, setIsLoadingAwait] = useState([]);
    const [postsAwait,setPostsAwait] = useState([]);

    const url='https://jsonplaceholder.typicode.com/users/';

    function sendHTTPRequest(method,url,body=null) {
        let init;
        if (method='GET') {
            init = {method};
        } else {
            init = {method,
                    body: JSON.stringify(body),
                    headers: {
                        "Content-Type": "application/json",
                        "cache-control": "no-cache"}
                    }
            
        }
        return fetch(url,init).then(res => res.json())
    }

    const  handleClickBtnPromise = useCallback(() => {
        setIsLoadingAwait(false);
        sendHTTPRequest('GET',url)
        .then(json => {
            if (json) {
                setPosts(json);
                setIsLoadingAwait(true);
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    });

    const handleClickBtnAsync = useCallback(async ()=> {
        try {
            setIsLoadingAwait(false);
            const json = await sendHTTPRequest('GET','https://jsonplaceholder.typicode.com/albums/');
            if (json) {
                setPostsAwait(json);
                setIsLoadingAwait(true);
            }
        } catch (error) {
            console.log(error);
        }        
    })

    return (
        <Container>
            <div className='fetch'>
                <ButtonElement 
                    classNameProps='button_fetch-promise'
                    name = 'Fetch (promise)' typeBtn='text'
                    // dataAtr='data-modal' dataAtrValue='get-started' dataBtnName='get-started' 
                    onClickProps={handleClickBtnPromise}
                    />    
                <ul>Users:
                    {isLoading && posts.map(post => (<li key={post.id}>{post.name}</li>))}
                </ul>
                <ButtonElement 
                    classNameProps='button_fetch-async'
                    name = 'Fetch (async/await). ' typeBtn='text'
                    // dataAtr='data-modal' dataAtrValue='get-started' dataBtnName='get-started' 
                    onClickProps={handleClickBtnAsync}
                    /> 
                <ul>Posts:
                    {isLoadingAwait && postsAwait.map(post => (<li key={post.id}>{post.title}</li>))}
                </ul>

            </div>
    </Container>
    );
}

export default Fetch;