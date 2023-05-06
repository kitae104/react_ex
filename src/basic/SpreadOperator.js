// 전걔 연산자는 배열이나 객체 변수를 좀 더 직관적이고 편리하게 합치거나 추출할 수 있게 해준다.
// 변수 앞에 ...을 붙여서 사용한다.
import React, { Component } from 'react';

class SpreadOperator extends Component {

  constructor(props) {  
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //javascript Array
    let varArray1 = ['num1', 'num2'];
    let varArray2 = ['num3', 'num4'];
    //let sumVarArr = [varArray1[0], varArray1[1], varArray2[0], varArray2[1]];
    let sumVarArr = [].concat(varArray1, varArray2);
    console.log('1. sumVarArr : ' + sumVarArr)

    //ES6 Array
    let sumLetArr = [...varArray1, ...varArray2];
    console.log('2. sumLetArr : ' + sumLetArr);

    const[a1, a2, ...remain] = sumLetArr;
    console.log('3. a1 : ' + a1 + ', a2 : ' + a2 + ', remain : ' + remain);

    let varObj1 = {key1 : 'val1', key2 : 'val2'};
    let varObj2 = {key2 : 'new2', key3 : 'val3'};

    //javascript Object
    // 객체를 합치기 위해서 assign() 함수를 사용한다.
    let sumVarObj = Object.assign({}, varObj1, varObj2);
    console.log('4. sumVarObj : ' + JSON.stringify(sumVarObj));

    //ES6 Object
    let sumLetObj = {...varObj1, ...varObj2};
    console.log('5. sumLetObj : ' + JSON.stringify(sumLetObj));

    // 키와 값을 추출해 키와 동일한 명칭의 개별 변수에 넣는다. 
    let{key1, key3, ...others} = sumLetObj;
    console.log('6. key1 : '+key1+', key3 : '+key3+', others : '+JSON.stringify(others));
  }

  render(){
    return (
      <h2>[ THIS IS SpreadOperator ]</h2>
    )
  }
}

export default SpreadOperator;