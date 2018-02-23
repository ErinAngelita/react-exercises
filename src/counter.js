import React, { Component } from 'react';

export default class Counter extends Component{
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
    }

  }

  onClick(e) {
    let currentCounter;
    if(e.target.id === "plus"){
      currentCounter = this.setState({counter:this.state.counter + 1})
      } else if(e.target.id === "minus"){
      currentCounter = this.setState({counter:this.state.counter - 1})
      }
    }

  render(){
    return(
      <div>
        <button id="plus" type="button" className="" onClick = {(e) => this.onClick(e)}> + </button>
        <h1 id= "derp"> {this.state.counter} </h1>
        <button id="minus" type="button" className="" onClick = {(e) => this.onClick(e)}> - </button>



      </div>
    )
  }

}
