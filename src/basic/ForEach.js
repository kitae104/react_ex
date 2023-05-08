import React, { Component } from 'react';

class ForEach extends Component {

  componentDidMount() {
    // 1. Es5 for
    let Es5_Arr = [3, 2, 8, 8];
    let Es5_newArr = [];

    for(let i=0; i<Es5_Arr.length; i++) {
      Es5_newArr.push(Es5_Arr[i]);        // push() : 배열의 끝에 새로운 요소를 추가하고, 새로운 길이를 반환
    }
    console.log("1. Es5 for : " + Es5_newArr);

    // 2. forEach
    let Es6_Arr = [ 3, 3, 9, 8 ];
    let Es6_newArr = [];

    Es6_Arr.forEach((element) => {
      Es6_newArr.push(element);
    });
    console.log("2. Es6 forEach : " + Es6_newArr);


  }

  render() {
    return (
      <h2>[ THIS IS ForEach ]</h2>
    )
  }
}

export default ForEach;