import React from "react";
import { Component } from "react";
import TextLength from "./components/TextLength";


class App extends Component {

  state = {
    person: [
      { name: "Yagami Light, Kami!!!!!"}
    ],
  }


  textChangedHandler (event) {
    this.setState({
          person: [
            { name:event.target.value}
          ]})
  }

  render() {
    
    let {person:[{name}]} = this.state
    let length = name.length;

    return (
      <>
        <TextLength autotext = {
          ()=>{
            this.textChangedHandler(event)
            }}
            theChange={name}
            theLength={length}
            > Length: </TextLength>
      </>
    )
  }
}





export default App;
