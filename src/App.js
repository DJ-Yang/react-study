import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import EventPractice from './EventPractice';
import Counter from './Counter';
import Say from './Say';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';

class App extends Component {
  render() {
    return (
      <IterationSample />

      // 클래스 기반 DOM ref 사용 실습
      // <ValidationSample />

      // 컴포넌트 ref 사용 실습
      // <div>
      //   <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
      //   <button onClick={() => this.scrollBox.scrollToBottom()}>
      //     맨 밑으로
      //   </button>
      // </div>
    );
  }
}

// 함수 기반 컴포넌트
// function App() {
//   return (
//     // 이벤트 실습
//     //<EventPractice />

//     // 함수형 컴포넌트의 스테이트 실습
//     // <Say />

//     // 클래스형 컴포넌트의 스테이트 실습
//     // <Counter />

//     // 컴포넌트 실습 예제
//     // <MyComponent name="React" favoriteNumber={1}>
//     //   리엑트
//     // </MyComponent>
//   );
// }

export default App;
