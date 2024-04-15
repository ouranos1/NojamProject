// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './test.css';
import React from "react";

import Main from "./page/main";
import SignUp from "./page/signUp";
import LogInSuccess from "./page/logInSuccess";

function App () { 
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/signUp" element={<SignUp />}/>
          {/* <Route path="/logInSuccess" element={<LogInSuccess />}/> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;