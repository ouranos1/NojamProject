// import './App.css';
import './test.css';
import axios from 'axios';
import { Component } from "react";

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

function App () {
  
  const login_Event = async () => {
    console.log("테수트");
    try{
      const response = await axios.get("/user/1");
      console.log(response.data);
    }
    catch(error){
      console.log("오류", error);
    }
  }

  return (
    <div className="Login_Layer">
      {/* <Subject></Subject> */}
      <h2>로그인 화면</h2>
      <div className="Title">
        <h2>타이틀</h2>
      </div>
     <Login_List></Login_List>
     <div className="button_Layer">
          <button type="submit" id="login_Button" onClick={login_Event}>로그인</button><br></br>
          <button type="submit" id="signUp" onClick={signUp_Event}>회원가입</button>
        </div>
    </div>
  );
}

function signUp_Event(){
  console.log("테스트");

}

export default App;