// 배열 함수 map()은 foreach()와 마찬가지로 for문에서 사용하던 순번과 배열의 크기 변수를 사용하지 않음
import React, { Component } from 'react';

class Map extends Component {

  componentDidMount() {
    let Map_Arr = [ 3, 2, 8, 8 ];
    let Map_newArr = Map_Arr.map( x => x);
    console.log("1. Map_newArr : ["+Map_newArr+"]");
    
    let Map_newArr2 = Map_Arr.map( x => x * 2);
    console.log("2. Map_newArr2 : ["+Map_newArr2+"]");

    let ObjArray = [{key:'react', value:'200'},
                    {key:'리액트', value:'TwoHundred'}];
    let Map_objArr = ObjArray.map((obj, index) => {
      console.log((index+3)+". obj : "+JSON.stringify(obj));
      let Obj = {};
      Obj[obj.key] = obj.value;
      return Obj;
    });
    console.log("5. Map_objArr : "+JSON.stringify(Map_objArr));
  }

  render() {
    return (
      <h2>[ THIS IS Map ]</h2>
    )
  }
}

export default Map;