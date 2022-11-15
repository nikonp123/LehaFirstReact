import './App.css';
import { BrowserRouter} from "react-router-dom";
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter'
import { AuthContext } from './context';
import { useEffect, useState } from 'react';


function App() {
  const [isAuth,setIsAuth] = useState(false);
  const [isAuthLoading,setIsAuthLoading] = useState(true);

  useEffect(()=>{
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setIsAuthLoading(false);
  },[])

  // console.log('App');
  // console.log(isAuthLoading);
  return (
    <AuthContext.Provider value={{isAuth,setIsAuth,isAuthLoading}}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
