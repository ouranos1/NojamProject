import axios from 'axios';
import { Component } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";


class Subject extends Component {
  render() {
    return (
      <header>
        {/* /*id="project_title"* */}
        <h1> 
          
        </h1>
        테스트중입니다.
      </header>
    );
  }
}

class Login_List extends Component{
  render() {
    return(
      <div id="login_List">
        <div id="id_Input_Layer">
          <h5>ID</h5>
          <input id="id_Input" type="text"></input>
        </div>
        <div className="passWord_Input_Layer">
          <h5>PW</h5>
          <input id="passWord_Input" type="text"></input>
        </div>
      </div>
    );
  }
}

function MainPage () { 
  const navigate = useNavigate();

  function login_Event(){
    console.log("로그인 테스트");
  
    let userId = document.getElementById("id_Input").value;
    let userPw = document.getElementById("passWord_Input").value;
  
    try{
      const response = axios.post("/user/login", {
        "email" : userId,
        "password" : userPw
      });
      console.log(response.data);
    }
    catch(error){
      console.log("오류", error);
    }
  }

  const navigatesignUp = () => {
    navigate("/signUp");
  };

  return (
      <div className="Login_Layer">
        <h2>로그인 화면</h2>
        <div className="Title">
          <h2>타이틀</h2>
        </div>
      <Login_List></Login_List>
      <div className="button_Layer">
            <button type="submit" id="login_Button" onClick={login_Event}>로그인</button><br></br>
            <button type="button" id="sign_Button" onClick={navigatesignUp}>회원가입</button>
          </div>
      </div>
  );
}

export default MainPage;