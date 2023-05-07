import React, { Component } from "react";

class ArrowFuncion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowFunc: "arrowFunc",
      num: 3,
    };
  }

  componentDidMount() {
    Function1(1);
    this.Function2(1, 1);
    this.Function3(1, 2);
    this.Function4();
    this.Function5(1,2,2);

    function Function1(num1) {
      return console.log(num1 + ". Es5 Function");
    }
  }

  Function2 = (num1, num2) => {
    let num3 = num1 + num2;
    console.log(num3 + ". Arrow Function" + this.state.arrowFunc);
  };

  Function3 = (num1, num2) => {
    let this_bind = this;         // this를 바인딩
    setTimeout(function() {
      console.log(num1 + num2 + ". Es5 Callback Function" + this_bind.state.arrowFunc);
      console.log(this_bind.state.arrowFunc);    // this_bind를 사용해야 함 - this는 window 객체를 가리킴
    }, 100);
  };

  Function4() {
    setTimeout(function() {
      console.log('4. Es5 Callback Function Bind : ' + this.state.arrowFunc);
    }.bind(this), 100);
  };

  Function5 = (num1, num2, num3) => {
    const num4 = num1 + num2 + num3;
    setTimeout(() => {
      console.log(num4 + ".Arrow Function" + this.state.arrowFunc);
    }, 100);
  };

  render() {
    return (
      <h2>[ THIS IS ArrowFunction ]</h2>
    )
  }
}

export default ArrowFuncion;