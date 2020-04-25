import React, { useState } from 'react';

// 함수형 컴포넌트 이벤트 실습
const EventPractice = () => {
  // 인풋의 갯수가 많을 때 방식
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  // 인풋의 갯수가 적을 때 방식
  // const [username, setUsername] = useState('');
  // const [message, setMessage] = useState('');
  // const onChangeUsername = (e) => setUsername(e.target.value);
  // const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: '',
    });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해보새요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

// 클래스형 컴포넌트 이벤트 실습
// class EventPractice extends Component {
//   state = {
//     message: '',
//     username: '',
//   };

//   // 화살표 함수 형태로 메서드 바인딩
//   handleChange = (e) => {
//     this.setState({
//       // [, ]으로 key를 감싸면 내용이 가르키고 있는 것이 키가 된다.
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleClick = () => {
//     alert(this.state.username + ': ' + this.state.message);
//     this.setState({
//       message: '',
//       username: '',
//     });
//   };

//   // 키를 눌렀을 때 동작하는 핸들
//   handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       this.handleClick();
//     }
//   };

//   // constructor를 통해 메서드 바인딩
//   // constructor(props) {
//   //   super(props);
//   //   this.handleChange = this.handleChange.bind(this);
//   //   this.handleClick = this.handleClick.bind(this);
//   // }

//   // handleChange(e) {
//   //   this.setState({
//   //     message: e.target.value,
//   //   });
//   // }

//   // handleClick() {
//   //   alert(this.state.message);
//   //   this.setState({
//   //     message: '',
//   //   });
//   // }

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="username"
//           placeholder="사용자명"
//           value={this.state.username}
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해보세요"
//           value={this.state.message}
//           // 미리 함수를 만들어놓는 방법
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}

//           // 렌더링 메서드 내부에서 함수를 만들어 전달하는 방식
//           // e 객체는 SyntheticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체
//           // onChange={(e) => {
//           //   this.setState({
//           //     message: e.target.value,
//           //   });
//           // }}
//         />
//         <button
//           // 미리 함수를 만들어놓는 방법
//           onClick={this.handleClick}

//           // 렌더링 메서드 내부에서 함수를 만들어 전달하는 방식
//           // onClick={() => {
//           //   alert(this.state.message);
//           //   this.setState({
//           //     message: '',
//           //   });
//           // }}
//         >
//           확인
//         </button>
//       </div>
//     );
//   }
// }

export default EventPractice;
