import React, { useContext } from 'react';
import {  Routes, Route, Navigate  } from "react-router-dom";
import About from '../../pages/About';
import Posts from "../../pages/Posts";
import Error from "../../pages/Error";
import Post from '../../pages/Post';
import { privateRoutes,publicRoutes } from '../../router';
import { AuthContext } from '../../context';
import Loader from '../Loader'

function AppRouter(props) {

    const {isAuth,setIsAuth,isAuthLoading} = useContext(AuthContext);
    console.log(isAuthLoading);

    if (isAuthLoading) {
        // return <h2>Loading..................</h2>
        return <Loader />    
    }

    return (
        <Routes>
            {isAuth && privateRoutes.map((e,i)=>(<Route key={i} path={e.path} element={e.component} exact={e.exact} />))}
            {!isAuth && publicRoutes.map((e,i)=>(<Route key={i} path={e.path} element={e.component} exact={e.exact} />))}

            {/* <Route path='/' element={<About />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route exact path='/posts' element={<Posts />}></Route>
            <Route exact path='/posts/:id' element={<Post />}></Route>
            <Route path='/error' element={<Error />}></Route> */}
            <Route path="*" element={<Navigate replace to="/error" />} />
        </Routes>
          );
}

export default AppRouter;