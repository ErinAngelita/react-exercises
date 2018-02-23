import React, { Component } from 'react';

export default class Greeting extends Component {
  constructor(props){
    super(props);

  }

  render() {
    let notName;
    if (this.props.nameValue !== ""){
      notName = "Welcome to React ";

    }
    return(
    <div>
    <label>
    Name:
      <input id= "inputName" type="text" value={this.props.nameValue} onChange={(e)=>this.props.changeHandle(e)} />
      </label>
      <p> {notName} {this.props.nameValue}</p>
    </div>
    )
  }
}
