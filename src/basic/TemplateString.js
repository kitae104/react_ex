import React, { Component } from 'react';

class TemplateString extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let jsString1 = '자바스크립트';
    let jsString2 = '입니다\n다음 줄입니다.';
    console.log(jsString1 + ' 문자열' + jsString2 + '~');

    let Es6String1 = 'ES6';
    let Es6String2 = '입니다.';
    console.log(`${Es6String1} 문자열 ${Es6String2}!!
    ____ 다음 줄입니다.`);

    let LongString = "ES6에 추가된 String 함수들입니다.";
    console.log('startsWidth : ' + LongString.startsWith("ES6에 추가"));
    console.log('endsWidth : ' + LongString.endsWith("함수들입니다."));
    console.log('includes : ' + LongString.includes("추가된 String"));
  }

  render() {    
    return (
      <div>
        <h2>[ THIS IS ES6 STRING ]</h2>        
      </div>
    );
  }
}

export default TemplateString;