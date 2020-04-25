import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: ''
  }
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요"
          onChange={
            (e) => {
              this.setState({
                message: e.target.value
              })
            }
          }
        />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default EventPractice;