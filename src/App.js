import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import EventPractice from './EventPractice';
import Counter from './Counter';
import Say from './Say';

function App() {
  return (
    <Say />

    // 클래스형 컴포넌트의 스테이트 실습
    // <Counter />

    // 컴포넌트 실습 예제
    // <MyComponent name="React" favoriteNumber={1}>
    //   리엑트
    // </MyComponent>
  );
}

export default App;
