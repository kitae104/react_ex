import React from 'react';
import './App.css';
import PropsDatatypes from './basic/PropsDatatypes';

function App() {
  return (
    <>
      <h1>인하공전 컴시과 23'</h1>
      <p>CSS 적용하기</p>
      <PropsDatatypes 
        String="Data"
        Number={123}
        Boolean={1==1}
        Array={[0, 1, 8]}
        ObjectJson={{name: "홍길동", age: 21}}
        Function={console.log("FunctionProps: function!")}
      />
    </>
  );
}

export default App;
