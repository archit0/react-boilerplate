import React from 'react';
export class App extends React.Component{
  constructor(){
    super();
  }
  proces(){
    for (let x=0;x<10;x++)
    console.log(x);
  }
  render(){
    return (
      <h1 onClick={this.proces}>Hello sWorld</h1>
    )
  }
}
