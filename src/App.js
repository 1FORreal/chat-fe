import './App.css';
import React from 'react';
import SignUp from './components/sign-up/SignUp';
import LogIn from './components/log-in/LogIn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './components/chat/Chat';
import MyTest from './components/test/Test';

export default function App() {

  return (


    <Router>
      <Routes>
        <Route path='log-in' element={<LogIn/>}/>
        <Route path='sign-up' element={<SignUp/>}/>
        <Route path='chat' element={<Chat/>}/>
        <Route path ='test' element={<MyTest/>}/>
      </Routes>
    </Router>
  )
}
