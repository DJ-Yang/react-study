import React, { useState } from 'react';

const IterationSample = () => {
  // 객체 형태로 이루어진 배열 map 사용 기본 실습
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      // react는 상태를 업데이트 할 떄는 기존의 상태를 그대로 두면서 새로운 값을 상태로 설정을 해야한다. 이를 불변성 유지라고 한다.
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>;
    </>
  );

  // map 사용 기본 실습
  // const names = ['눈사람', '얼음', '눈', '바람'];
  // const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  // return <ul>{nameList}</ul>;
};

export default IterationSample;
