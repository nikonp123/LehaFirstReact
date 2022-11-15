import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Post from "../pages/Post";
import Posts from "../pages/Posts";

export const privateRoutes =[
    {path:'/', component: <About />, exact:true},
    {path:'/login', component: <Login />, exact:true},
    {path:'/about', component: <About />, exact:true},
    {path:'/posts', component: <Posts />, exact:true},
    {path:'/posts/:id', component: <Post />, exact:true},
    {path:'/error', component: <Error />, exact:true},
]

export const publicRoutes =[
    {path:'/', component: <Login />, exact:true},
    {path:'/login', component: <Login />, exact:true},
    {path:'/about', component: <About />, exact:true},
    {path:'/error', component: <Error />, exact:true},
]
{/* <Route path='/' element={<About />}></Route>
<Route path='/about' element={<About />}></Route>
<Route exact path='/posts' element={<Posts />}></Route>
<Route exact path='/posts/:id' element={<Post />}></Route>
<Route path='/error' element={<Error />}></Route>
<Route path="*" element={<Navigate replace to="/error" />} /> */}
