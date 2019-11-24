import React from "react";
import "./style.css";

// JSX : javascript XML
// 역할 : javascript가 html을 제어해요
// 1. js에서 html을 생성하고,
// 2. js에서 html을 제어해요.

// 한계점 => jsx는 하나의 component만 리턴할 수 있다.
// 2개의 컴포넌트를 리턴하는 방법 => fragment

// 백엔드 영역
// 데이터베이스 연동
// 인터넷 네트워크 연결
// 실시간 채팅기능 만드는 API를 연결

// React는 언어 X
// Javascript의 Library - 나 그거 할 줄 알아

const people = ["123, ", "456, ", "789, "];

function App() {
  return (
    <>
      <h1>Hello World!!</h1>
      <p> REAECT </p>

      <h3>{people}</h3>
      <button>INCREMENT</button>
      <button>DECREMENT</button>
    </>
  );
}

export default App;
