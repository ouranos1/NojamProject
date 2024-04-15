import React from "react";
import axios from 'axios';
import { Component } from "react";

function signUpCheckEvent(){
  let iD = document.getElementById("userIdInput").value;
  let pW = document.getElementById("userPwInput").value;
  let nickName = document.getElementById("userNickNameInput").value;

  try{
    const signTest = axios.post("/user/sign-up", {
      "email" : iD,
      "nickname" : nickName,
      "password" : pW
    });
    console.log(signTest);
  }
  catch(error){
    console.log(error);
  }
}

function logInSuccess () { 

  return (
      <div className="Login_Layer">
        <h2>회원가입 화면</h2>
        <div className="signUpList">
          <h4>ID</h4>
          <input id="userIdInput" type="text"></input>
          <h4>PW</h4>
          <input id="userPwInput" type="password"></input>
          <h4>닉네임</h4>
          <input id="userNickNameInput" type="text"></input>
        </div>
        <br></br>
        <button Id="signUpCheckButton" onClick={signUpCheckEvent}>회원가입확인</button>
      </div>
  );
}

export default logInSuccess;