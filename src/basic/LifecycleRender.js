import React, { Component } from 'react';

class LifecycleRender extends Component {

  // 생성자 다음에 실행   
  static getDerivedStateFromProps(props, state) {    // props로 받아온 값을 state에 동기화시키는 용도로 사용
    console.log('getDerivedStateFromProps Call : ' + props.prop_value);
    return {tmp_state:props.prop_value};
  }

  // 생성자 함수, 컴포넌트가 새로 만들어질 때마다 이 함수 호출
  constructor(props) {    
    super(props);
    this.state = {};
    console.log('constructor Call');
  }

  // 컴포넌트가 화면에 나타나게 됐을 때 호출
  componentDidMount() {    
    console.log('componentDidMount Call');
    console.log('tmp_state : ' + this.state.tmp_state);
    this.setState({tmp_state2 : true});     // state 변경 -> shouldComponentUpdate 호출 
  }

  // 컴포넌트가 리렌더링을 해야 할지 말아야 할지를 결정하는 메소드
  shouldComponentUpdate(props, state) {   
    console.log('shoudComponentUpdate Call / tmp_state2 : ' + state.tmp_state2);
    return state.tmp_state2;
  }

  // return 되는 html 형식의 코드를 화면에 그려주는 함수, 화면 내용이 변경되어야 하는 시점에 자동 호출 
  render() {      
    console.log('render Call');
    return (
      <h2>[ THIS IS CONSTRCTOR/RENDER FUCNTION ]</h2>
    );
  }
}

export default LifecycleRender;