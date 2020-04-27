import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import MyComponent from './MyComponent';
// import EventPractice from './EventPractice';
// import Counter from './Counter';
// import Say from './Say';
// import ValidationSample from './ValidationSample';
// import ScrollBox from './ScrollBox';
// import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

// 랜덤 색상 생성 함수
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      // 라이플 사이클 실습
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>

      // 컴포넌트 반복 실습
      // <IterationSample />

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
