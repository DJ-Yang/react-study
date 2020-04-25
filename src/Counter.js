// 클래스형 컴포넌트 state 실습
import React, { Component } from 'react';

class Counter extends Component {
  // 다른 방식의 state 선언법
  state = {
    number: 0,
    fixedNumber: 0,
  };

  // constructor를 사용해서 state 초깃갑 설정 법
  // constructor(props) {
  //   super(props);
  //   // state의 초기값 설정
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0,
  //   };
  // }

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log('방금 setState가 호출되었습니다.');
                console.log(this.state);
              }
            );

            // // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            // this.setState((prevState) => {
            //   // state는 객체 형태로 전달되어야 하기 때문에 반환 할때 {,} 을 넣어줘야한다.
            //   return {
            //     number: prevState.number + 1,
            //   };
            // });
            // this.setState((prevState) => {
            //   return {
            //     number: prevState.number + 2,
            //   };
            // });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
