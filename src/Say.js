// 함수형 컴포넌트 state 실습
import React, { useState } from 'react';

const Say = () => {
  // 클래스형과 다르게 객체형태가 아니여도 상관이 없다.
  // useState를 호출하면 배열이 반환되는데 첫 번째 원소는 현재 상태, 두 번째 원소는 상태를 바꿔주는 함수이고, 그 이름을 수정할 수 있다.
  // 해당 실습 예제에서는 첫 번째 원소를 message, 두 번째 원소를 setMessage로 바꾼 상태
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히가세요!');

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>
    </div>
  );
};

export default Say;
