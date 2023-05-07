import React, { Component } from "react";

class ClassPrototype extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 컴포넌트가 마운트 된 직후, DOM 노드가 있어야 한다면 여기서 처리
  componentDidMount() {
    //ES5 prototype
    var ExamCountFunc = (function () {
      function ExamCount(num) {
        this.number = num;
      }
      ExamCount.prototype.showNum = function () {
        console.log("1. react_" + this.number);
      };
      return ExamCount;
    })();

    var cnt = new ExamCountFunc("200");
    cnt.showNum();

    //ES6 class
    class ExamCountClass {
      constructor(num2) {
        this.number2 = num2;
      }
      showNum2 = () => {
        console.log("2. react_" + this.number2);
      };
    }

    let cnt2 = new ExamCountClass("300");
    cnt2.showNum2();
  }

  render() {
    return (
      <div>
        <h1>Class & Prototype</h1>
      </div>
    );
  }
}

export default ClassPrototype;
