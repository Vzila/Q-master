import React,{createContext,useReducer} from 'react'
import { Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/navbar';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signUp';
import Footer from './components/footer';
import About from './components/About';
import Logout from './components/Logout';
import reducer,{ initialState } from './components/reducer/Usereducer';
export const userContext= createContext();
export default function App() {
  const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <>
    <userContext.Provider value={{state,dispatch}}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/logout" element={<Logout/>} />
        <Route path="*" component={<Home />} />
      </Routes>
      <Footer/>
      </userContext.Provider>
    </>
  )
}
