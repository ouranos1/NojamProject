// import './App.css';

import { Component } from "react";

class Subject extends Component{
  render(){
    return (
      <header>
        <h1>
          TEST
        </h1>
        테스트중입니다.
      </header>
    );
  }
}

function App() {
  return (
    <div className="home">
      <Subject></Subject>
      <user_page>
        <h2>닉네임, 마이페이지</h2>
      </user_page>

      <header>
        <h1>게임 파티 모집</h1>
      </header>
    </div>
  );
}

export default App;